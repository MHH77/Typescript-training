var ages = [534, 53, 45, 34, 534, 53, 56, 6, 6576, 5];
var total = 0;
for (var i = 0; i < ages.length; i++) {
    total += ages[i];
}
var avarage = total / ages.length;
console.log("the avaerage is ".concat(avarage));
