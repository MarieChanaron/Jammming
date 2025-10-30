import credentials from "./credentials";
const { CLIENT_ID, CLIENT_SECRET } = credentials;


const getToken = () => {

  const URL = 'https://accounts.spotify.com/api/token';

  const body = new URLSearchParams({
    grant_type: 'client_credentials',
    client_id: `${CLIENT_ID}`,
    client_secret: `${CLIENT_SECRET}`
  });

  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded'
  }

  fetch(URL, {
    method: 'POST',
    headers: headers,
    body: body.toString()
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .catch(error => {
      console.error('Error fetching token:', error);
  });

};

const promise = new Promise((success, error) => getToken());
promise.then(r=>console.log(r));

// const tokenPromise = new Promise((onSuccess, onError) => {
//   getToken()
//     .then(resp => onSuccess(resp))
//     .catch(message => onError(message))
// });
// tokenPromise.then

console.log(await getToken());

// Construct the request body
// const body = new URLSearchParams({
//   grant_type: 'client_credentials',
//   client_id: `${CLIENT_ID}`,
//   client_secret: `${CLIENT_SECRET}`
// });



/*const fetchTokenPromise = fetch(URL, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: body.toString()
});

fetchTokenPromise
    .then(response => {
        if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log('Access token response:', data);
    })
    .catch(error => {
        console.error('Error fetching token:', error);
    });
*/