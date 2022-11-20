const h1 = document.querySelector('h1')

window.addEventListener('scroll', ()=>{
    const pixels = window.pageYOffset
    console.log(pixels)
   
    const fontWidth = pixels * 0.4 + 100
    const fontWeight = pixels * 0.1 + 100
    // h1.style.fontWeight = fontWeight + 'px'
    // h1.style.fontSize = fontSize + 'px'
    h1.style.fontVariationSettings = `"wght" ${fontWidth}, "wdth" ${fontWeight}`
})