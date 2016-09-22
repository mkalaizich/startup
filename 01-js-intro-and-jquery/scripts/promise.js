function makePromise (url) {
	return new Promise( function(resolve, reject){
		let xhttp = new XMLHttpRequest();

		xhttp.open("GET", url);

		xhttp.onload = function() {
			if (this.readyState == 4 && this.status == 200) {
				let obj = JSON.parse(xhttp.responseText);
				
				resolve(console.log(obj));
			} 
			else {
				document.querySelector(".section").style.backgroundColor="red";

				reject(Error(xhttp.statusText));
			}
		};

		xhttp.send();
	});
}