// INITIAL SETUP
const canvas = document.getElementById('canvas');
const slider = document.getElementById('pixel-setter');
const currentSize = document.getElementById('current-size')
const modeCheckboxes = document.getElementsByClassName('mode-checkbox')
slider.addEventListener('mousedown', sliderMove)
slider.addEventListener('mouseup', createCanvas)
let currentMode = 'draw'

// SET THE DRAWING MODE FROM THE CHECKBOXES
for (let checkbox of modeCheckboxes) {
    checkbox.addEventListener('click', setMode)
};

function setMode(e) {

    // UNCHECK ALL CHECKBOXES
    for (let checkbox of modeCheckboxes) {
        checkbox.checked = false
    }
    e.target.checked = true // CHECK ONLY THE CURRENT CHECKBOX
    
    currentMode = e.target.value
}

// CHANGE THE SIZE OF THE CANVAS WITH THE SLIDER
function sliderMove(){
    const mouseSlider = slider.addEventListener('mousemove', (e) => {
        if (e.buttons == 1) {
            createCanvas}
        });
    slider.addEventListener('mouseup', () => slider.removeEventListener('mousemove', mouseSlider))
}

//CREATE THE NUMBER OF DIVS IN THE CANVAS
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
            pixel.addEventListener('mouseenter', mode)
            pixel.addEventListener('mousedown', mode)
            row.appendChild(pixel)
        }

        canvas.appendChild(row)
    }
    currentSize.textContent = `${dimension}x${dimension}`

    // When changing canvas size, reset mode to draw
    currentMode = 'draw'
    for (let checkbox of modeCheckboxes) {
        if (checkbox.id == 'draw-mode') {
            checkbox.checked = true
        } else {
            checkbox.checked = false
        }
    };
}

// CALL THE CORRECT DRAWING FUNCTION FROM THE CURRENT MODE CHECKBOX
function mode(e) {
    if (currentMode == 'draw') {
        draw(e)
    }
    else if (currentMode == 'erase') {
        erase(e)
    }
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