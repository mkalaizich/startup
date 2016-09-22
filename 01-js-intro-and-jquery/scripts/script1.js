function fadeIn (){
    let sec =  document.querySelector(".section--header_hidden");
    let opac = 0;
    let int = setInterval(appear,100);

    function appear () {
        if (opac >= 1) {
            clearInterval(int);
        } 
        else {
            opac = opac + 0.1;
            sec.style.opacity = opac;
        }
    }
}

function getJoke() {
    let xhttp = new XMLHttpRequest ();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let obj = JSON.parse(this.responseText);
            let t = document.createTextNode(obj.value.joke);
            
            document.querySelector(".jokeplace").classList.add("jokeplace_show");
            
            document.querySelector(".jokeplace").appendChild(t)
            }
        };

    xhttp.open("GET", "http://api.icndb.com/jokes/random", true);
    xhttp.send();
}

function searchRep () {
    let xhttp = new XMLHttpRequest();
    let repo = document.querySelector(".form--input").value;
    let url = "https://api.github.com/search/repositories?q=" + repo;

    xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) { 
            let obj = JSON.parse(this.responseText);

            for(let i = 0; i < obj.items.length && i < 50; i++) { //a maximum of 50 elements listed
                let newItem = document.createElement('li');
                let newLink = document.createElement('a');
                let t = document.createTextNode(obj.items[i].full_name);

                newLink.href = obj.items[i].html_url;
                newLink.appendChild(t);
                newItem.appendChild(newLink);
                document.querySelector(".div2--repolist").appendChild(newItem);
            }

            document.querySelector(".div1").classList.add("div1_newsize");
        }
    };

    xhttp.open("GET", url, true);
    xhttp.send();
}