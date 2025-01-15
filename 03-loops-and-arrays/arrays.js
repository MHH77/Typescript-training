var nums = [1, 2, 3, 4, 4, 566, 23423];
for (var i = 0; i < nums.length; i++) {
    var element = nums[i];
    console.log(element);
}
// Or
console.log("------------------");
for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
    var item = nums_1[_i];
    console.log(item);
}
//
console.log("------------------");
nums.push(999999);
for (var _a = 0, nums_2 = nums; _a < nums_2.length; _a++) {
    var item = nums_2[_a];
    console.log(item);
}
