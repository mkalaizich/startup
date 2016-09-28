function saveContent () {
    if (typeof(Storage) !== "undefined") {
        let textToSave = document.getElementById('text_area').value;
        let target = document.getElementById('target_p');
        localStorage.setItem('text', textToSave);
        target.innerHTML = localStorage.getItem('text');

    } else {
        alert('Browser not supported.');
    }
}

function saveContentIndexedDB () {
    let requestDB = indexedDB.open('text');

    requestDB.onupgradeneeded = function () {
        var database = requestDB.result;
        let store = database.createObjectStore('string', {keyPath: "id"});
    };

    requestDB.onsuccess = function () {
        database = requestDB.result;        
        let transaction = database.transaction('string', 'readwrite');
        let store = transaction.objectStore('string');
        let textToSave = document.getElementById('text_area').value;

        store.add({id: 1, info: textToSave});

        transaction.oncomplete = function () {
            console.log("Transaction completed succesfully");
        };

        database.close();
    };

    requestDB.onclose = function () {
        console.log("database closed");
    };
}

function eraseContent () {
    localStorage.removeItem('text');
    document.getElementById('target_p').innerHTML = '';
}

function getText (event) {
    console.log(event);
    event.stopPropagation();
    event.preventDefault();
    let files = event.dataTransfer.files;
    let reader = new FileReader();

    reader.readAsText(files[0], 'UTF-8');    

    reader.onloadend = function (event) {
        //document.getElementById('drop').value = reader.result;
        let text = document.createTextNode(event.target.result);
        let box = document.getElementById('drop');

        box.removeChild(box.childNodes[0]);
        box.appendChild(text);
    }    
}

function handleDragOver (event) {
    event.stopPropagation();
    event.preventDefault();
    event.dataTransfer.dropEffect = 'copy';
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('button_save').addEventListener('click', saveContent);
    document.getElementById('button_save').addEventListener('click', saveContentIndexedDB);
    document.getElementById('button_clear').addEventListener('click', eraseContent);
    document.getElementById('drop').addEventListener('dragover', handleDragOver);
    document.getElementById('drop').addEventListener('drop', getText);
});