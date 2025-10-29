//Store the selected elemetns that we are goin to use
const navbutton = document.querySelector('#ham-btn');

//Toggle the show class off and on
navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('show');
});