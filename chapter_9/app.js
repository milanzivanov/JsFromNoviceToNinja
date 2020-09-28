// 1
const scores = [10, 30, 15, 55, 40, 5];

const filterdScore = scores.filter( (score) => {
    return score > 30;
});

console.log(filterdScore);

// this method is nondestructive
// console.log(scores);

// 2
const users = [
    {name: 'milan', premium: true},
    {name: 'ivan', premium: true},
    {name: 'vanja', premium: false}
];

const premiumUser = users.filter( user => user.premium );
console.log(premiumUser);