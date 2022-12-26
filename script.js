const daysEl =document.getElementById('days');
const hoursEl =document.getElementById('hours');
const minsEl =document.getElementById('mins');
const secondsEl =document.getElementById('seconds');

const newYears='1 jan 2023';

function countdown (){
    const newYearsDate=new Date(newYears);
    const currentDate=new Date().getTime();

    const diffference=newYearsDate-currentDate;
    const totalSeconds=diffference/1000;

    const days = Math.floor( diffference/ (1000 * 60 * 60 * 24));
    const hours = Math.floor(totalSeconds/3600)%24;
    const mins = Math.floor((totalSeconds/60) % 60);
    const seconds = Math.floor(totalSeconds %60);

    daysEl.innerHTML=days;
    hoursEl.innerHTML=hours;
    minsEl.innerHTML=mins;
    secondsEl.innerHTML=seconds;



}

//initialcall
countdown();

setInterval(countdown,1000);
