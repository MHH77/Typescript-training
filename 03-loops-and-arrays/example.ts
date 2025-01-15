let ages: number[] = [534, 53, 45, 34, 534, 53, 56, 6, 6576, 5];
let total: number = 0;
for (let i = 0; i < ages.length; i++) {
    total += ages[i];
}
let avarage: number = total / ages.length;
console.log(`the avaerage is ${avarage}`);
