const modalClose = document.querySelector('.modal_close')
const modal = document.querySelector('.modal')
const modalTrigger = document.querySelector('#btn-get')
const openModal = () => {
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
    window.removeEventListener('scroll', scrollHandler)
    modalInterval()
}
modalTrigger.oclick = () => {
    openModal()
}
const modalInterval = setInterval(openModal, 1000000000)
const closeModal = () => {
    modal.style.display = 'none'
    document.body.style.overflow = 'auto'
}
modalClose.onclick = () => {
    closeModal()
}
modal.onclick = (event) => event.target === modal && closeModal()
const isBottomOfPage = () => {
    return window.innerHeight + window.scrollY >= document.body.offsetHeight
}
const scrollHandler = () => {
    if (isBottomOfPage()) {
        openModal()
    }
}
window.addEventListener('scroll', scrollHandler);