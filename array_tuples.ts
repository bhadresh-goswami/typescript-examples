var arr = [44,55,66,77,88,99];//array store same type of value
var arr1:[Number];

for (var index = 0; index < arr.length; index++) {
    const element = arr[index];

    console.log(element);
    
}

arr[3] = 10;
arr.push(100);
arr.pop();
console.log("___________");
for (var index = 0; index < arr.length; index++) {
    const element = arr[index];

    console.log(element);
    
}

var mydata = [10,"bhadresh",true];

console.log(mydata[0]);