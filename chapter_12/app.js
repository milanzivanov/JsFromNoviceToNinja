const getTodos = (callback) => {

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
    
    request.open('GET', './todos.json');
    request.send();

}

// error first convention
getTodos((err, data) => {
    console.log("callback fired");
    // console.log(err, data);
    if(err) {
        console.log(err);
    } else {
        console.log(data);
    }
});
