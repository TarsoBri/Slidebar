const btnTogle = document.querySelector('.slidebar-togle');
const btnClose = document.querySelector('.close-btn');
const slidebar = document.querySelector('.slidebar');

btnTogle.addEventListener('click', openSlide);
btnClose.addEventListener('click', closeSlide);


function openSlide(){
    slidebar.classList.toggle('show-slidebar');
}

function closeSlide(){
    slidebar.classList.remove('show-slidebar');
}





