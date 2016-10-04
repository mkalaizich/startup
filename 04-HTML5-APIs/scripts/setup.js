document.addEventListener ('DOMContentLoaded', function () {

    document.querySelector('.div--savebutton').addEventListener('click', saveText);
    document.querySelector('.div--clearbutton').addEventListener('click', clearText);
    document.querySelector('.div--textinput').addEventListener('drop',dropHandler);
});

function dropHandler(ev) {

    let dt = ev.dataTransfer.files;
    let reader = new FileReader();
    
    ev.preventDefault();
    reader.readAsText(dt[0],'UTF-8');
    reader.onload = function(event) {            
        document.querySelector('.div--textinput').value = event.target.result;
    }       
}