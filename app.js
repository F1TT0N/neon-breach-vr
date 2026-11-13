const shots=[...document.querySelectorAll('.shot')],viewer=document.querySelector('#viewer');
let selected=0,opener;
function show(index){selected=(index+shots.length)%shots.length;const shot=shots[selected];viewer.querySelector('img').src=shot.querySelector('img').src;viewer.querySelector('img').alt=shot.querySelector('img').alt;viewer.querySelector('p').textContent=`${selected+1} / ${shots.length} — ${shot.dataset.title}`;}
shots.forEach((button,index)=>button.addEventListener('click',()=>{opener=button;show(index);viewer.showModal();}));
viewer.querySelector('.close').addEventListener('click',()=>viewer.close());
viewer.querySelector('#next').addEventListener('click',()=>show(selected+1));
viewer.querySelector('#previous').addEventListener('click',()=>show(selected-1));
viewer.addEventListener('keydown',e=>{if(e.key==='ArrowRight'){e.preventDefault();show(selected+1);}if(e.key==='ArrowLeft'){e.preventDefault();show(selected-1);}});
viewer.addEventListener('click',e=>{if(e.target===viewer){const b=viewer.getBoundingClientRect();if(e.clientX<b.left||e.clientX>b.right||e.clientY<b.top||e.clientY>b.bottom)viewer.close();}});
viewer.addEventListener('close',()=>opener?.focus());
