(function(){
var doc=document.documentElement;
var ham=document.getElementById('hamburger'),dr=document.getElementById('mobDrawer'),ov=document.getElementById('mobOverlay'),cl=document.getElementById('drawerClose');
function openD(){dr.hidden=false;ov.classList.add('visible');ham.setAttribute('aria-expanded','true');doc.style.overflow='hidden';}
function closeD(){dr.hidden=true;ov.classList.remove('visible');ham.setAttribute('aria-expanded','false');doc.style.overflow='';}
if(ham&&dr){ham.addEventListener('click',function(){dr.hidden?openD():closeD();});}
if(ov)ov.addEventListener('click',closeD);
if(cl)cl.addEventListener('click',closeD);
document.addEventListener('keydown',function(e){if(e.key==='Escape'&&dr&&!dr.hidden)closeD();});
window.addEventListener('resize',function(){if(window.innerWidth>768&&dr&&!dr.hidden)closeD();});
var qs=document.querySelectorAll('.faq-q');
for(var i=0;i<qs.length;i++){qs[i].addEventListener('click',function(){
 var item=this.parentNode,open=item.classList.contains('open');
 item.classList.toggle('open',!open);this.setAttribute('aria-expanded',open?'false':'true');
 var a=item.querySelector('.faq-answer');a.style.maxHeight=open?'0':a.scrollHeight+'px';});}
})();
