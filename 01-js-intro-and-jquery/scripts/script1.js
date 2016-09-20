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
            let t=document.createTextNode(obj.value.joke);
            document.querySelector(".jokeplace").appendChild(t)
            }
        };
    xhttp.open("GET", "http://api.icndb.com/jokes/random", true);
    xhttp.send();
}

function searchRep() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let obj = JSON.parse(this.responseText);
            for(let i=0; i < obj.items.length && i<50; i++){
                let newItem = document.createElement('li');
                let newLink = document.createElement('a');
                let t = document.createTextNode(obj.items[i].full_name);
                newLink.href= obj.items[i].html_url;
                newLink.appendChild(t);
                newItem.appendChild(newLink);
                document.querySelector(".repolist").appendChild(newItem);
            }
            document.querySelector(".div1").classList.add("divnew");
        }
    };
    let repo = document.getElementById("reposit").value;
    let url = "https://api.github.com/search/repositories?q=" + repo;
    xhttp.open("GET", url, true);
    xhttp.send();
}