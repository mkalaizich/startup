let indexedDB = window.indexedDB || window.mozindexedDB || window.webkitindexedDB || window.msindexedDB;
let request = indexedDB.open('myDataBase',1);
let database;

request.onsuccess = function (event) {

    database = event.target.result;
    console.log('request OPEN');
}

request.onupgradeneeded = function (event) {

    database = event.target.result;
    store = database.createObjectStore('datos', { keyPath : 'id'});
}

document.addEventListener ('DOMContentLoaded', function() {

    document.querySelector('.div--savebutton').addEventListener('click', saveText);

});

function saveText () {
    let data = document.querySelector('.div--textinput').value;
    let transaction = database.transaction('datos','readwrite');
    let store = transaction.objectStore('datos');
    let add = store.put({
        datos: data,
        id: 1
    });
    
    transaction.oncomplete = function (event) {
        document.querySelector('.div--textinput').value = '';
        console.log('Text successfuly saved');
    };
}              