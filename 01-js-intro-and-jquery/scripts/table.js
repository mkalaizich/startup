function createTable () {
    let matrix = [
        ['Player', 'Kills','Deaths'],
        ['galletarooney', 22,2],
        ['pFunk', 45,5],
        ['EddardDuhalde', 15,35],
    ];
    let newTable = document.createElement('table');
    let newTr = document.createElement('tr');

    newTable.className = 'section--table';
    newTr.className = 'tr';     
    newTable.appendChild(newTr);

    for (let i = 0 ; i < matrix[0].length; i++) {        
        let newTh = document.createElement('th');
        let t = document.createTextNode(matrix[0][i]);
        
        newTh.className = 'th';
        newTh.appendChild(t);
        newTr.appendChild(newTh);
    };
    
    for (let i = 1; i < matrix.length; i++) {
        let newTr =  document.createElement('tr');
        
        newTr.className = 'tr';     
        newTable.appendChild(newTr);
        
        for (let j = 0; j < matrix[0].length; j++) {
            let newTd = document.createElement('td');
            let t = document.createTextNode(matrix[i][j]);
            
            newTd.appendChild(t);
            newTd.className = 'td';
            newTr.appendChild(newTd);            
        };
    };

    document.querySelector('.section').appendChild(newTable);
    document.querySelector('.butt').removeAttribute('onclick');
}