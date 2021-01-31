window.addEventListener( 'load', () => {

    const  encodeButton = document.querySelector('#encoder');
    const decodeButton = document.querySelector('#decoder');
    const outputButton = document.querySelector('#outputURL');
    let input = document.querySelector('#inputURL');

    encodeButton.addEventListener('click', event =>
    {
        outputButton.value = encodeURIComponent(input.value);
    }),
    decodeButton.addEventListener('click', () =>
    {
        outputButton.value = decodeURIComponent(input.value);
    })
})