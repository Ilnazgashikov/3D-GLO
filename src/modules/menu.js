const menu = () => {
    const menuBtn = document.querySelector('.menu')
    const menu = document.querySelector('menu')
    const handleMenu = () => {
        menu.classList.toggle('active-menu')
    }
    menuBtn.addEventListener('click', handleMenu)
    menu.addEventListener('click', (event)=> {
        if (event.target.classList.contains('close-btn') || event.target.matches('li>a')) {
            handleMenu()
        }
    })
}
export default menu