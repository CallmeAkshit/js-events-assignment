

window.addEventListener('defer', () => {
    const input=document.querySelector('#some-input');
    const box=document.querySelector('#color');

        input.addEventListener('input', event => {
            box.style.backgroundColor = input.value;      
    });
})