const slider = (deadline) => {
    const sliderBlock = document.querySelector('.portfolio-content')
    const slides = document.querySelectorAll('.portfolio-item')
    let currentSlide = 0
    const prevSlide = (elems, index, strClass) => {
        elems[index].classList.remove(strClass)
    }
    const nextSlide = (elems, index, strClass) => {
        elems[index].classList.add(strClass)
    }
    const autoSlide = () => {
        prevSlide(slides, currentSlide, 'portfolio-item-active')
        currentSlide++
        if (currentSlide >= slides.length) {
            currentSlide = 0
        }
        nextSlide(slides, currentSlide, 'portfolio-item-active')
    }
    const startSlide = () => {
        setInterval(autoSlide, 2000)
    } 
    startSlide()
}
export default slider;