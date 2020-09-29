// find method
// 1
const scores = [20, 10, 37, 15, 55, 83, 90];


const firstHighScore = scores.find((score) => {
    return score > 50;
});

console.log(firstHighScore);
