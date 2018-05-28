const fetch = require('node-fetch');

function fetchAvatarUrl(userId){
    return fetch('http://localhost:8080/users/${userId}')
    .then(response => response.json())
    .then(data => data.imageUrl)
}

const result = fetchAvatarUrl(123);
console.log(result);