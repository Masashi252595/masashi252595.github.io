'use strict';

{
    const open = document.getElementById('open');
    const overray = document.querySelector('.overray');
    const close = document.getElementById('close');
    const link = document.getElementById('link');

    open.addEventListener('click', () => {
        overray.classList.add('show');
        open.classList.add('hide');
    });
    close.addEventListener('click', () => {
        overray.classList.remove('show');
        open.classList.remove('hide');
    });

    link.addEventListener('click', () => {
        overray.classList.remove('show');
        open.classList.remove('hide');
    });




}