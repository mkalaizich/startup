document.addEventListener ('DOMContentLoaded', function () {

    document.querySelector('.div--savebutton').addEventListener('click', saveText);
    document.querySelector('.div--clearbutton').addEventListener('click', clearText);
    document.querySelector('.div--textinput').addEventListener('dragend',dragendHandler);
    document.querySelector('.div--textinput').addEventListener('dragover',dragoverHandler);
    document.querySelector('.div--textinput').addEventListener('drop',dropHandler);
});


function dragendHandler(ev) {
  
    let dt = ev.dataTransfer;

    if (dt.items) {
        for (let i = 0; i < dt.items.length; i++) {
            dt.items.remove(i);
        }
    } else {
        ev.dataTransfer.clearData();
    }
}

function dragoverHandler(ev) {
  
    ev.preventDefault();
}

function dropHandler(ev) {

    let dt = ev.dataTransfer.files;
    let reader = new FileReader();
    
    ev.preventDefault();
    reader.readAsText(dt[0],"UTF-8");
    reader.onload = function(event) {            
         document.querySelector('.div--textinput').value = event.target.result;
    }       
}