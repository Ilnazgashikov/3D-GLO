const timer = (deadline) => {
    const timerHours = document.getElementById("timer-hours");
    const timerMinutes = document.getElementById("timer-minutes");
    const timerSeconds = document.getElementById("timer-seconds");
  
    const  padZero = (elem) => {
      if (elem < 10) {
        return (elem = `0${elem}`);
      } else {
        return elem;
      }
    };
    let dateStop = new Date(deadline).getTime();
    const getTimeRemaining = () => {
      let dateNow = new Date().getTime();
      let timeRemaining = (dateStop - dateNow) / 1000; //кол-во сек. до дедлайна
      let hours = Math.floor(timeRemaining / 60 / 60);
      let minutes = Math.floor((timeRemaining / 60) % 60);
      let seconds = Math.floor(timeRemaining % 60);
      seconds =  padZero(seconds);
      minutes =  padZero(minutes);
      hours =  padZero(hours);
      return { timeRemaining, hours, minutes, seconds };
    };
   
    let interval;
    const updateClock = () => {
      let getTime = getTimeRemaining();
      timerHours.textContent = getTime.hours;
      timerMinutes.textContent = getTime.minutes;
      timerSeconds.textContent = getTime.seconds;
      if (getTime.timeRemaining <= 0) {
        clearInterval(interval);
        timerHours.textContent = "00";
        timerMinutes.textContent = "00";
        timerSeconds.textContent = "00";
      }
    };
  
    interval = setInterval(updateClock, 1000);
    updateClock();
};
  export default timer;