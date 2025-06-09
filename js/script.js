const mainImg = document.querySelector('.main-image');
const mainTitle = document.querySelector('.main-title');

function reziceImg() {
    let scrollDistans = window.scrollY;
    if(scrollDistans > mainTitle.offsetHeight) {
        mainImg.style.width = '1000px';
        mainImg.style.borderRadius = '50px';
        mainImg.style.left = '0';
    } else {
        mainImg.style.width = '300px';
        mainImg.style.borderRadius = '100%';
    }

}
window.addEventListener('scroll', reziceImg)
