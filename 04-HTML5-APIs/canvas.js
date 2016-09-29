function drawCircle (canvastx) {
    canvastx.beginPath();
    canvastx.arc(100,50,40,0,2*Math.PI);
    canvastx.stroke();   
}

function drawRectangle (canvastx , rectangle) {
    canvastx.beginPath();
    canvastx.rect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
    
    canvastx.stroke();
}


function drawSquare (canvastx) {
    canvastx.rect(10,200,200,200);
    canvastx.stroke();
}

function drawTriangle (canvastx) {
    canvastx.beginPath();
    canvastx.moveTo(400, 400);
    canvastx.lineTo(550, 350);
    canvastx.lineTo(400, 300);
    canvastx.closePath();
    canvastx.stroke();
}

document.addEventListener('DOMContentLoaded', function () {
    let canvas = document.getElementById('canvas');
    let canvastx = canvas.getContext('2d');
    let rectangle = {
        x: 200,
        y: 10,
        width: 240,
        height: 150
    };

    for ( let i = 1 ; i <= 4; i++) {        
        canvastx.moveTo(100 * i, 10);

        switch (Math.floor((Math.random() * 3) + 1)) {
            case 1:
                drawCircle(canvastx);

                break;
            case 2:
                drawRectangle(canvastx, rectangle);

                break;
            case 3:
                drawSquare(canvastx);

                break;
        }
    };    
});