import {readFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import vm from 'node:vm';
import test from 'node:test';
import assert from 'node:assert/strict';
const root=fileURLToPath(new URL('../',import.meta.url));
const catalogSource=readFileSync(root+'quiz-catalog.js','utf8');
const artSource=readFileSync(root+'quiz-art.js','utf8');
const engine=readFileSync(root+'quiz-engine.js','utf8').replace(/initializeQuiz\(\);\s*$/,'');
const dataContext=vm.createContext({});vm.runInContext(catalogSource,dataContext);
const catalog=vm.runInContext('quizCatalog',dataContext);
const banks=Object.fromEntries(catalog.map(q=>[q.slug,JSON.parse(readFileSync(root+'data/quizzes/'+q.slug+'.json','utf8'))]));
function setup(slug=catalog[0].slug,{storage=new Map(),blocked=false,loadFailure=false}={}){
 const element={innerHTML:'',focus(){},querySelector(){return element},querySelectorAll(){return []}};
 let copied='',path='',fetched=0;
 const sandbox={URLSearchParams,document:{querySelector:()=>element,documentElement:{style:{setProperty(){}}}},localStorage:{getItem:key=>{if(blocked)throw Error('blocked');return storage.get(key)||null},setItem:(key,value)=>{if(blocked)throw Error('blocked');storage.set(key,value)}},history:{replaceState(a,b,value){path=value}},location:{origin:'https://dzaytsev91.github.io',pathname:'/alfea-spark/quiz.html',search:'?quiz='+encodeURIComponent(slug),hash:''},navigator:{clipboard:{async writeText(value){copied=value}}},window:{scrollTo(){},addEventListener(){}},setTimeout:()=>0,clearTimeout(){},async fetch(){fetched++;if(loadFailure)throw Error('offline');return {ok:true,json:async()=>banks[slug]}}};
 vm.createContext(sandbox);vm.runInContext(catalogSource+'\n'+artSource+'\n'+engine+'\nshowNotice=()=>{};',sandbox);
 if(banks[slug])vm.runInContext('questionBank='+JSON.stringify(banks[slug])+';questionById=new Map(questionBank.map(q=>[q.id,q]));',sandbox);
 return {run:code=>vm.runInContext(code,sandbox),element,storage,getCopied:()=>copied,getPath:()=>path,getFetched:()=>fetched};
}
test('eleven distinct quizzes with 330 complete and unique questions',()=>{
 assert.equal(catalog.length,11);assert.equal(new Set(catalog.map(q=>q.slug)).size,11);
 assert.equal(catalog.filter(q=>q.category==='games').length,5);assert.equal(catalog.filter(q=>q.category==='series').length,6);
 const seen=new Set();
 const normalize=s=>s.toLowerCase().replace(/ё/g,'е').replace(/[^\p{L}\p{N}]/gu,'');
 for(const quiz of catalog){
  assert(/^[a-z0-9-]+$/.test(quiz.slug));assert(quiz.scope);const bank=banks[quiz.slug];assert.equal(bank.length,30);assert.equal(quiz.count,bank.length);
  assert.equal(new Set(bank.map(q=>q.id)).size,30);
  for(const q of bank){
   assert(Number.isInteger(q.id)&&q.id>0);assert.equal(q.options.length,4);assert.equal(new Set(q.options.map(normalize)).size,4,JSON.stringify(q));assert(q.answer>=0&&q.answer<=3&&Number.isInteger(q.answer));assert.equal(q.points,3);assert(q.why&&q.tag);assert.equal(new URL(q.source).protocol,'https:');assert(!/\[MASKED|undefined|TODO|<script/i.test(JSON.stringify(q)));
   const key=normalize(q.q);assert(!seen.has(key),q.q);seen.add(key);
  }
 }
 assert.equal(seen.size,330);
});
test('every bank produces random valid attempts and prioritizes all unseen questions after reload',()=>{
 for(const quiz of catalog){
  const a=setup(quiz.slug),seen=new Set(),orders=new Set();
  for(let i=0;i<40;i++){const picked=a.run('chooseQuestions()');assert.equal(picked.length,20);assert.equal(new Set(picked.map(q=>q.id)).size,20);picked.forEach(q=>seen.add(q.id));orders.add(picked.map(q=>q.id).join(','));}
  assert.equal(seen.size,30);assert.equal(orders.size,40);
  const first=a.run('questions=chooseQuestions();questions.forEach(q=>rememberQuestion(q.id));questions.map(q=>q.id)');
  const b=setup(quiz.slug,{storage:a.storage}),next=b.run('chooseQuestions()');assert.equal(next.filter(q=>!first.includes(q.id)).length,10);
 }
});
test('history is independent across quizzes and survives denied or malformed storage',()=>{
 const storage=new Map(),a=setup('minecraft',{storage});a.run('questions=chooseQuestions();questions.forEach(q=>rememberQuestion(q.id))');
 const b=setup('gta-v',{storage});assert.equal(b.run('readSeenQuestions().size'),0);
 const c=setup('minecraft',{blocked:true});const ids=c.run('questions=chooseQuestions();questions.forEach(q=>rememberQuestion(q.id));questions.map(q=>q.id)');assert.equal(c.run('chooseQuestions()').filter(q=>!ids.includes(q.id)).length,10);
 for(const corrupt of ['bad json','{}','[null,"1",999]']){storage.set('alfea.minecraft.seen.v1',corrupt);assert.equal(setup('minecraft',{storage}).run('chooseQuestions().length'),20);}
});
test('every quiz scores perfectly, partially and at zero and shares an exact roundtrippable URL',async()=>{
 for(const quiz of catalog){
  const a=setup(quiz.slug);a.run('questions=chooseQuestions();showResult(questions.map(q=>q.answer),false)');assert(a.element.innerHTML.includes('60<small> / 60</small>'));assert(a.element.innerHTML.includes('20 из 20 · 100%'));
  await a.run('shareResult()');const url=a.getCopied();assert.equal(url,'https://dzaytsev91.github.io'+a.getPath());assert.equal(new URL(url).searchParams.get('quiz'),quiz.slug);assert(!/\s/.test(url));
  const b=setup(quiz.slug);b.run('location.hash='+JSON.stringify(new URL(url).hash)+';renderRoute()');assert.equal(b.run('resultHash(answers)'),new URL(url).hash);assert(b.element.innerHTML.includes('20 из 20 · 100%'));
  assert.equal(b.run('questions.map(q=>q.id).join(",")'),a.run('questions.map(q=>q.id).join(",")'));
  a.run('showResult(questions.map((q,i)=>i<7?q.answer:(q.answer+1)%4),false)');assert(a.element.innerHTML.includes('21<small> / 60</small>'));assert(a.element.innerHTML.includes('7 из 20 · 35%'));assert(a.element.innerHTML.includes('Разобрать ошибки'));
  a.run('showResult(questions.map(q=>(q.answer+1)%4),false)');assert(a.element.innerHTML.includes('0<small> / 60</small>'));assert(a.element.innerHTML.includes('0 из 20 · 0%'));
  a.run('startQuiz()');assert.equal(new URL('https://example.com'+a.getPath()).searchParams.get('quiz'),quiz.slug);
 }
});
test('bad result links never crash or inject content; same-tab hashes change the result',()=>{
 const a=setup();a.run('questions=chooseQuestions()');const valid=a.run('resultHash(questions.map(q=>q.answer))');
 const invalid=['#score=2.'+valid.slice(9),valid+'.1-0',valid.replace(/-[0-3]/,'-4'),'#score=1.'+Array(20).fill('1-0').join('.'),'#score=1.'+Array.from({length:20},(_,i)=>(999+i).toString(36)+'-0').join('.'),'#score=1.<script>',''];
 for(const hash of invalid){assert.equal(a.run('decodeHash('+JSON.stringify(hash)+')'),null);a.run('location.hash='+JSON.stringify(hash)+';renderRoute()');assert(a.element.innerHTML.includes('Начать испытание'));}
 a.run('location.hash='+JSON.stringify(valid)+';renderRoute()');assert(a.element.innerHTML.includes('20 из 20'));
 assert.equal(a.run('escapeHTML("<img src=x onerror=alert(1)>")'),'&lt;img src=x onerror=alert(1)&gt;');
});
test('unknown quizzes and failed fetches have useful recovery paths',async()=>{
 const a=setup('<script>');await a.run('initializeQuiz()');assert.equal(a.getFetched(),0);assert(a.element.innerHTML.includes('Все квизы'));assert(!a.element.innerHTML.includes('<script>'));
 const b=setup('minecraft',{loadFailure:true});await b.run('initializeQuiz()');assert(b.element.innerHTML.includes('Вопросы не загрузились'));assert(b.element.innerHTML.includes('Повторить'));
 const c=setup('minecraft');await c.run('initializeQuiz()');assert.equal(c.getFetched(),1);assert(c.element.innerHTML.includes('Minecraft'));
});
