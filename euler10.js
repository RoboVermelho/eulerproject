function sumOfPrimes(x) {
	var sqrt = parseInt(Math.sqrt(x),"10");
	var primes = primesUnder(sqrt);
	
	for (var i = 3; i < x; i+= 2) {
		if (!isDivisibleByAnyone(i,primes)) {
			primes.push(i);
		}
	}
	var sum_of_primes = sumOfArray(primes);
	return sum_of_primes;
}
console.log(sumOfPrimes(2000000));


function isDivisibleByAnyone(x,list) {
	for (var i = 0, max = list.length; i < max; i++) {
		if (x % list[i] === 0) {   return true; }
	}
	return false;
}
//console.log(isDivisibleByAnyone(10,[2,5]));
//console.log(isDivisibleByAnyone(7,[2,5]));
//console.log(isDivisibleByAnyone(9,[2,3,5,7]));

function primesUnder(x) {
	var primes = [];
	for (var i = 1; i < x; i++) {
		if (isPrime(i) === true) {
			primes.push(i);
		}
	}
	return primes;
}
//console.log(primesUnder(10));
//console.log(primesUnder(11));
//console.log(primesUnder(12));


function isPrime(x) {
	if (x === 1) { return false; }
	if (x === 2) { return true; }
	if (x > 2) {
		for (var i = 2; i < x; i++) {
			if (x % i === 0) { return false; }
		}
		return true;
	} else {
		return false;
	}
}
//console.log(isPrime(2));
//console.log(isPrime(3));
//console.log(isPrime(1));
//console.log(isPrime(10));
//console.log(isPrime(11));

function sumOfArray(arr) {
	var value = arr[0];
	for (var i = 1, max = arr.length; i < max; i++) {
		value += arr[i];
	}
	return value;
}
//console.log(sumOfArray([1,2,3]));