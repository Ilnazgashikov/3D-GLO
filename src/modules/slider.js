const slider = (deadline) => {
    const sliderBlock = document.querySelector('.portfolio-content')
    const slides = document.querySelectorAll('.portfolio-item')
    let dots = []
    let ul = document.querySelector('.portfolio-dots')
    let currentSlide = 0
    let timeInterval = 2000
    const createDots = () => {
        let dot = document.createElement('li')
        ul.appendChild(dot)
        dots.push(dot)
        dot.className = 'dot dot-active' 
        for (let i = 1; i <= slides.length-1; i++) {
            let dot = document.createElement('li')
            dot.className = 'dot'    
            ul.appendChild(dot);  
            dots.push(dot)
        }
    }
    createDots()
    let interval
    const prevSlide = (elems, index, strClass) => {
        elems[index].classList.remove(strClass)
    }
    const nextSlide = (elems, index, strClass) => {
        elems[index].classList.add(strClass)
    }
    const autoSlide = () => {
        prevSlide(slides, currentSlide, 'portfolio-item-active')
        prevSlide(dots, currentSlide, 'dot-active')
        currentSlide++
        if (currentSlide >= slides.length) {
            currentSlide = 0
        }
        nextSlide(slides, currentSlide, 'portfolio-item-active')
        nextSlide(dots, currentSlide, 'dot-active')
    }
    const startSlide = (timer = 1500) => {
        interval = setInterval(autoSlide, timer)
    } 
    const stopSlide = () => {
        clearInterval(interval)
    } 
    startSlide(timeInterval)
    sliderBlock.addEventListener('click', e => {
        e.preventDefault()    
        if (!e.target.matches('.dot, .portfolio-btn')) {
            return
        }
        prevSlide(slides, currentSlide, 'portfolio-item-active')
        prevSlide(dots, currentSlide, 'dot-active')
        if (e.target.matches('#arrow-right')) {
            currentSlide++
        }
        else if(e.target.matches('#arrow-left')) {
            currentSlide--
        }
        else if (e.target.classList.contains('dot')) {
            dots.forEach((dot, index) => {
                if (e.target === dot) {
                    currentSlide = index
                }
            })  
        }
        if (currentSlide >= slides.length) {
            currentSlide = 0
        }
        else if (currentSlide < 0) {
            currentSlide = slides.length - 1
        }
        nextSlide(slides, currentSlide, 'portfolio-item-active')
        nextSlide(dots, currentSlide, 'dot-active')
    })
    sliderBlock.addEventListener('mouseenter', e => {
        if (e.target.matches('.dot, .portfolio-btn')) {
            stopSlide()
        }
    }, true)
    sliderBlock.addEventListener('mouseleave', e => {
        if (e.target.matches('.dot, .portfolio-btn')) {
            startSlide(timeInterval)
        }
    }, true)

}
export default slider;