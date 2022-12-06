// INITIAL SETUP
const canvas = document.getElementById('canvas');
const slider = document.getElementById('pixel-setter');
const currentSize = document.getElementById('current-size')
const modeCheckboxes = document.getElementsByClassName('mode-checkbox')
const colorSelector = document.getElementById('color-select')
slider.addEventListener('mousedown', sliderMove)
slider.addEventListener('mouseup', createCanvas)
colorSelector.addEventListener('change', colorChange)
let color = '#000000'
let currentMode = 'draw'


// CHANGE THE SIZE OF THE CANVAS WITH THE SLIDER
function sliderMove(){
    const mouseSlider = slider.addEventListener('mousemove', (e) => {
        if (e.buttons == 1) {
            createCanvas}
        });
    slider.addEventListener('mouseup', () => slider.removeEventListener('mousemove', mouseSlider))
}

// CHANGE THE DRAWING COLOR
function colorChange(e) {
    color = e.target.value
}

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
    else if (currentMode == 'shade') {
        shade(e)
    }
}

function draw(e) {
    if (e.buttons == 1) {
        e.target.classList = ''
        e.target.className = 'color-pixel'
        e.target.style.backgroundColor = color
    }
}

function erase(e) {
    if (e.buttons == 1) {
        e.target.classList = ''
        e.target.className = 'pixel'
    }
}

function shade(e) {
    if (e.buttons == 1) {
        e.target.classList = ''
        e.target.className = 'color-pixel'
        e.target.style.backgroundColor = color
        let opac = e.target.style.opacity
        if (opac == '') {
            e.target.style.opacity = .2
        } else if (opac == 1) {
            return
        } else {
            e.target.style.opacity = opac * 1.2
        }
    }

}

createCanvas()