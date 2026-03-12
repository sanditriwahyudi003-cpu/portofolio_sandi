 // Simple parallax: move elements with data-speed on scroll
 (function(){
 const layers = document.querySelectorAll('[data-speed]');
 function onScroll(){
 const top = window.scrollY;
 layers.forEach(el=>{
 const speed = parseFloat(el.getAttribute('data-speed')) || 0.5;
 el.style.transform = `translateY(${top * speed *-0.08}px)`;
 })
 }
 window.addEventListener('scroll', onScroll, {passive:true});
 onScroll();
 })();