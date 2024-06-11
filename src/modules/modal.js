const modal = () => {
    const buttons = document.querySelectorAll('.popup-btn')
    const modal = document.querySelector('.popup')
    const modalContent = modal.querySelector('.popup-content')
    modalContent.style.transition = 'all .5s'
    modalContent.style.transform = 'translateY(100%)'
    modalContent.style.transform = 'translateX(0)'
    modal.style.transition = 'all .5s'

    const closeBtn = modal.querySelector('.popup-close')
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (window.screen.width >= 768) {
                modal.style.display = 'block'
                setTimeout(() => {
                    modalContent.style.transform = 'translateY(50%)'
                    modal.style.opacity = '1'
                }, 0)
            }
            else {
                modal.style.display = 'block'
                modal.style.opacity = '1'
                modalContent.style.transform = 'translateY(50%)'
            }
        });
    })
    closeBtn.addEventListener('click', () => {
        if (window.screen.width >= 768) {
            modalContent.style.transform = 'translateY(100%)'
            modal.style.opacity = '0'
            setTimeout(() => {
                modal.style.display = 'none'
            }, 500)
        }
        else {
            modal.style.display = 'none'
            modal.style.opacity = '0'
        }
    })
}
export default modal