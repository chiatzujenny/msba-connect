// Presentation-only visual input cues. All forms use the ordinary app handlers.
if(!new URLSearchParams(location.search).has('resume')){
 state=initial();
 state.student={name:'',background:'',role:'',industry:'',question:'',topics:'',zone:'America/Los_Angeles',availability:''};
 page=new URLSearchParams(location.search).has('intro')?'discover':'profile';
 if(page==='discover')state.student.name='Jason';
}else{page='requests';if(new URLSearchParams(location.search).has('replay')){state.requests=[];save();page='discover';}}
render();
const pointer=document.createElement('div');pointer.id='demo-pointer';pointer.setAttribute('popover','manual');
pointer.innerHTML='<svg width="25" height="32" viewBox="0 0 25 32"><path d="M2 2v25l6-7 5 10 5-2-5-10 9-1Z" fill="#161616" stroke="white" stroke-width="2"/></svg><i></i>';
document.body.append(pointer);pointer.showPopover();
function showPointer(x,y){pointer.style.opacity='1';pointer.style.left=x+'px';pointer.style.top=y+'px';}
document.addEventListener('pointermove',e=>showPointer(e.clientX,e.clientY),true);
document.addEventListener('pointerdown',e=>{showPointer(e.clientX,e.clientY);pointer.classList.remove('clicked');void pointer.offsetWidth;pointer.classList.add('clicked');},true);
document.addEventListener('focusin',e=>{if(e.target.matches('input,textarea,select,button')){document.querySelectorAll('.demo-emphasis').forEach(n=>n.classList.remove('demo-emphasis'));const target=e.target.matches('input[type=radio]')?e.target.closest('label'):e.target;target.classList.add('demo-emphasis');const r=e.target.getBoundingClientRect();showPointer(r.left+r.width/2,r.top+r.height/2);}},true);
document.addEventListener('input',e=>{if(e.target.matches('input:not([type=radio]),textarea'))pointer.style.opacity='.15';},true);
const originalDemoRender=render;
let recordingIntro=new URLSearchParams(location.search).has('intro');
function recordingContext(){
 document.body.classList.toggle('recording-wide',new URLSearchParams(location.search).has('wide'));
 document.body.classList.toggle('recording-hd',new URLSearchParams(location.search).has('hd'));
 if(page==='profile')recordingIntro=false;
 const sharer=role==='mentor'?state.mentors.find(m=>m.id===mentorId):null;
 const selfMentor=!!sharer&&sharer.name==='Jason';
 document.body.classList.toggle('recording-discover',page==='discover');
 document.body.classList.toggle('recording-intro',recordingIntro);
 document.body.classList.toggle('recording-mentor-profile',selfMentor);
 const label=document.querySelector('.topbar>span');
 if(label)label.textContent=recordingIntro?'MSBA CONNECT · EXPLORE THE COMMUNITY':sharer?(selfMentor?'JASON · SHARING ACCOUNTING EXPERIENCE':'ALEX · REVIEWING THE REQUEST'):'JASON · SEEKING CAREER ADVICE';
}
render=function(){originalDemoRender();recordingContext();};recordingContext();
new MutationObserver(()=>{
 const dialog=document.getElementById('modal');
 if(dialog.open){pointer.hidePopover();pointer.showPopover();}
 // Keep the career journey and request button visible together in this presentation view.
 dialog.querySelectorAll('.questions').forEach(q=>{q.style.display='none';if(q.previousElementSibling)q.previousElementSibling.style.display='none';if(q.previousElementSibling?.previousElementSibling)q.previousElementSibling.previousElementSibling.style.display='none';});
}).observe(document.getElementById('modal'),{attributes:true,attributeFilter:['open'],childList:true,subtree:false});
