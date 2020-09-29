// reduce method
// 1
// const scores = [20, 10, 37, 15, 55, 83, 90];

// const result = scores.reduce((acc, curr) => {

//     if(curr > 50) {
//         acc++;
//     }
//     return acc;
    
// }, 0);

// console.log(result);

// 2
// const scores = [
//     {player: "milan", score: 50},
//     {player: "miki", score: 30},
//     {player: "milan", score: 70},
//     {player: "milica", score: 60}
// ];

// const total = scores.reduce((acc, curr) => {

//     if (curr.player === "milan") {
//         acc += curr.score;
//     }
//     return acc;

// }, 0);

// console.log(total);

// mdn 
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15
