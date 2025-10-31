import authorization from './authorization';
const { getToken } = authorization;


const fetchData = (keywords, type) => {

    return getToken()

        .then(data => {
            const params = new URLSearchParams({
                q: keywords,
                type: type,
                limit: 20,
                offset: 0
            });

            let URL = `https://api.spotify.com/v1/search?${params.toString()}`;

            const options = {
                headers: {
                    Authorization: `Bearer ${data['access_token']}`
                }
            }

            return fetch(URL, options);
            
        })

        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })

        .catch(error => console.log(error));
        
}

export default { fetchData };




