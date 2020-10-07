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

class Admin extends User {

    constructor(username, email, title) {
        super(username, email);
        this.title = title;
    }

    deleteUser(user) {
        // console.log("test", user);
        users = users.filter(u => u.username !== user.username);
        // users = users.filter(u => console.log("this", u));
    }
}

const userOne = new User('milan', 'milan.zivanov@gmail.com');
const userTwo = new User('ivan', 'ivan.zivanov@gmail.com');
const userThree = new Admin('ivanka', 'ivan.ka@gmail.com', 'black-belt-ninja');

console.log(userThree);


// The 'new' keyword
// 1 - it creates a new empty object {}
// 2 - it binds the value of 'this' to the empty object
// 3 - it calls the constructor function to 'build' the object 