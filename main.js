'use strict';

{

  function check(){

    let countdown = endTime - new Date().getTime();
    // (3) タイマーの終了
    if(countdown < 0){
      clearInterval(intervalId);
      countdown = 30 * 1000;
      btn.disabled = false;
      btn.classList.remove('inactive');
    }

    const totalSec = Math.floor(countdown/1000);
    const min =  Math.floor(totalSec / 60);
    const sec =  totalSec % 60 ;

    

    const minutesFormatted = String(min).padStart(2,'0');
    const secondsFormatted = String(sec).padStart(2,'0');

    timer.textContent = `${minutesFormatted}:${secondsFormatted}`;
    

  }
  const timer = document.getElementById('timer'); 
  const btn = document.getElementById('btn'); 
  let endTime;
  let intervalId;
 // (1) 終了時刻を求める
  btn.addEventListener('click',()=>{
   endTime = new Date().getTime() + 30 * 1000 ;
   btn.disabled = true;
   btn.classList.add('inactive');
  // (2) 残り時間を求める
  intervalId = setInterval(check,100); 


 });

}
