document.addEventListener ('DOMContentLoaded', function() {

    document.querySelector('.div--savebutton').addEventListener('click', saveText);
});

//Save the text using localStorage
function saveText () {

    let savedText = document.querySelector('.div--textinput').value;
    
    localStorage.setItem('Info',savedText);
    document.querySelector('.div--textinput').value = '';
}