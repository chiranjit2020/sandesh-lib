# SANDESH LIBRARY
A small **Vanilla JavaScript Library** for fetching data using **XMLHttpRequest** and **Promise**. 
It is very light weight and easy to use
***

#### Just download and attach ```sandesh.js``` file in your ```index.html``` file
```javascript
<script src="./sandesh.js"></script>
```
#### or copy this code in your JS file

```javascript
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
```
#### Call the Sandesh Function

```javascript
    //Example: Call the function
    const url = 'https://jsonplaceholder.typicode.com/users';
    const body = {
        name: "John Doe",
        age: 30
    };

    //For GET Method
    //Sandesh(method,url)
    Sandesh("GET", url);
    
    //For Post Method
    //Sandesh(method,url,body)
    Sandesh("POST", url, body)
        .then(res => {
            //your code...
            console.log(res);
        }).catch(err => {
            //your code...
            console.log(err);
        });
```