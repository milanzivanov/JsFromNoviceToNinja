const getTodos = (resource) => {

    return new Promise((resolve, reject) => {
        
        const request = new XMLHttpRequest();
        
        request.addEventListener('readystatechange', () => {
            // console.log(request, request.readyState);
            if(request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText);
                resolve(data);
            } else if(request.readyState === 4) {
                reject('error getting resource');
            }
        });
        
        request.open('GET', resource);
        request.send();

    });

};

getTodos('./todos/milan.json').then((data) => {
    console.log('Promise resolved:', data);
}).catch(err => {
    console.log(err);
})




// promise example
// const getSomething = () => {

//     return new Promise((resolve, reject) => {
//         // fetch something
//         // resolve('resolve some data');
//         reject('some error');
//     });

// }

// one way
// getSomething().then((data) => {
//     console.log(data);
// }, (err) => {
//     console.log(err);
// });

// shorter way
// getSomething().then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// });

