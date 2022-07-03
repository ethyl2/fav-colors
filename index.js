const favColors = [
    { name: 'Maren', color: 'blue', hex: '#0096FF'},
    { name: 'Sadie', color: 'red', hex: '#C70039', secColor: 'yellow', secHex: '#FFC300'},
    { name: 'Olivia', color: 'royal blue', hex: '#4169E1'},
    { name: 'Brylee', color: 'pink', hex: '#FF00BB'},
    { name: 'Kimberly', color: 'pastel yellow', hex: '#fdfd96', secColor: 'black', secHex: '#00000'},
    { name: 'Kallie', color: 'light blue', hex: '#ADD8E6', secColor: 'yellow', secHex: '#FCF55F', terColor: 'red', terHex: '#dc143c'},
    { name: 'Maggie', color: 'green', hex: '#32cd32'},
    { name: 'Brielle', color: 'turquoise', hex: '#30D5C8'},
    { name: 'Chanelle', color: 'baby pink', hex: '#f4c2c2'},
    { name: 'Lilly', color: 'blue', hex: '#6495ed'},
    { name: 'Tiana', color: 'blue', hex: '#4f86f7'},
    { name: 'Emmaline', color: 'purple', hex: '#9932cc'},
    { name: 'Rose', color: 'teal', hex: '#008080'},
    { name: 'Adria', color: 'blue', hex: '#00bfff', secColor: 'orange', secHex: '#ff7518'},
    { name: 'Tessa', color: 'blue', hex: '#273be2'},
    { name: 'Kaylee', color: 'pastel blue', hex: '#8BD3E6'},
    { name: 'Kylie', color: 'burnt yellow', hex: '#cb9f45'},
    { name: 'Jenelle', color: 'turquoise', hex: '#40e0d0'},
    { name: 'Becky', color: 'orange', hex: '#ffb347'},
    { name: 'Heather', color: 'maroon', hex: '#800000'},
]
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr
}

function rgbToHex(rgb) {
    let [r, g, b] = rgb.substring(rgb.indexOf('(') + 1, rgb.lastIndexOf(')')).split(/,\s*/)
    return '#' + elementToHex(r) + elementToHex(g) + elementToHex(b)
}

function elementToHex (c) { 
    let hex = Number(c).toString(16);
    if (hex.length < 2) {
        hex = "0" + hex;
    }
    return hex;
}

const favColorsShuffled = shuffleArray(favColors)

const gridEl = document.getElementById('color-grid')
favColorsShuffled.forEach(item => {
    const circleEl = document.createElement('div')
    circleEl.classList.add('w-24', 'h-24', 'md:w-48', 'md:h-48', 'rounded-full', 'flex', 'items-center', 'justify-center', 'flex-col', 'm-1', 'md:m-2', 'space-y-1', 'shadow-lg', 'shake')
    circleEl.style.backgroundColor = item.hex
    if (item.secColor) {
        circleEl.style.border = `6px solid ${item.secHex}`
    } else {
        circleEl.style.border = `6px solid white` 
    }
    if (item.terColor) {
        circleEl.style.outline = `2px solid ${item.terHex}`
    } else {
        circleEl.style.outline = `2px solid black`
    }
    const nameP = document.createElement('p')
    nameP.textContent = item.name
    nameP.classList.add('bg-black', 'py-1', 'rounded-lg', 'px-2')
    colorP = document.createElement('p')
    colorP.textContent = item.color
    colorP.classList.add('bg-white', 'text-black', 'px-1', 'md:py-1', 'rounded-lg', 'md:px-2', 'text-xs', 'text-center', 'md:text-sm')
    circleEl.append(nameP)
    circleEl.append(colorP)
    circleEl.addEventListener('click', () => {
        const colorPChild = circleEl.getElementsByClassName('bg-white')[0]
        const hex = rgbToHex(circleEl.style.backgroundColor)
        colorPChild.textContent = hex
        console.log(hex)
        window.open(`https://hexcolorpedia.com/color/${hex.slice(1)}/`, '_blank')
    })
    gridEl.append(circleEl)
})