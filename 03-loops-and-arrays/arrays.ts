let nums: number[] = [1, 2, 3, 4, 4, 566, 23423];
for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    console.log(element);
}
// Or
console.log("------------------");
for (const item of nums) {
    console.log(item);
}
//
console.log("------------------");
nums.push(999999);
for (const item of nums) {
    console.log(item);
}
