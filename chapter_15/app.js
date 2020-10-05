class User {
    constructor(username, email) {
        // set up properties
        this.username = username;
        this.email = email;
        this.score = 0;
    }
    login() {
        console.log(`${this.username} just logged in`);
        return this;
    }
    logout() {
        console.log(`${this.username} just logout`);
        return this;
    }
    incScore() {
        this.score++; // or this.score += 1;
        console.log(`${this.username} has a score of ${this.score}`);
        return this;
    }
}

const userOne = new User('milan', 'milan.zivanov@gmail.com');
const userTwo = new User('ivan', 'ivan.zivanov@gmail.com');

console.log(userOne, userTwo);
userOne.login();
userOne.logout();
userOne.incScore().incScore().incScore().logout();

// The 'new' keyword
// 1 - it creates a new empty object {}
// 2 - it binds the value of 'this' to the empty object
// 3 - it calls the constructor function to 'build' the object 