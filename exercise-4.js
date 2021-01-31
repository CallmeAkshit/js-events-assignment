window.addEventListener( 'load', () => {

    const inputButton = document.querySelector('#input');
    const outputButton = document.querySelector('#output');

    inputButton.addEventListener('input', event => 
    {
        outputButton.innerHTML = 'The above text has ' + inputButton.value.length + ' characters';
    })
})