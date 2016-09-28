let websocket = new WebSocket("ws://echo.websocket.org/");

document.addEventListener ('DOMContentLoaded', function () {

    websocket.onopen = function(evt) { onOpen(evt) };
    websocket.onmessage = function(evt) { onMessage(evt) };
    document.querySelector('.sendbutton').addEventListener('click', send);
    document.querySelector('.closebutton').addEventListener('click', close);
});

function close () {

    console.log("DISCONNECTED");
    websocket.close()
}

function onMessage(evt) {

    console.log('RESPONSE:' + evt.data);
}

function onOpen(evt) {

    console.log("CONNECTED");
}

function send () {

    let message = document.querySelector(".messageinput").value;
    
    console.log("SENT:" + message);
    websocket.send(message);
    document.querySelector(".messageinput").value = '';
}