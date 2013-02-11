cache = {};
grid = [];

//Preenche matriz.
function loadGrid(size) {
	var cont = 0;
	for (var y = 0; y < size; y++) {
		grid[y] = [];
		for (var x = 0; x < size; x++) {
			grid[y][x] = { x : x, y : y, id : cont, ways : 0}
			cont++;
		}
	}
	var last = Math.pow(size,2) - 1;
	cache[last] = { x : last,  y : last, id : last, ways : 1  }; //Guarda o cache.
}
loadGrid(21);

function gridInLine() {
	var line = [];
	var size = grid.length;
	for (var i = 0; i < size; i++) {
		line = line.concat(grid[i]);
	}
	return line;
}

function way(node_list) {
	while (node_list.length) {
	
		var node = node_list.pop();
		wayCount(node);
	}
	return cache[0].ways;
}
way(gridInLine())
console.log(cache[0].ways);


function wayCount(node) {
	if (cache.hasOwnProperty(node.id)) {
		return cache[node.id].ways;
	} else {
		var moves = [];
		moves[0] = { x : 1, y : 0}; //Direita
		moves[1] = { x : 0, y : 1}; //Baixo		

		var cont = 0;
		for (var m = 0; m < 2; m++) {
			var mx = node.x + moves[m].x;
			var my = node.y + moves[m].y;		
			
			var elm = (typeof grid[my]  !== 'undefined') ? grid[my][mx] : null; 
			if (elm) {				
				if (cache.hasOwnProperty(elm.id)) {
					var c = cache[elm.id].ways;
					cont = cont + c;
				} else {
					cont += wayCount(elm);
				}
			}
		}
	}
	node.ways = cont;
	cache[node.id] = node;//Gravar no cache.
}
