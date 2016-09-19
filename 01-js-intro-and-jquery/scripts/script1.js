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

function searchRep() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let obj = JSON.parse(this.responseText);
            for(let i=0; i < obj.items.length && i<50; i++){
                let newItem = document.createElement('li')
                newItem.innerHTML = obj.items[i].full_name;
                document.querySelector(".repolist").appendChild(newItem);
            }
            document.querySelector(".div1").classList.add("divnew");
        }
    };
    xhttp.open("GET", "https://api.github.com/search/repositories?q=JavaScript", true);
    xhttp.send();
}