import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';


const playButton= document.querySelector("[data-start]");
const days= document.querySelector("[data-days]");
const hours=document.querySelector("[data-hours]");
const minutes=document.querySelector("[data-minutes]");
const seconds=document.querySelector("[data-seconds]");

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
    },
  };

  const dateTime=flatpickr("#datetime-picker", options);

  playButton.addEventListener("click",()=>{
    const clickDate=dateTime.selectedDates[0];
    const realDate=new Date();

    if(clickDate<realDate){
        Notiflix.Notify.failure("Please choose a date in the future");
        return;
    };
    const timeClickDate=new Date(clickDate).getTime();

    const decreaseCounter= setInterval(()=>{
        const timeRealDate= new Date().getTime();
        const diferenceBetweenDates= timeClickDate-timeRealDate;

        if(diferenceBetweenDates<0){
            clearInterval(decreaseCounter);
            Notiflix.Notify.success("Countdown Finished!")
        }else{
            const outDays = Math.floor(diferenceBetweenDates / (1000 * 60 * 60 * 24));
            const outHours = Math.floor((diferenceBetweenDates % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const outMinutes = Math.floor((diferenceBetweenDates % (1000 * 60 * 60)) / (1000 * 60));
            const outSeconds = Math.floor((diferenceBetweenDates % (1000 * 60)) / 1000);

            days.textContent = `${outDays.toString().padStart(2, "0")}`;
            hours.textContent = `${outHours.toString().padStart(2, "0")}`;
            minutes.textContent = `${outMinutes.toString().padStart(2, "0")}`;
            seconds.textContent = `${outSeconds.toString().padStart(2, "0")}`;

        }
    },1000);

  });


