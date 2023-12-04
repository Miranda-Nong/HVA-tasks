function secondMax(arr) {
    let max=arr[0], secondMax= -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            secondMax = max;
            max = arr[i];
        }
        else if (arr[i] > secondMax && arr[i] < max) {
            secondMax = arr[i];
        }
    }
    return secondMax;
}
console.log(secondMax([1, 2, 3, 4, 5]));

