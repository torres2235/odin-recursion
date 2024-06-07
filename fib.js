function fibs(n) {
    let arr = []

    for(i=0;i<n;i++) {
        if(i<2) {
            arr.push(i);
        }
        else {
            arr.push(arr[arr.length-1]+arr[arr.length-2])
        }
    }

    return arr;
}


function fibsRec(n) {
    if(n==1) return [0];  // base case 1
    if(n==2) return [0, 1];  // base case 2

    let arr = fibsRec(n-1);  // get the previous array
    arr.push(arr[arr.length-1]+arr[arr.length-2]);  // get next value by adding the last two values and append to array

    return arr
}


console.log(fibs(8))  // iterative function check
console.log(fibsRec(8))  // recursive fucntion check