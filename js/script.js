var menuIcon = document.querySelector('.menu__icon');
var ul = document.querySelector('.ul');

menuIcon.addEventListener('click', () =>{


    if (ul.classList.contains('ativo')) {
        ul.classList.remove('ativo');
        document.querySelector('.menu__icon img').src = 'img/menu.png';
    }else {
        ul.classList.add('ativo');
        document.querySelector('.menu__icon img').src = 'img/close.png';
    }
})