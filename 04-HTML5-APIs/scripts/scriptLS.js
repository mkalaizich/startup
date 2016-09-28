function clearText () {
    
    localStorage.removeItem('Info');
    console.log('Storage cleaned')
}

function saveText () {

    let savedText = document.querySelector('.div--textinput').value;
    
    localStorage.setItem('Info',savedText);
    console.log('Text Saved')
    document.querySelector('.div--textinput').value = '';
}