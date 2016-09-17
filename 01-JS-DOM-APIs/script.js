function showHidden () {	
	var sec = document.getElementById('hide');
    if (sec.style.display =='block')
    {
        sec.style.display=='none';
    } else {
        var timer = setInterval(function(){
            sec.style.display = 'block';
            sec.className = 'section_fadeIn';
        }, 1000)
    }
}

function getJoke () {
	var request = new XMLHttpRequest();
	request.open('GET', 'http://api.icndb.com/jokes/random', true);

	request.onload = function() {
	  if (request.status >= 200 && request.status < 400) {
	    var data = JSON.parse(request.response);
	    var newP = document.createElement('p');
	    newP.className = 'joke';
	    document.getElementById('section_joke').appendChild(newP);
	    newP.innerHTML = data.value.joke;
	  } else {
	    console.log('Server Error');

	  }
	};

	request.onerror = function() {
	  console.log('Connection error');
	};

	request.send();
}

function getData (method, url) {
	return new Promise( function(resolve, reject){
		var request = new XMLHttpRequest();
		request.open(method, url);

		request.onload = function() {
			if (request.status >= 200 && request.status < 400) {
				var data = JSON.parse(request.response);
				resolve(console.log(data));
			} else {
				reject(Error(request.statusText));
			}
		};
		request.onerror = function() {
			reject(Error('Network Error'));
		};

		request.send();
	});
}

document.addEventListener('DOMContentLoaded', function() { 
	showHidden();
	document.getElementById("btn_joke").addEventListener("click", getJoke);
	getData('GET', 'http://api.icndb.com/jokes/random').then(function(response) {
  		console.log("Success!");
	}, function(error) {
  		console.error("Failed!", error);
	});
});