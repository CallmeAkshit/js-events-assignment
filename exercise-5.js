

window.addEventListener('defer', () => {
    const input=document.querySelector('#text-input-1');
    const box=document.querySelector('#color');

        input.addEventListener('input', event => {
            box.style.backgroundColor = input.value;      
    });
})
