function selectionSort(nums) {
    
    for (let j = 0; j < nums.length - 1; j++) {
        let min = nums[j];
        let index = j;
        for (let i = j+1; i < nums.length; i++) {
            if (nums[i] < min) {
                min = nums[i];
                index = i;
            }
        }
        [nums[j], nums[index]] = [nums[index], nums[j]];
    }
    return nums;
}

selectionSort([4, 1, 2, 3, 12, 2, 67, 0]);

