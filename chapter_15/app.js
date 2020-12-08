// constructor function 124

function User(username, email) {
    this.username = username;
    this.email = email;
}

User.prototype.login = function() {
    console.log(`${this.username} has logged in!!!`);
    // for method chaninng purpuse
    return this;
}

User.prototype.logout = function() {
    console.log(`${this.username} has logged out!!!`);
    // for method chaninng purpuse
    return this;
}

function Admin(username, email, title) {
    User.call(this, username, email, title);
    this.title = title;
}

Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function() {
    console.log("delete user");
}

const userOne = new User('milan', 'milan.zivanov@gmail.com');
const userTwo = new User('ivan', 'ivan.zivanov@gmail.com');
const userThree = new Admin("milojko", "milojko@ms.com", "milojo king fu ninja");

console.log(userOne, userTwo, userThree);
// method chaninng purpuse
userOne.login().logout();
userTwo.logout();

// Prototypes
// Every object in js has a prototype
// Prototypes contain all the methods for that object

// The 'new' keyword
// 1 - it creates a new empty object {}
// 2 - it binds the value of 'this' to the empty object
// 3 - it calls the constructor function to 'build' the object 