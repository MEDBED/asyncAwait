const fetch = require('node-fetch');

async function fetchAvatarUrl(userId){
    // return fetch('http://localhost:8080/users/${userId}')
    // .then(response => response.json())
    // .then(data => data.imageUrl)
    const response = await fetch(`http://localhost:8080/users/${userId}`);
    console.log('---------------------');
    console.log(response);
    const data = await response.json();
    console.log('---------------------');
    console.log(data);
    console.log('---------------------');
    console.log(data.imageUrl);
    return data.imageUrl;
    
}

var result = fetchAvatarUrl(123);
console.log(result);