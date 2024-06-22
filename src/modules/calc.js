const calc = (price = 100) => {
    const calcBlock = document.querySelector('.calc-block')
    const calcType = document.querySelector('.calc-type')
    const calcSquare = document.querySelector('.calc-square')
    const calcCount = document.querySelector('.calc-count')
    const calcDay = document.querySelector('.calc-day')
    const total = document.getElementById('total')
    const countCalc = () => {
        let interval
        const calcTypeValue = calcType.options[calcType.selectedIndex].value
        const calcSquareValue = calcSquare.value
        let totalValue = 0
        let calcCountValue = 1
        let calcDayValue = 1
        if (calcCount.value > 1) {
             calcCountValue += +calcCount.value/10
        }
        if (calcDay.value && calcDay.value < 5) {
            calcDayValue = 2
        }
        else if (calcDay.value && calcDay.value < 10) {
            calcDayValue = 1.5
        }
        if (calcType.value && calcSquare.value) {
            totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue
        }
        else {
            totalValue = 0
            total.textContent = Math.floor(totalValue)
        }
        let sumTotal = 0
        let count =  Math.floor(totalValue / 100)
        console.log(totalValue)
        interval = setInterval(() => {
            if (totalValue - sumTotal < count) {
                total.textContent = Math.floor(totalValue)
                clearInterval(interval)
            }
            else if (sumTotal < totalValue) {
                console.log(totalValue)
                sumTotal += count
                total.textContent = Math.floor(sumTotal)
            }
            else {
                clearInterval(interval)
            }
        }, 1)
    }
    calcBlock.addEventListener('input', (e) => {
        if (e.target === calcType || e.target === calcSquare ||
            e.target === calcCount || e.target === calcDay)
            countCalc()
    })
}

export default calc