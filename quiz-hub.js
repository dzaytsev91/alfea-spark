'use strict';
function hubEscape(value){return String(value).replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));}
const aliases={
  'witcher-3':'the witcher ведьмак геральт',skyrim:'скайрим elder scrolls',minecraft:'майнкрафт',
  'gta-v':'гта gta 5 grand theft auto','elden-ring':'элден ринг',
  'stranger-things':'stranger things осд','wednesday':'wednesday венсдей',
  'squid-game':'squid game','game-of-thrones':'game of thrones got','breaking-bad':'breaking bad'
};
const cards=document.querySelector('.cards');
const orderedQuizzes=[...quizCatalog].sort((a,b)=>a.category.localeCompare(b.category)||quizCatalog.indexOf(a)-quizCatalog.indexOf(b));
cards.insertAdjacentHTML('beforeend',orderedQuizzes.map(quiz=>`<article class="card new-quiz" data-category="${quiz.category}" data-search="${hubEscape(quiz.title+' '+(aliases[quiz.slug]||''))}"><div class="scene" aria-hidden="true"><span class="corner">${quiz.category==='series'?'сериал':'игра'} · только хард</span>${renderQuizArt(quiz.art,quiz.color)}</div><div class="card-body"><div class="card-tag">Новый квиз</div><h2>${hubEscape(quiz.title)}</h2><p>${hubEscape(quiz.description)}</p><div class="meta"><span>${quiz.count} в банке</span><span>20 за попытку</span><span>до 60 баллов</span></div><a class="cta" href="./quiz.html?quiz=${quiz.slug}">Принять вызов <b aria-hidden="true">↗</b></a></div></article>`).join(''));
let category='all';
const normalize=value=>value.toLocaleLowerCase('ru-RU').replace(/ё/g,'е').trim();
function filterQuizzes(){
  const query=normalize(document.querySelector('#quiz-search').value);
  let visible=0;
  cards.querySelectorAll('.card').forEach(card=>{
    const matches=(category==='all'||card.dataset.category===category)&&normalize(card.dataset.search||card.textContent).includes(query);
    card.hidden=!matches;
    if(matches)visible++;
  });
  document.querySelector('#quiz-count').textContent=`Показано: ${visible} из ${cards.children.length}`;
  document.querySelector('#empty-search').hidden=visible>0;
}
document.querySelector('#quiz-search').addEventListener('input',filterQuizzes);
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{
  category=button.dataset.filter;
  document.querySelectorAll('[data-filter]').forEach(item=>item.setAttribute('aria-pressed',String(item===button)));
  filterQuizzes();
}));
filterQuizzes();
