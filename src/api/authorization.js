import credentials from "./credentials";
const { CLIENT_ID, CLIENT_SECRET } = credentials;

const URL = 'https://accounts.spotify.com/api/token';

// Construct the request body
const body = new URLSearchParams({
  grant_type: 'client_credentials',
  client_id: `${CLIENT_ID}`,
  client_secret: `${CLIENT_SECRET}`
});

const fetchTokenPromise = fetch(URL, {
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
