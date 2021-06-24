export default function initDropdownMenu() {

}

const dropdownMenu = document.querySelectorAll('[data-dropdown]');

dropdownMenus.forEach(menu => { 
    ['touchstart', 'click'].forEach(userEvent => {
        menu.addEventListenner(userEvent, handleClick);
    })
})

function handleClick(event) {
    event.preventDefault();
    this.classList.add('active');
    outsideClick(() => {
        this.classList.remove('active');
    });
}

function outsideClick(element, callback) {
    const html = document.documentElement;
    html.addEventListener('click', handleOutsideClick);
    function handleOutsideClick(event) {
        console.log(element.contains(event.target));
        callback();
    }
}