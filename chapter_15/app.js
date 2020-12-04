// constructor function

function User(username, email) {
    this.username = username;
    this.email = email;
    this.login = function() {
        console.log(`${this.username} has logged!!!`);
    }
}

// class User {
//     constructor(username, email) {
//         // set up properties
//         this.username = username;
//         this.email = email;
//     }
// }

const userOne = new User('milan', 'milan.zivanov@gmail.com');
const userTwo = new User('ivan', 'ivan.zivanov@gmail.com');

console.log(userOne, userTwo);
userOne.login();
userTwo.login();

// The 'new' keyword
// 1 - it creates a new empty object {}
// 2 - it binds the value of 'this' to the empty object
// 3 - it calls the constructor function to 'build' the object 