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

  const options = {
    method: 'POST',
    headers: headers,
    body: body.toString()
  }

  return fetch(URL, options)
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

export default { getToken };


