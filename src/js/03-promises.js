import Notiflix from "notiflix";
const form= document.querySelector("form");

function createPromise(position, delay) {
  
  const createPromise= new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve({position, delay});
        Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject({position, delay});
        Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });

  createPromise
    .then(value=>{
      console.log("it's rigth");
    })
    .catch(error=>{
      console.log("it's wrong");
    });
  
  return createPromise;
};


form.addEventListener("submit", (event)=>{
  event.preventDefault();
  const delay= parseInt(form.delay.value);
  const step=parseInt(form.step.value);
  const amount=parseInt(form.amount.value);
  for(let i=0; i<amount; i++){
    setTimeout(() => {
      createPromise(i+1,delay+i*step);
    }, delay+i*step);
  }

});