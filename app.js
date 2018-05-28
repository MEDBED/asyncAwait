const fetch = require('node-fetch');

function fetchAvatarUrl(userId){
    return fetch('http://localhost:8080/users/${userId}')
    .then((response) => {
        response.json();
    }).catch((err) => {
       console.log('Error !') 
    });
}

const result = fetchAvatarUrl(123);
console.log(result);