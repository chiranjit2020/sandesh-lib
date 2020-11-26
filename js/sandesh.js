'use strict';

function Sandesh(method, url, body = null) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url); // OPENING REQUEST

        xhr.responseType = 'json';
        xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response);
            } else {
                resolve(xhr.response);
            }
        };

        xhr.onerror = () => {
            reject(xhr.response);
        };

        xhr.send(JSON.stringify(body)); // SENDING REQUEST TO SERVER 
    });
}

//CALL SANDESH FUNCTION
const url = 'https://jsonplaceholder.typicode.com/users';
const body = {
    name: "ck",
    age: 30
};

Sandesh("GET", url);
Sandesh("POST", url, body).then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
});
