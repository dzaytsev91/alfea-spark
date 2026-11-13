import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import test from 'node:test';
const root=fileURLToPath(new URL('../',import.meta.url));
const html=readFileSync(root+'heated-rivalry.html','utf8');
const inline=html.match(/<script>\s*([\s\S]*?)<\/script>/)[1].replace(/window.addEventListener\('hashchange',renderRoute\);[\s\S]*$/,'');
const scripts=['heated-rivalry-questions.js'].map(name=>readFileSync(root+name,'utf8')).join('\n')+'\n'+inline;
function setup(storage=new Map(),blocked=false){
  const element={innerHTML:'',focus(){},querySelector(){return element},querySelectorAll(){return []}};
  let copied='';
  const sandbox={document:{querySelector:()=>element},localStorage:{getItem:key=>{if(blocked)throw Error('blocked');return storage.get(key)||null},setItem:(key,value)=>{if(blocked)throw Error('blocked');storage.set(key,value)}},history:{replaceState(){}},location:{origin:'https://dzaytsev91.github.io',pathname:'/alfea-spark/heated-rivalry.html'},navigator:{clipboard:{async writeText(value){copied=value}}},window:{scrollTo(){}},setTimeout:()=>0,clearTimeout(){}};
  // Notice UI is irrelevant to the link payload; suppress it in this DOM stub.
  vm.createContext(sandbox);vm.runInContext(scripts+'\nshowNotice=()=>{};',sandbox);
  return {run:code=>vm.runInContext(code,sandbox),element,getCopied:()=>copied};
}
test('bank has 72 valid distinct questions covering all six episodes',()=>{
 const {run}=setup(),bank=run('questionBank');
 assert.equal(bank.length,72);assert.equal(new Set(bank.map(q=>q.id)).size,72);assert.equal(new Set(bank.map(q=>q.q)).size,72);
 for(let ep=1;ep<=6;ep++)assert.equal(bank.filter(q=>q.episode===ep).length,12);
 for(const q of bank){assert.equal(new Set(q.options).size,4);assert(q.options[q.answer]);assert.equal(q.points,3);assert(q.why);assert.equal(new URL(q.source).protocol,'https:');assert(!/[<>]|\[MASKED/.test(JSON.stringify(q)));}
});
test('new questions are prioritized after reload and with blocked storage',()=>{
 for(const blocked of [false,true]){
  const storage=new Map(),a=setup(storage,blocked);
  const first=a.run('questions=chooseQuestions();questions.forEach(q=>rememberQuestion(q.id));questions.map(q=>q.id)');
  const b=blocked?a:setup(storage),second=b.run('chooseQuestions()');
  assert.equal(second.length,20);assert.equal(new Set(second.map(q=>q.id)).size,20);
  assert.equal(second.filter(q=>!first.includes(q.id)).length,20);
 }
});
test('random samples vary and all questions can be selected',()=>{
 const a=setup(),seen=new Set(),orders=new Set();
 for(let i=0;i<100;i++){const qs=a.run('chooseQuestions()');qs.forEach(q=>seen.add(q.id));orders.add(qs.map(q=>q.id).join(','));}
 assert.equal(seen.size,72);assert.equal(orders.size,100);
});
test('share roundtrip preserves exact score and only copies the URL',async()=>{
 const a=setup();a.run('questions=chooseQuestions();showResult(questions.map(q=>q.answer),false)');
 assert(a.element.innerHTML.includes('60<small> / 60</small>'));assert(a.element.innerHTML.includes('20 из 20'));
 await a.run('shareResult()');assert.equal(a.getCopied(),a.run('location.origin+location.pathname+resultHash(answers)'));
 const hash=a.run('resultHash(answers)'),b=setup();b.run(`location.hash=${JSON.stringify(hash)};renderRoute()`);
 assert(b.element.innerHTML.includes('20 из 20'));assert.equal(b.run('resultHash(answers)'),hash);
 a.run('showResult(questions.map(q=>(q.answer+1)%4),false)');assert(a.element.innerHTML.includes('0<small> / 60</small>'));
 for(const bad of ['#score=1.000',hash+'.1-0',hash.replace(/-[0-3]/,'-4'),'#score=1.'+Array(20).fill('1-0').join('.'),'#score=1.'+Array.from({length:20},(_,i)=>(999+i).toString(36)+'-0').join('.')])assert.equal(a.run(`decodeHash(${JSON.stringify(bad)})`),null);
 b.run('location.hash="";renderRoute()');assert(b.element.innerHTML.includes('Начать испытание'));
});
