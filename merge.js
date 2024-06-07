function mergeSort(arr) {
    if(arr.length == 1) return arr;  // base case

    let size = arr.length;
    let half = size/2;
    let left = arr.slice(0, half);
    let right = arr.slice(half, half + size);
    //console.log(left)
    //console.log(right)
    let new_left = mergeSort(left);
    let new_right = mergeSort(right);
    //console.log(new_left)
    //console.log(new_right)

    let merge_arr = []
    while(new_left.length > 0 && new_right.length > 0) {
        //console.log(new_left.length, new_right.length)
        //console.log(new_left[0],new_right[0])
        if(new_left[0] < new_right[0]) {
            merge_arr.push(new_left[0]);
            new_left.shift();
        }
        else {
            merge_arr.push(new_right[0]);
            new_right.shift();
        }
    }

    if(new_left.length > 0) {
        while(new_left.length > 0){
            merge_arr.push(new_left[0]);
            new_left.shift();
        }
    }
    else {
        while(new_right.length > 0){
            merge_arr.push(new_right[0]);
            new_right.shift();
        }
    }
    //console.log(merge_arr);
    return merge_arr;
}


ex_1 = [3, 2, 1, 13, 8, 5, 0, 1]
ex_2 = [105, 79, 100, 110]

console.log(mergeSort(ex_1))
console.log(mergeSort(ex_2))