/**
215 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
What is the sum of the digits of the number 2^1000?
2^1000 = 2^10 100vzs
*/
function euler16() {
	var base = numToArray(1024);
	var vector_sum = vectorSum(base,100);
	var arr = numToArray(vector_sum);
	
	return sumYourself(arr);
}
//console.log(euler16());

function numToArray(num) {
	var novo =  num.toString().split("");
	for (var i = 0, size = novo.length; i < size; i++) {
		novo[i] = parseInt(novo[i],"10");
	}
	return novo;
}
//console.log(numToArray(1024));

function vectorSum(arr,times) {
	var result = [];
	var next = 0;
	arr = arr.reverse();
	for (var i = 0, size = arr.length; i < size; i++) {
		var vlr = times * arr[i] + next;
		//console.log(vlr);
		if (vlr.toString().length > 1) {
			result[i] = parseInt(vlr.toString().slice(-1),"10");
			next = parseInt(vlr.toString().slice(0,-1),"10");
		} else {
			next = 0;
			result[i] = parseInt(vlr.toString(),"10");
		}
	}
	result = result.reverse();
	if (next > 0) {
		next  = numToArray(next);
		result = result.concat(next);
	}
	result = parseInt(result.join(""),"10");
	return result;
}
//console.log(vectorSum([3,3],5));
console.log(vectorSum([1,0,2,4],10));
//console.log(vectorSum([3,1],2));


function sumYourself(arr) {
	var ct = 0;
	for (var i = 0, size = arr.length; i < size; i++) {
		ct += arr[i];
	}
	return ct;
}
//console.log(sumYourself([1,2,3,4,5]));