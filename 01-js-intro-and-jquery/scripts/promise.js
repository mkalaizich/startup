function makePromise (url) {
	return new Promise( function(resolve, reject){
		let xhttp = new XMLHttpRequest();
		xhttp.open("GET", url);
		xhttp.onload = function() {
			if (xhttp.status >= 200 && xhttp.status < 400) {
				let obj = JSON.parse(xhttp.response);
				resolve(console.log(obj));
			} else {
				reject(Error(xhttp.statusText));
			}
		};
		xhttp.send();
	});
}