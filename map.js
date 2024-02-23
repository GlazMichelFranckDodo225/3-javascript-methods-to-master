// For
const someArr = [1, 2, 3, 4, 5];
const doubleArr = [];

for(let i = 0; i < someArr.length; i++) {
    doubleArr.push(someArr[i] * 2);
}

console.log(someArr);
console.log(doubleArr);

// Map
const mapArr = [1, 2, 3, 4, 5];
const doubleMapArr = mapArr.map(e => e * 2);

console.log(mapArr);
console.log(doubleMapArr);