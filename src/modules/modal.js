const modal = () => {
    const buttons = document.querySelectorAll('.popup-btn')
    const modal = document.querySelector('.popup')
    const modalContent = modal.querySelector('.popup-content')
    modalContent.style.transition = 'all 1s'
    modal.style.transition = 'all 1s'
    const closeBtn = modal.querySelector('.popup-close')
    modalContent.style.transform = 'translateY(100%)'
    modal.style.opacity = '0'
    let screenSmaller = false
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (!screenSmaller) {
                modal.style.display = 'block'
                setTimeout(() => {
                    modalContent.style.transform = 'translateY(50%)'
                    modal.style.opacity = '1'
                }, 0)
            }
        });
    })
    closeBtn.addEventListener('click', () => {
        if (!screenSmaller) {
            modalContent.style.transform = 'translateY(100%)'
            modal.style.opacity = '0'
            setTimeout(() => {
                modal.style.display = 'none'
            }, 1000)
        }
    })
    window.addEventListener('resize', (event) => {
        window.screen.width <= 768? screenSmaller = true :  screenSmaller = false
    }, true);
}
export default modal