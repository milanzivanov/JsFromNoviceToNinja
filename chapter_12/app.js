const getTodos = (resource, callback) => {

    const request = new XMLHttpRequest();
    
    request.addEventListener('readystatechange', () => {
        // console.log(request, request.readyState);
        if(request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.responseText);
            callback(undefined, data);
        } else if(request.readyState === 4) {
            callback('culd not fetch data', undefined);        
        }
    });
    
    request.open('GET', resource);
    request.send();

}

// error first convention
getTodos('./todos/milan.json', (err, data) => {
    console.log(data);

    getTodos('./todos/mica.json', (err, data) => {
        console.log(data);

        getTodos('./todos/milanko.json', (err, data) => {
            console.log(data);
        });
        
    });


});
