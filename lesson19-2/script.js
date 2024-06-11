let dateNow = new Date();
const beforeNewYear = () => {
    let dateStop = new Date('31 december 2024');
    let timeRemaining = (dateStop.getTime() - dateNow.getTime()) / 1000;
    let days = Math.floor(timeRemaining / 60 / 60 / 24);
    if (timeRemaining < 0) {
        dateStop.setFullYear(dateStop.getFullYear() + 1)
    }  
    console.log(`До нового года осталось ${days} дней`)
}
const timeOfDay = () => {
    let hour = dateNow.getHours();
    if (hour <= 6) {
        console.log('Доброе время суток');
    } else if (hour <= 12) {
        console.log('Доброе утро');
    } else if (hour <= 18) {
        console.log('Добрый день');
    } else {
        console.log('Добрый вечер');
    }
}
timeOfDay();
beforeNewYear()


