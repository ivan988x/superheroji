/**
 * Get gitHub user by username
 * @param {*string} username
 */
for (let i = 0; i < 8; i++) {
    let i = Math.floor((Math.random()*731) + 1);
    let url = `http://gql.devtvornica.org/cors.php?url=https://superheroapi.com/api/3389585741075876/${i}`;
    promises.push(fetch(url).then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            return Promise.reject(response);
        }
    }));
}