let playButton= document.querySelector('[data-start]');
let stopButton= document.querySelector('[data-stop]');
let timerId;

playButton.addEventListener("click",()=>{
    playButton.disable=true;
    timerId=setInterval(()=>{
        document.body.style.background=getRandomHexColor();
    },1000);
});

stopButton.addEventListener("click",()=>{
    playButton.disable=false;
    clearInterval(timerId);
});

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  };