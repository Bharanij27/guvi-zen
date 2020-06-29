var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

console.log(numsArr.join(''));

console.log(numsArr.join(','));

let reverseArr = [...numsArr];
console.log(reverseArr.reverse().join(' '));

let evenArr = numsArr.map((value, ind) =>{
    if(ind%2==0) return value = "even"
    else return value
})
console.log(evenArr)

let oddArr = numsArr.map((value, ind) =>{
    if(ind%2!=0) return value = "odd"
    else return value
})
console.log(oddArr);

let sum = numsArr.reduce((acc,value) => acc+=value);
console.log("Sum of all number",sum)

let evenSum = numsArr.reduce((acc,value) =>{
    if(value%2==0) acc+=value;
    return acc
},0);
console.log("Sum of all number",evenSum)

let alterAdd = numsArr.reduce((acc,value) =>{
    if(value%2==0) return acc+=value;
    return acc-= value
},100);
console.log("Sum of even and subtract odd number",alterAdd);

var intArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
intArr.forEach(each => console.log(each))

let str_all = ''; 
intArr.forEach(each => str_all+=each.join(''))
console.log(str_all)

let convertArray = function(param){
    return param.map((data, index) =>{
        if(Array.isArray(data)) data = convertArray(data)
        else if(index %2 == 0) data = "even"
        return data
    });
}

console.log(convertArray(intArr))

let newArr = [...intArr]
newArr.reverse().map(each => each.reverse());
str_all = ''; 
newArr.forEach(each => str_all+=each.join(' '))
console.log(str_all)

let sumOdd = 0, sumEven = 0;
let sumNum = function(param){
    param.forEach((data, index) =>{
        if(Array.isArray(data)) data = sumNum(data)
        else if(index %2 == 0) sumEven += data
        else sumOdd +=data;
    });
}

sumNum(intArr);
console.log("Odd sum is", sumOdd, "Even sum is", sumEven)
