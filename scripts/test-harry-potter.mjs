import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import test from 'node:test';
const root=fileURLToPath(new URL('../',import.meta.url));
const html=readFileSync(root+'harry-potter.html','utf8');
const inline=html.match(/<script>\s*([\s\S]*?)<\/script>/)[1].replace(/window.addEventListener\('hashchange',renderRoute\);[\s\S]*$/,'');
const scripts=['harry-potter-questions.js','harry-potter-expanded.js'].map(name=>readFileSync(root+name,'utf8')).join('\n')+'\n'+inline;
function setup(storage=new Map(),blocked=false){
  const element={innerHTML:'',focus(){},querySelector(){return element},querySelectorAll(){return []}};
  let copied='';
  const sandbox={document:{querySelector:()=>element},localStorage:{getItem:key=>{if(blocked)throw Error('blocked');return storage.get(key)||null},setItem:(key,value)=>{if(blocked)throw Error('blocked');storage.set(key,value)}},history:{replaceState(){}},location:{origin:'https://dzaytsev91.github.io',pathname:'/alfea-spark/harry-potter.html'},navigator:{clipboard:{async writeText(value){copied=value}}},window:{scrollTo(){}},setTimeout:()=>0,clearTimeout(){}};
  // Notice UI is irrelevant to the link payload; suppress it in this DOM stub.
  vm.createContext(sandbox);vm.runInContext(scripts+'\nshowNotice=()=>{};',sandbox);
  return {run:code=>vm.runInContext(code,sandbox),element,getCopied:()=>copied};
}
test('bank has at least 1000 complete, uniquely identified questions',()=>{
  const {run}=setup();const bank=run('questionBank');
  assert(bank.length>=1000);assert.equal(new Set(bank.map(q=>q.id)).size,bank.length);
  const normalize=s=>s.toLowerCase().replace(/ё/g,'е').replace(/[^\p{L}\p{N}]/gu,'');
  assert.equal(new Set(bank.map(q=>normalize(q.q))).size,bank.length);
  for(const q of bank){assert.equal(q.options.length,4);assert.equal(new Set(q.options.map(normalize)).size,4);assert(q.options[q.answer]);assert([3,4].includes(q.points));assert(q.why);assert.equal(new URL(q.source).protocol,'https:');assert(!/[<>]|\[MASKED|undefined/.test(q.q));}
  assert.equal(run('legacyQuestions.reduce((sum,q)=>sum+q.points,0)'),71);
});
test('fresh attempts do not repeat questions, including after a page reload',()=>{
  const storage=new Map(),a=setup(storage);
  const first=a.run('questions=chooseQuestions();questions.forEach(q=>rememberQuestion(q.id));questions.map(q=>q.id)');
  const b=setup(storage),second=b.run('chooseQuestions()');
  assert.equal(second.length,20);assert.equal(new Set(second.map(q=>q.topic||q.source)).size,20);
  assert(second.every(q=>!first.includes(q.id)));
  for(const kind of ['chapter','film'])assert(second.filter(q=>q.kind===kind).length<=2);
});
test('all topics stay selectable and random ordering varies',()=>{
  const {run}=setup();const seen=new Set(),orders=new Set();
  for(let i=0;i<300;i++){
    const picked=run('chooseQuestions()');assert.equal(picked.length,20);
    assert.equal(new Set(picked.map(q=>q.id)).size,20);
    assert.equal(new Set(picked.map(q=>q.topic||q.source)).size,20);
    picked.forEach(q=>seen.add(q.id));orders.add(picked.map(q=>q.id).join(','));
  }
  assert(seen.size>900);assert(orders.size>295);
});
test('denied or corrupt storage does not break quiz or in-memory repeat protection',()=>{
  const a=setup(new Map(),true);
  const first=a.run('questions=chooseQuestions();questions.forEach(q=>rememberQuestion(q.id));questions.map(q=>q.id)');
  assert(a.run('chooseQuestions()').every(q=>!first.includes(q.id)));
  const storage=new Map([['alfea.hp.seen.v1','{"bad":true}']]);assert.equal(setup(storage).run('chooseQuestions().length'),20);
  storage.set('alfea.hp.seen.v1','not json');assert.equal(setup(storage).run('chooseQuestions().length'),20);
});
test('exhausted history starts a new cycle without immediately repeating the last attempt',()=>{
  const a=setup();a.run('seenQuestionIds=new Set(questionBank.map(q=>q.id));localStorage.setItem(seenStorageKey,JSON.stringify([...seenQuestionIds]));');
  const recent=a.run('[...seenQuestionIds].slice(-quizLength)');assert(a.run('chooseQuestions()').every(q=>!recent.includes(q.id)));
});
test('v1, v2 and v3 results preserve question order and canonical answers',()=>{
  const a=setup();const old=a.run('decodeHash("#score=1."+"0".repeat(20))');assert.equal(old.version,1);assert.equal(old.questions.length,20);
  a.run('questions=extraQuestions.slice(0,20);answers=questions.map(q=>q.answer);resultVersion=2;');
  let hash=a.run('resultHash(answers)');let decoded=a.run(`decodeHash(${JSON.stringify(hash)})`);assert.equal(decoded.version,2);assert.equal(decoded.questions.map(q=>q.id).join(','),a.run('questions.map(q=>q.id).join(",")'));
  a.run('questions=expandedQuestions.slice(-20);answers=questions.map(q=>q.answer);resultVersion=3;');
  hash=a.run('resultHash(answers)');decoded=a.run(`decodeHash(${JSON.stringify(hash)})`);
  assert.equal(decoded.version,3);assert(decoded.questions.some(q=>q.id>1000));
  assert.equal(decoded.questions.map(q=>q.id).join(','),a.run('questions.map(q=>q.id).join(",")'));assert.equal(decoded.answers.join(','),a.run('answers.join(",")'));
  for(const bad of ['#score=1.000','#score=2.'+'000'.repeat(20),'#score=3.'+'zzzz-0.'.repeat(19)+'zzzy-0',hash.replace(/-[0-3]/,'-4'),hash+'.0-0','#score=3.<script>'])assert.equal(a.run(`decodeHash(${JSON.stringify(bad)})`),null);
});
test('perfect and zero scores render correctly; sharing copies only the exact URL',async()=>{
  const a=setup();a.run('questions=chooseQuestions();resultVersion=3;showResult(questions.map(q=>q.answer),false)');
  const max=a.run('maxPoints()');assert(a.element.innerHTML.includes(`${max}<small> / ${max}</small>`));assert(a.element.innerHTML.includes('20 из 20'));
  await a.run('shareResult()');assert.equal(a.getCopied(),a.run('location.origin+location.pathname+resultHash(answers)'));
  a.run('showResult(questions.map(q=>(q.answer+1)%4),true)');assert(a.element.innerHTML.includes(`0<small> / ${max}</small>`));assert(a.element.innerHTML.includes('0 из 20'));
  assert.equal(a.run('seenQuestionIds.size'),0);
});

test('same-tab result navigation renders the linked result',()=>{
  const a=setup();
  a.run('location.hash="#score=1."+"0".repeat(20);renderRoute()');
  assert(a.element.innerHTML.includes('/ 71'));
  a.run('location.hash="";renderRoute()');
  assert(a.element.innerHTML.includes('Начать испытание'));
});
