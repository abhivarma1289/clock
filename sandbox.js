const clock=document.querySelector('.clock');

const tick=()=>{
    const now=new Date();
    const h=now.getHours();
    const m=now.getMinutes();
    const s=now.getSeconds();

    const html=`
      <span>${h}  </span> : hr
      <span>${m}  </span> : min
      <span>${s}  </span> sec
    `;
     
    clock.innerHTML=html;


};
setInterval(tick,1000);