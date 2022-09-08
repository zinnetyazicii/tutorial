const popup = document.querySelector('.popup');
const close = document.querySelector('.close');

window.onload = function () {
    setTimeout(function () {
        popup.style.display = "block";
        //add some time delay to show popup

    }, 2000)
}

close.addEventListener('click',() => {
    popup.style.display = "none";
})

