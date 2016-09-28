function openSocket () {
    webSocket = new WebSocket('ws://echo.websocket.org/');
    webSocket.onopen = onOpen;
    webSocket.onclose = onClose;
    webSocket.onmessage = onMessage;
    webSocket.onerror = onError;
}

function onOpen (event) {
    console.log('Connected');
    webSocket.send('Testing websocket 1 2 3');
}

function onClose (event) {
    console.log('Conection closed');
}

function onMessage (event) {
    console.log(`Response ${event.data}`);
    webSocket.close();
}

function onError (event) {
    console.log(`Error ${event.data}`);
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('button_openSocket').addEventListener('click', openSocket);    
});