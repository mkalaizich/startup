let indexedDB = window.indexedDB || window.mozindexedDB || window.webkitindexedDB || window.msindexedDB;
let request = indexedDB.open('myDataBase',1);
let database;

request.onsuccess = function (event) {

    database = event.target.result;
    console.log('request OPEN');
}

request.onupgradeneeded = function (event) {

    database = event.target.result;
    store = database.createObjectStore('info', { keyPath : 'id'});
}

document.addEventListener ('DOMContentLoaded', function() {

    document.querySelector('.div--savebutton').addEventListener('click', saveText);
    document.querySelector('.div--clearbutton').addEventListener('click', clearText);

});

function clearText () {

    let transaction = database.transaction('info','readwrite');
    let store = transaction.objectStore('info');
    let storerequest = store.delete(1);

    transaction.oncomplete = function (event) {
        console.log('Text successfuly deleted');
    };
}

function saveText () {
    let data = document.querySelector('.div--textinput').value;
    let transaction = database.transaction('info','readwrite');
    let store = transaction.objectStore('info');
    let add = store.put({
        info: data,
        id: 1
    });
    
    transaction.oncomplete = function (event) {
        document.querySelector('.div--textinput').value = '';
        console.log('Text successfuly saved');
    };
}              