document.addEventListener ('DOMContentLoaded', function() {

    document.querySelector('.div--savebutton').addEventListener('click', saveText);
    document.querySelector('.div--clearbutton').addEventListener('click', clearText);
});

function clearText () {
    localStorage.removeItem('Info');
    console.log('Storage cleaned')
}

function saveText () {

    let savedText = document.querySelector('.div--textinput').value;
    
    localStorage.setItem('Info',savedText);
    document.querySelector('.div--textinput').value = '';
}