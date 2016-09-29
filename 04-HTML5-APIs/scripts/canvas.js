document.addEventListener ('DOMContentLoaded', function () {

    draw1 ();
    draw2 ();
    draw3 ();
});

function draw1 () {

    let canvas = document.querySelector(".frame--canvas");
    let ctx = canvas.getContext("2d");
    let x = randomInteger(0,100);
    let y = randomInteger(0,35);
    let base = randomInteger(40,200);
    let height = randomInteger(40,100);
    let color;
    let random = randomInteger(0,3);
    
    switch(random) {
        case 0:
            color = "blue";
        break;
        case 1:
            color = "red";
        break;
        case 2:
            color = "green";
        break;
        case 3:
            color = "yellow";
        break;
    }

    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x + base,y);
    ctx.lineTo(x + base / 2, y + height);
    ctx.lineTo(x, y);
    ctx.fillStyle = color;
    ctx.strokeStyle = color;
    ctx.stroke(); 
    ctx.fill();
}

function draw2 () {

    let canvas = document.querySelectorAll(".frame--canvas")[1];
    let ctx = canvas.getContext("2d");
    let x = randomInteger(0,100);
    let y = randomInteger(0,35);
    let base = randomInteger(40,200);
    let height = randomInteger(40,150);
    let grd = ctx.createLinearGradient(x,0,base,0);
    let color;
    let random = randomInteger(0,3);
    
    switch(random) {
        case 0:
            color = "blue";
        break;
        case 1:
            color = "red";
        break;
        case 2:
            color = "green";
        break;
        case 3:
            color = "yellow";
        break;
    }

    grd.addColorStop(0,color);
    grd.addColorStop(1,"white");
    ctx.fillStyle = grd;
    ctx.fillRect(x, y, x+base, y+height); 
}

function draw3 () {

    let canvas = document.querySelectorAll(".frame--canvas")[2];
    let ctx = canvas.getContext("2d");
    let x = 150;
    let y = 75;
    let radius = randomInteger(35,70);
    let color;
    let random = randomInteger(0,3);
    
    switch(random) {
        case 0:
            color = "blue";
        break;
        case 1:
            color = "red";
        break;
        case 2:
            color = "green";
        break;
        case 3:
            color = "yellow";
        break;
    }

    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI*2 + 1);
    ctx.fillStyle = color;
    ctx.strokeStyle = color;
    ctx.fill();
}

function randomInteger(min,max) {
    
    return Math.floor(Math.random()*(max-min+1)+min);
}