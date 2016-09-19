function fadeIn(){
    let sec =  document.getElementById("fade");
    let opac = 0;
    var int = setInterval(appear,100);
    function appear(){
        if(opac>=1){
            clearInterval(int);
        } 
        else {
            opac=opac+0.1;
            sec.style.opacity = opac;
        }
    }
}

function getJoke() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            obj = JSON.parse(this.responseText);
            document.querySelector(".jokeplace").classList.add("jokeshow");
            document.querySelector(".jokeplace").innerHTML =obj.value.joke;
            }
        };
    xhttp.open("GET", "http://api.icndb.com/jokes/random", true);
    xhttp.send();
}
