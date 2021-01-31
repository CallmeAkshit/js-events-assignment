
window.addEventListener('load', () => {
    const inputButton=document.querySelector('#text-input-1');
    const box=document.querySelector('#color');

    inputButton.addEventListener('input', event => {
            box.style.backgroundColor = inputButton.value;      
    });
})