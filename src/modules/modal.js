const modal = () => {
    const buttons = document.querySelectorAll('.popup-btn')
    const modal = document.querySelector('.popup')
    modal.style.transition = 'all .5s'
    const modalContent = modal.querySelector('.popup-content')
    modalContent.style.transition = 'all .5s'
    modalContent.style.position = 'absolute'
    modalContent.style.top = '50%'
    modalContent.style.left = '50%'
    modalContent.style.transform = 'translate(-50%, -30%)'

    const closeBtn = modal.querySelector('.popup-close')
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (window.screen.width >= 768) {
                modal.style.display = 'block'
                setTimeout(() => {
                    modalContent.style.transform = 'translate(-50%, -50%)'
                    modal.style.opacity = '1'
                }, 0)
            }
            else {
                modal.style.display = 'block'
                modal.style.opacity = '1'
                modalContent.style.transform = 'translate(-50%, -50%)'
            }
        });
    })
    closeBtn.addEventListener('click', () => {
        if (window.screen.width >= 768) {
            modalContent.style.transform = 'translate(-50%, -30%)'
            modal.style.opacity = '0'   
            setTimeout(() => {
                modal.style.display = 'none'
            }, 500)
        }
        else {
            modal.style.display = 'none'
        }
    })
}
export default modal