(function () {

const hideShowButton = document.querySelector('.hideShowButton');
const menuContainer = document.querySelector('.hideMenuContainer')

hideShowButton.addEventListener('click', () => {
  toggleMenu();
  //clearInterval(toggleTimer);
});

const toggleMenu = () => {
  menuContainer.classList.toggle('showMenu');
}

// const toggleTimer = setInterval(() => {
//   toggleMenu();
// }, 2000);
})();