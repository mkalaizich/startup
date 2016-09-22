function showHidden () {
    var sec = document.getElementById('hide');

    if (sec.style.display =='block') {
        sec.style.display=='none';
    } else {
        var timer = setInterval( function () {
            sec.style.display = 'block';
            sec.className = 'section_fadeIn';
        }, 1000)
    }
}

function getJoke () {
    var request = new XMLHttpRequest();

    request.open('GET', 'http://api.icndb.com/jokes/random', true);

    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            var data = JSON.parse(request.response);
            var newP = document.createElement('p');

            newP.className = 'joke';
            newP.innerHTML = data.value.joke;
            document.getElementById('section_joke').appendChild(newP);
        } else {
            console.log(Error(request.statusText));
        }
    };

    request.onerror = function () {
        console.log(Error(request.statusText));
    };

    request.send();
}

function getHttp () {
    return new Promise( function (resolve, reject) {
        var request = new XMLHttpRequest(); 
        var method =  document.getElementsByName('method')[0].value;
        var url =  document.getElementsByName('url')[0].value;
        var query = document.getElementsByName('query')[0].value;
        var fullUrl = url+'?q='+query;
        
        request.open(method, fullUrl);

        request.onload = function () {
            if (request.status >= 200 && request.status < 400) {
                var data = [];
                data = JSON.parse(request.response);
                for (let i = 0; i < data.items.length; i++ ) {
                    var newP = document.createElement('p');
                    newP.innerHTML = data.items[i].full_name;
                    document.getElementById('section_repositories').appendChild(newP);
                };
                resolve(console.log(data));
            } else {
                document.getElementById('section_joke').style.color = 'red';
                reject(Error(request.statusText));
            }
        };

        request.onerror = function () {
            reject(Error('Network Error'));
        };

        request.send();
    });
}

document.addEventListener('DOMContentLoaded', function () { 
    showHidden();
    //Get Chuck Norris joke
    document.getElementById('button_getJoke').addEventListener('click', getJoke);
    //Get Repositories from github
    document.getElementById('button_getRepository').addEventListener('click', getHttp);
});