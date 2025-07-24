import { Application } from "https://unpkg.com/@splinetool/runtime@latest";
document.addEventListener("DOMContentLoaded", ()=>{
  const form = document.getElementById("subscribe-form");
  if(form){
    form.addEventListener("submit", e=>{
      e.preventDefault();
      const email=form.querySelector("input[type='email']").value.trim();
      alert(email ? `Thanks for subscribing — ${email}!` : 'Please enter a valid email.');
      form.reset();
    });
  }
  
  const canvas=document.getElementById("splineCanvas");
  const obs=new IntersectionObserver((entries, o)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        new Application(canvas).load('https://prod.spline.design/YourSceneID/scene.splinecode');
        o.disconnect();
      }
    });
  },{rootMargin:'200px'});
  if(canvas) obs.observe(canvas);
});
