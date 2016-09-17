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

document.addEventListener('DOMContentLoaded', function() { 
	showHidden();
	document.getElementById("btn_joke").addEventListener("click", getJoke);
});





