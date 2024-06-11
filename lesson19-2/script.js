const newYearText = document.getElementById('before-new-year');
const textHello = document.getElementById('text-hello');
const dayOfWeek = document.getElementById('day-of-week');
const timeAmPm = document.getElementById('time-am-pm');
let dateNow = new Date();
const beforeNewYear = () => {
    let dateStop = new Date('31 december 2024');
    let timeRemaining = (dateStop.getTime() - dateNow.getTime()) / 1000;
    let days = Math.floor(timeRemaining / 60 / 60 / 24);
    if (timeRemaining < 0) {
        dateStop.setFullYear(dateStop.getFullYear() + 1)
    }  
    newYearText.textContent = `До нового года осталось ${days} дней`
}
const timeOfDay = () => {
    let hour = dateNow.getHours();
    if (hour <= 6) {
       textHello.textContent = 'Доброе время суток';
    } else if (hour <= 12) {
        textHello.textContent = 'Доброе утро';
    } else if (hour <= 18) {
        textHello.textContent = 'Добрый день';
    } else {
        textHello.textContent = 'Добрый вечер';
    }
}
const getWeekDay = () => {
    let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    dayOfWeek.textContent = `Сегодня: ${days[dateNow.getDay()]}`;
}

const getAmPmHours = () => {
    let date = new Date();
    let hours = date.getHours() % 12;
    let minutes = ('0' + date.getMinutes()).slice(-2); 
    let secundes = date.getSeconds();
    if (secundes < 10) {
        secundes = `0${secundes}`
    } 
    let ampm = date.getHours() >= 12 ? 'PM' : 'AM';
    timeAmPm.textContent = `${hours}:${minutes}:${secundes} ${ampm}`;
}
timeOfDay()
getWeekDay()
setInterval(getAmPmHours, 1000)
getAmPmHours();
beforeNewYear()


