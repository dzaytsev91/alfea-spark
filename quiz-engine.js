'use strict';

const quizSlug=new URLSearchParams(location.search).get('quiz');
const quiz=quizCatalog.find(item=>item.slug===quizSlug);
let questionBank=[],questionById=new Map();
function escapeHTML(value){return String(value).replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));}
function quizPath(){return location.pathname+'?quiz='+encodeURIComponent(quiz.slug);}
const quizLength=20;
const app=document.querySelector('#app');
let questions=[],optionOrders=[],answers=[],step=0,noticeTimer;
const seenStorageKey=quiz?'alfea.'+quiz.slug+'.seen.v1':'';
let seenQuestionIds=new Set();
function readSeenQuestions(){
  try{
    const values=JSON.parse(localStorage.getItem(seenStorageKey)||'[]');
    if(!Array.isArray(values))return seenQuestionIds;
    return new Set(values.filter(id=>Number.isInteger(id)&&questionById.has(id)));
  }catch(error){return seenQuestionIds;}
}
function rememberQuestion(id){
  if(seenQuestionIds.has(id))return;
  seenQuestionIds.add(id);
  try{localStorage.setItem(seenStorageKey,JSON.stringify([...seenQuestionIds]));}catch(error){/* In-memory history still works when storage is unavailable. */}
}
function shuffle(items){const copy=[...items];for(let i=copy.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[copy[i],copy[j]]=[copy[j],copy[i]];}return copy;}
function chooseQuestions(){
  seenQuestionIds=readSeenQuestions();
  const candidates=shuffle(questionBank);
  const fresh=candidates.filter(q=>!seenQuestionIds.has(q.id));
  const seen=candidates.filter(q=>seenQuestionIds.has(q.id));
  return shuffle([...fresh,...seen].slice(0,quizLength));
}
function maxPoints(){return questions.reduce((total,q)=>total+q.points,0);}
function renderHome(){
  app.innerHTML=`<section class="hero"><div class="eyebrow">Только хард · ${quiz.category==='games'?'игры':'сериалы'}</div><h1>${escapeHTML(quiz.title)}</h1><p>${escapeHTML(quiz.description)}</p><div class="emblem" aria-hidden="true">${renderQuizArt(quiz.art,quiz.color)}</div><div class="stat-row"><span>${questionBank.length} вопросов в банке</span><span>20 за попытку</span><span>3 балла за ответ</span></div><p class="scope">${escapeHTML(quiz.scope)}</p><button class="primary" id="start">Начать испытание <span>→</span></button><p class="hint">Сначала покажем вопросы, которых ты ещё не видел в этом браузере.</p></section>`;
  document.querySelector('#start').onclick=startQuiz;
}
function startQuiz(){questions=chooseQuestions();optionOrders=questions.map(()=>shuffle([0,1,2,3]));answers=[];step=0;history.replaceState(null,'',quizPath());renderQuestion();}
function focusTitle(){const title=app.querySelector('h1,h2');title.tabIndex=-1;title.focus({preventScroll:true});window.scrollTo({top:0,behavior:'instant'});}
function renderQuestion(){
  const q=questions[step],chosen=answers[step];
  rememberQuestion(q.id);
  app.innerHTML=`<section class="quiz"><div class="topline"><span>${escapeHTML(quiz.title)} · хард</span><span>Вопрос ${step+1} из ${questions.length}</span></div><div class="progress" role="progressbar" aria-label="Прогресс квиза" aria-valuemin="0" aria-valuemax="${questions.length}" aria-valuenow="${step}"><i style="width:${step/questions.length*100}%"></i></div><div class="qcard"><div class="qmeta"><span>${escapeHTML(q.tag)}</span><span>${q.points} балла за ответ</span></div><div class="icon" aria-hidden="true">${q.icon}</div><h2>${escapeHTML(q.q)}</h2><div class="options" role="group" aria-label="Варианты ответа">${optionOrders[step].map((i,visualIndex)=>`<button class="option ${chosen!==undefined?(i===q.answer?'correct':i===chosen?'wrong':''):''}" data-answer="${i}" ${chosen!==undefined?'disabled':''}><span class="num">${visualIndex+1}</span><span>${escapeHTML(q.options[i])}</span></button>`).join('')}</div>${chosen!==undefined?`<div class="feedback" role="status"><strong>${chosen===q.answer?`Верно · +${q.points} балла`:'Неверно · +0 баллов'}</strong><p>${escapeHTML(q.why)}</p><a href="${escapeHTML(q.source)}" target="_blank" rel="noopener noreferrer">Проверить факт ↗</a></div>`:''}<div class="navigation"><span>${chosen===undefined?'Выбери один ответ':'Ответ принят'}</span><button class="primary" id="next" ${chosen===undefined?'disabled':''}>${step===questions.length-1?'Узнать счёт':'Следующий вопрос'} <span>→</span></button></div></div></section>`;
  if(chosen===undefined)app.querySelectorAll('[data-answer]').forEach(button=>button.onclick=()=>{answers[step]=Number(button.dataset.answer);renderQuestion();});
  document.querySelector('#next').onclick=()=>{if(answers[step]===undefined)return;if(step<questions.length-1){step++;renderQuestion();}else showResult(answers,false);};
  focusTitle();
}
function resultHash(values){
  return '#score=1.'+questions.map((q,i)=>q.id.toString(36)+'-'+values[i]).join('.');
}
function decodeHash(hash){
  if(!hash.startsWith('#score=1.'))return null;
  const entries=hash.slice(9).split('.');
  if(entries.length!==quizLength||entries.some(entry=>!/^([0-9a-z]{1,4})-[0-3]$/.test(entry)))return null;
  const ids=entries.map(entry=>parseInt(entry.split('-')[0],36));
  if(new Set(ids).size!==quizLength||ids.some(id=>!questionById.has(id)))return null;
  return {questions:ids.map(id=>questionById.get(id)),answers:entries.map(entry=>Number(entry.split('-')[1])),version:1};
}
function showNotice(message){const notice=document.querySelector('#notice');notice.textContent=message;notice.classList.remove('hidden');clearTimeout(noticeTimer);noticeTimer=setTimeout(()=>notice.classList.add('hidden'),2600);}
function showResult(values,shared){
  answers=[...values];
  const total=values.reduce((score,choice,i)=>score+(choice===questions[i].answer?questions[i].points:0),0);
  const possible=maxPoints();
  const correct=values.filter((choice,i)=>choice===questions[i].answer).length;
  const title=total/possible>=.85?'Знаешь даже скрытые детали':total/possible>=.6?'Сильный результат':total/possible>=.35?'Есть куда расти':'Впереди много открытий';
  const missed=questions.map((q,i)=>({q,choice:values[i]})).filter(({q,choice})=>choice!==q.answer);
  history.replaceState(null,'',quizPath()+resultHash(values));
  app.innerHTML=`<section class="result-card"><div class="eyebrow">${shared?'Результат, которым поделились':'Твой результат'}</div><div class="result-topic">${escapeHTML(quiz.title)}</div><div class="points">${total}<small> / ${possible}</small></div><h1>${title}</h1><p>Верных ответов: ${correct} из ${questions.length} · ${Math.round(total/possible*100)}%. ${correct===questions.length?'Ни одной ошибки — это впечатляет!':'Самое интересное прячется в деталях.'}</p><div class="result-actions"><button class="primary" id="share">Скопировать результат <span>↗</span></button><button class="secondary" id="restart">Пройти ещё раз</button>${missed.length?'<button class="secondary" id="review-toggle" aria-expanded="false">Разобрать ошибки</button>':''}</div><div class="notice hidden" id="notice" role="status"></div>${missed.length?`<div class="review hidden" id="review"><h2>Вопросы, где можно было набрать больше</h2><ol>${missed.map(({q})=>`<li>${escapeHTML(q.q)}<strong>Правильный ответ: ${escapeHTML(q.options[q.answer])}</strong><a href="${escapeHTML(q.source)}" target="_blank" rel="noopener noreferrer">Источник ↗</a></li>`).join('')}</ol></div>`:''}</section>`;
  document.querySelector('#restart').onclick=startQuiz;
  document.querySelector('#share').onclick=shareResult;
  if(missed.length)document.querySelector('#review-toggle').onclick=()=>{const review=document.querySelector('#review'),button=document.querySelector('#review-toggle');review.classList.toggle('hidden');button.setAttribute('aria-expanded',String(!review.classList.contains('hidden')));};
  focusTitle();
}
async function shareResult(){
  const url=location.origin+quizPath()+resultHash(answers);
  try{await navigator.clipboard.writeText(url);showNotice('Ссылка скопирована');}
  catch(err){
    const input=document.createElement('textarea');input.value=url;input.style.position='fixed';input.style.opacity='0';document.body.append(input);
    let copied=false;try{input.select();copied=document.execCommand('copy');}catch(copyError){copied=false;}finally{input.remove();}
    showNotice(copied?'Ссылка скопирована':'Не удалось скопировать ссылку');
  }
}
function renderRoute(){
  const shared=decodeHash(location.hash);
  if(shared){questions=shared.questions;answers=shared.answers;showResult(shared.answers,true);}else renderHome();
}
async function initializeQuiz(){
  if(!quiz){
    app.innerHTML='<section class="result-card"><h1>Выбери свой квиз</h1><p>Эту тему найти не удалось.</p><a class="primary" href="./">Все квизы →</a></section>';
    return;
  }
  document.title=quiz.title+' — хард-квиз | Искра Алфеи';
  document.querySelector('meta[name="description"]').content=quiz.description;
  document.documentElement.style.setProperty('--art-accent',quiz.color);
  try{
    const response=await fetch('./data/quizzes/'+quiz.slug+'.json');
    if(!response.ok)throw Error('Unable to load quiz');
    const bank=await response.json();
    if(!Array.isArray(bank)||bank.length<quizLength)throw Error('Incomplete quiz');
    questionBank=bank;questionById=new Map(questionBank.map(q=>[q.id,q]));
    window.addEventListener('hashchange',renderRoute);
    renderRoute();
  }catch(error){
    app.innerHTML='<section class="result-card"><h1>Вопросы не загрузились</h1><p>Проверь соединение и попробуй ещё раз.</p><button class="primary" id="retry">Повторить</button><p><a class="home-link" href="./">← Все квизы</a></p></section>';
    document.querySelector('#retry').onclick=initializeQuiz;
  }
}
initializeQuiz();
