const canvas = document.getElementById('canvas')

function createCanvas(dimension) {

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

createCanvas(100)