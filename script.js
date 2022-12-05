const canvas = document.getElementById('canvas');
const slider = document.getElementById('pixel-setter');
const currentSize = document.getElementById('current-size')
const modeCheckboxes = document.getElementsByClassName('mode-checkbox')
slider.addEventListener('mousedown', sliderMove)
slider.addEventListener('mouseup', createCanvas)
let currentMode = draw

for (let checkbox of modeCheckboxes) {
    checkbox.addEventListener('click', setMode)
};

function setMode(e) {
    //if e.target.checked equals true (didn't turn off all) then set the value
    //make all boxes off and check this one
    //else make the value off and no mode
    let newMode = e.target.value
    console.log(e.target.checked)
}


function sliderMove(){
    const mouseSlider = slider.addEventListener('mousemove', (e) => {
        if (e.buttons == 1) {
            createCanvas}
        });
    slider.addEventListener('mouseup', () => slider.removeEventListener('mousemove', mouseSlider))
}

function createCanvas() {
    canvas.replaceChildren()
    const dimension = slider.value

    // CREATE ROW
    for (let i = 0; i < dimension; i++) {
        let row = document.createElement('div')
        row.className = 'row'

        // CREATE PIXEL
        for (let k = 0; k < dimension; k++) {
            let pixel = document.createElement('div')
            pixel.className = 'pixel'
            pixel.addEventListener('mouseenter', draw)
            pixel.addEventListener('mousedown', draw)
            row.appendChild(pixel)
        }

        canvas.appendChild(row)
    }
    currentSize.textContent = `${dimension}x${dimension}`
}

function draw(e) {
    if (e.buttons == 1) {
        e.target.classList = ''
        e.target.className = 'black'
    }
}

function erase(e) {
    if (e.buttons == 1) {
        e.target.classList = ''
        e.target.className = 'pixel'
    }
}

createCanvas()