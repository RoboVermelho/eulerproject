function greatestProductOfAdjacent(matrix,length) {
	var move_matrix = makeMoveMatrix(length);
	var mw = matrix.length;
	var mh = matrix[0].length;
	var elm;
	length = length - 1;
	var max_product = 0;
	//Percorre matrix.

	for (var i = 0; i < mh; i++) {
		for (var j = 0; j < mw; j++) {
			elm = matrix[i][j];
			for (var k = 0, l = move_matrix.length; k < l; k++) {
				var move = move_matrix[k];
				if (canMove(j,i,move,mw,mh)) {
					var mov_product = moveProduct(matrix,j,i,move,length);
					if (mov_product > max_product) { max_product = mov_product; }
				}
			}			
		}
	}
	return max_product;
}

function moveProduct(matrix,x,y,move,length){
	var elms = [];
	var top, left;
	if (move[0] === 0) {
		top = 0;
	} else if (move[0] > 0) {
		top = 1;
	} else {
		top = -1;
	}
	
	if (move[1] === 0) {
		left = 0;
	} else if (move[1] > 0) {
		left = 1;
	} else {
		left = -1;
	}	
	
	for (var i = 0; i < length; i++) {
		var n_x = x + i * left;
		var n_y = y + i * top;
		elms.push(matrix[n_y][n_x]);
	}
	return productOfArray(elms);
	
}
var m = [];
m[0] = [1,2,3];
m[1] = [4,5,6];
m[2] = [7,8,9];
//console.log(moveProduct(m,1,0,[1,0],3));


function productOfArray(arr) {
	var value = arr[0];
	for (var i = 1, max = arr.length; i < max; i++) {
		value *= arr[i];
	}
	return value;
}
//console.log(productOfArray([1,2,3,5]));

function canMove(x,y,move,width,height) {
	var result_y = y + move[0];
	var result_x = x + move[1];
	if ( (result_y <= height && result_y >= 0) &&
		 (result_x <= width && result_x >= 0 )   ) {
		return true;
	} else {
		return false;
	}
}

//console.log(canMove(3,3,[-3,0],50,50));
//console.log(canMove(3,3,[-3,90],50,50));

function makeMoveMatrix(size) {
	
	var matrix = [];
				//TOP,LEFT
	matrix[0] = [-size,0];
	matrix[1] = [-size,size];
	matrix[2] = [0,size];
	matrix[3] = [size,size];
	matrix[4] = [size,0];
	matrix[5] = [size,-size];
	matrix[6] = [0,-size];
	matrix[7] = [-size,-size];
	return matrix;
}
//console.log(makeMoveMatrix(3));

//Você tem uma matriz de movimentação
/**
	oito movimentos, cada um de acordo com o length.
	[-L][0]
	[-L][L]
	[-TOP][LEFT]
	[-TOP][LEFT]
	[-TOP][LEFT]
	[-TOP][LEFT]
	[-TOP][LEFT]
	[-TOP][LEFT]
	
*/


var seq = "08 02 22 97 38 15 00 40 00 75 04 05 07 78 52 12 50 77 91 08 49 49 99 40 17 81 18 57 60 87 17 40 98 43 69 48 04 56 62 00 81 49 31 73 55 79 14 29 93 71 40 67 53 88 30 03 49 13 36 65 52 70 95 23 04 60 11 42 69 24 68 56 01 32 56 71 37 02 36 91 22 31 16 71 51 67 63 89 41 92 36 54 22 40 40 28 66 33 13 80 24 47 32 60 99 03 45 02 44 75 33 53 78 36 84 20 35 17 12 50 32 98 81 28 64 23 67 10 26 38 40 67 59 54 70 66 18 38 64 70 67 26 20 68 02 62 12 20 95 63 94 39 63 08 40 91 66 49 94 21 24 55 58 05 66 73 99 26 97 17 78 78 96 83 14 88 34 89 63 72 21 36 23 09 75 00 76 44 20 45 35 14 00 61 33 97 34 31 33 95 78 17 53 28 22 75 31 67 15 94 03 80 04 62 16 14 09 53 56 92 16 39 05 42 96 35 31 47 55 58 88 24 00 17 54 24 36 29 85 57 86 56 00 48 35 71 89 07 05 44 44 37 44 60 21 58 51 54 17 58 19 80 81 68 05 94 47 69 28 73 92 13 86 52 17 77 04 89 55 40 04 52 08 83 97 35 99 16 07 97 57 32 16 26 26 79 33 27 98 66 88 36 68 87 57 62 20 72 03 46 33 67 46 55 12 32 63 93 53 69 04 42 16 73 38 25 39 11 24 94 72 18 08 46 29 32 40 62 76 36 20 69 36 41 72 30 23 88 34 62 99 69 82 67 59 85 74 04 36 16 20 73 35 29 78 31 90 01 74 31 49 71 48 86 81 16 23 57 05 54 01 70 54 71 83 51 54 69 16 92 33 48 61 43 52 01 89 19 67 48";

var arr = seq.split(" ");

var n  = [];
