const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
//const digitalClock = document.getElementById('timeDisplay');


//Analog Clock hands
function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegress = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegress}deg)`;
    
    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60)* 360) + 90;
    minHand.style.transform = `rotate(${minsDegrees}deg)`;
    
    const hours = now.getHours();
    const hoursDegrees = ((hours / 12)* 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    //console.log(now.toUTCString());
    
    //Digital Clock display
    let currentTime = hours + ':' + mins + ':' + seconds;
    document.getElementById('timeDisplay').innerHTML = currentTime;
    

} 


setInterval(setDate, 1000);