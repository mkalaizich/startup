function createDom () {
	var structure = [
		['Name', 'Age'],
		['Nicolas', 22],
		['Carlos', 45],
		['Martiano', 35],
		['Jose', 64]
	];
	var newTable = document.createElement('table');

	newTable.id = 'table';
	newTable.className = 'table';
	document.getElementById('target').appendChild(newTable);

	var newTr =  document.createElement('tr');

	newTr.className = 'tr';		
	document.getElementById('table').appendChild(newTr);

	for (let i = 0 ; i < structure[0].length; i++) {
		var newTh = document.createElement('th');

		newTh.className = 'th';
		newTh.innerHTML = structure[0][i];
		document.getElementsByClassName('tr')[0].appendChild(newTh);
	};
		
	for (let i = 1; i < structure.length; i++) {
		var newTr =  document.createElement('tr');
		
		newTr.className = 'tr';		
		document.getElementById('table').appendChild(newTr);

		for (let j = 0; j < structure[0].length; j++) {
			var newTd = document.createElement('td');

			newTd.innerHTML = structure[i][j];
			newTd.className = 'td';
			document.getElementsByClassName('tr')[i].appendChild(newTd);
		};
	};
}

document.addEventListener('DOMContentLoaded', function() { 
	createDom();
});