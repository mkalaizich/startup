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
	  if (this.status >= 200 && this.status < 400) {
	    var data = JSON.parse(this.response);
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

document.addEventListener('DOMContentLoaded', function() { 
	showHidden();
	document.getElementById("btn_joke").addEventListener("click", getJoke);
});