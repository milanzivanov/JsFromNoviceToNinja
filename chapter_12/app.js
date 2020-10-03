// fetch api
fetch('./todos/milan.json').then((response) => {
    console.log('Resolved', response);
    return response.json();
}).then(data => {
    console.log(data);
}).catch((err) => {
    console.log('Rejected', err);
});

// my example from https://jsonplaceholder.typicode.com/
fetch('https://jsonplaceholder.typicode.com/todos/2')
    .then(response => response.json())
    .then((data) => {
        console.log(data);
    });