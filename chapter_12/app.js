// async await
// nonblocking

const getTodos = async () => {

    const response = await fetch('./todos/milanko.json');
    const data = await response.json();
    return data;

};

getTodos()
    .then(data => console.log('resolved', data));

// my example from https://jsonplaceholder.typicode.com/
// fetch('https://jsonplaceholder.typicode.com/todos/2')
//     .then(response => response.json())
//     .then((data) => {
//         console.log(data);
//     });