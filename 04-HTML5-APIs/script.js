function saveContent () {
    if (typeof(Storage) !== "undefined") {
        var textToSave = document.getElementById('text_area').value;
        var target = document.getElementById('target_p');
        console.log(Storage);
        localStorage.setItem('text', textToSave);
        target.innerHTML = localStorage.getItem('text');

    } else {
        alert('Browser not supported.');
    }
}

function eraseContent () {
    localStorage.removeItem('text');
    document.getElementById('target_p').innerHTML = '';
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('button_save').addEventListener('click', saveContent);
    document.getElementById('button_clear').addEventListener('click', eraseContent);
    
});