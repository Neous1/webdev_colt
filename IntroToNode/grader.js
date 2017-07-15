
function average (arr){
        var sum  = 0;
    for (var i = 0; i< arr.length; i++){

	//	console.log("initial sum is", sum);
        sum += arr[i];
// 		var temp = sum;
	//	console.log("sum is now", sum);

    }
        return Math.round(sum/arr.length);
}


var scores = [90, 98, 89, 100, 100, 86, 94];
console.log("Average for class 1 is: ", average(scores));

var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49]
console.log("Average for class 2 is: ",average(scores2));