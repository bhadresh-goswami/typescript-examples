function add(a, b) {
    if (a > 0 && b > 0)
        return a + b;
    else {
        console.log("any of two values are 0!");
        return 0;
    }
}
console.log(add(44, 55));
console.log(add(44, 0));
console.log(add(44, -9));
console.log(add(44, 33));
console.log(add(44, 11));
