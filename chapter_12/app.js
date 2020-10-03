// async await
// nonblocking

const getTodos = async () => {

    const response = await fetch('./todos/milanko.json');

    if(response.status !== 200) {
        throw new Error('cannot fetch the data');
    }

    const data = await response.json();
    return data;

};

getTodos()
    .then(data => console.log('resolved', data))
    .catch(err => console.log('rejected:', err.message));

// my example from https://jsonplaceholder.typicode.com/
// fetch('https://jsonplaceholder.typicode.com/todos/2')
//     .then(response => response.json())
//     .then((data) => {
//         console.log(data);
//     });