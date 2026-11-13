'use strict';
// Original decorative SVG illustrations, shared by the cards and quiz intros.
function renderQuizArt(kind,color){
  const drawings={
    swords:'<path d="m226 40 119 126m-45-126L181 166"/><path d="m209 133 35 34m32-34 35 34M217 157l-22 24m101-24 22 24"/>',
    dragon:'<path d="m183 157 29-81 55-26 51 28-33 20 24 13-34 20 10 45-50-15-37 21 12-39-27-6m32-58-5-31 30 19m26 11 22-28 9 37"/><circle cx="265" cy="86" r="3" fill="currentColor"/>',
    blocks:'<path d="m260 35 90 48v91l-90 48-90-48V83Zm-90 48 90 48 90-48m-90 48v91m-45-115 90-48m-90 24 90 48m-135-24v91m90-91v91"/>',
    city:'<path d="M125 179h270M150 179V95h41v84m0-120h48v120m0-109h42v109m0-133h43v133m0-68h46v68M162 114h15m-15 22h15m28-59h20m-20 24h20m-20 24h20m29-34h15m-15 24h15m28-50h18m-18 25h18m-18 25h18m25 18h20"/>',
    rune:'<circle cx="260" cy="96" r="45"/><circle cx="260" cy="142" r="45"/><circle cx="225" cy="119" r="45"/><circle cx="295" cy="119" r="45"/><path d="M260 26v174m-36-13h72m-28-144 26-18"/>',
    portal:'<ellipse cx="260" cy="119" rx="80" ry="91"/><ellipse cx="260" cy="119" rx="59" ry="76"/><path d="m226 54 12 28-21 22 21 26-12 32m68-112-15 34 22 34-17 30 8 30M151 187h218m-167-10v30m116-30v30"/>',
    web:'<path d="M260 25v186M166 118h188m-160-66 132 132m0-132L194 184M260 49l49 20 20 49-20 49-49 20-49-20-20-49 20-49Zm0 26 31 12 12 31-12 31-31 12-31-12-12-31 12-31Z"/><ellipse cx="260" cy="125" rx="13" ry="20" fill="currentColor"/>',
    shapes:'<circle cx="169" cy="120" r="36"/><path d="m260 79 43 77h-86Z"/><rect x="321" y="84" width="72" height="72" rx="2"/>',
    crown:'<path d="m167 86 46 33 47-64 47 64 46-33-19 84H186Zm19 84v21h148v-21m-74-77v51m-35 25h70"/><circle cx="167" cy="77" r="8"/><circle cx="260" cy="43" r="8"/><circle cx="353" cy="77" r="8"/>',
    lab:'<path d="M195 47h54m-44 0v63l-39 68q-7 17 15 17h83q22 0 15-17l-40-68V47m-54 98h76M300 62h40m-32 0v113q0 22 12 22t12-22V62m-24 67h24"/><circle cx="219" cy="161" r="5"/><circle cx="240" cy="180" r="3"/>'
  };
  const drawing=Object.hasOwn(drawings,kind)?drawings[kind]:drawings.rune;
  const safeColor=/^#[0-9a-f]{6}$/i.test(color)?color:'#795c9e';
  return `<svg viewBox="0 0 520 235" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style="background:${safeColor}"><rect width="520" height="235" fill="${safeColor}"/><circle cx="260" cy="119" r="104" fill="#ffffff0a"/><g style="color:#fff0d9" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">${drawing}</g><g fill="#fff0d9" opacity=".65"><circle cx="97" cy="54" r="2"/><circle cx="420" cy="173" r="3"/><circle cx="383" cy="47" r="2"/></g></svg>`;
}
