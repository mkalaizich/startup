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

        store.put({id: 1, info: textToSave});

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

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('button_save').addEventListener('click', saveContent);
    document.getElementById('button_save').addEventListener('click', saveContentIndexedDB);
    document.getElementById('button_clear').addEventListener('click', eraseContent);    
});