function bubbleSort(nums) {
    let sorted = false;

    while (!sorted) {
        sorted = true;
        for (let i = 0; i < nums.length - 1; i++) {
            if (nums[i] > nums[i+1]) {
                [nums[i], nums[i+1]] = [nums[i+1], nums[i]]; //destructured assigment
                sorted = false;
            }
        }
    }
    return nums;
}

bubbleSort([3, 1, 5, 8, 7, 6, 2, 0, 19, 16, 25]);