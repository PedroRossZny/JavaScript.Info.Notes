function getMaxSubSum(array) {
    let maxSum = 0;

    for (let i = 0; i < array.length; i++) {
        let sum = 0;

        for (let c = i; c < array.length; c++) {
            sum += array[c];

            if (sum > maxSum) {
                maxSum = sum;
            }
            
        }

    }

    return maxSum;
}

alert(getMaxSubSum([-1, 2, 3, -9]))
alert(getMaxSubSum([2, -1, 2, 3, -9]))
alert(getMaxSubSum([-1, 2, 3, -9, 11]))
alert(getMaxSubSum([-2, -1, 1, 2]))
alert(getMaxSubSum([100, -9, 2, -3, 5]))
alert(getMaxSubSum([1, 2, 3]))
alert(getMaxSubSum([-1, -2, -3]))
