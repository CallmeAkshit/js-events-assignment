window.addEventListener('load',() => {

    const button = document.querySelector('#button-1');
    button.addEventListener('click', event => button.value++);
})