function drawCircle (canvastx, circle) {
    canvastx.beginPath();
    canvastx.arc(400, 100, circle.radius, 0, 2*Math.PI);
    canvastx.stroke();
    canvastx.fillStyle = circle.color;
    canvastx.fill();
}

function drawRectangle (canvastx, rectangle) {
    canvastx.beginPath();
    canvastx.rect(20, 20, rectangle.width, rectangle.height);
    canvastx.fillStyle = rectangle.color;
    canvastx.fill();
    canvastx.stroke();
}

function drawSquare (canvastx, square) {
    canvastx.beginPath();
    canvastx.rect(800, 20, square.width, square.width);
    canvastx.fillStyle = square.color;
    canvastx.fill();
    canvastx.stroke();
}

function randomNumber (min, max) {
    return Math.floor(Math.random()* (max - min + 1) + min);
}

document.addEventListener('DOMContentLoaded', function () {
    let canvas = document.getElementById('canvas');
    let canvastx = canvas.getContext('2d');
    const colors = ['red', 'blue', 'green', 'cyan', 'magenta', 'white'];
    let rectangle = {        
        width: randomNumber(150, 300),
        height: randomNumber(150, 300),
        color: colors[randomNumber(0, colors.length)]
    };
    let square = {
        width: randomNumber(150, 300),
        color: colors[randomNumber(0, colors.length)]
    };
    let circle = {
        radius: randomNumber(80, 200),
        color: colors[randomNumber(0, colors.length)]
    }
    console.log(circle.color);
    console.log(square.color);

    for ( let i = 1 ; i <= 4; i++) {        
        canvastx.moveTo(100 * i, 10);

        switch (Math.floor((Math.random() * 3) + 1)) {
            case 1:
                drawCircle(canvastx, circle);

                break;
            case 2:
                drawRectangle(canvastx, rectangle);

                break;
            case 3:
                drawSquare(canvastx, square);

                break;
        }
    };    
});