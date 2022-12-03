let canvas = document.getElementById('canvas');
const slider = document.getElementById('pixel-setter');
slider.addEventListener('mousedown', sliderMove)

function sliderMove(){
    const mouseSlider = slider.addEventListener('mousemove', createCanvas);
    slider.addEventListener('mouseup', () => slider.removeEventListener('mousemove', mouseSlider))
}
slider.remov

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
            row.appendChild(pixel)
        }

        canvas.appendChild(row)
    }
}