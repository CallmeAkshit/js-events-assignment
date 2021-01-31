window.addEventListener('load', () => {

    const  minusButton = document.querySelector('#button-1');
    const plusButton = document.querySelector('#button-2');
    const counter = document.querySelector('#counter-val');

    plusButton.addEventListener('click', event => counter.value++);
    minusButton.addEventListener('click', event => counter.value--);
} )