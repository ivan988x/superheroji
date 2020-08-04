

const fetchSuperhero = () => {
    const promises = [];
    for (let i = 1; i <= 8; i++) {
        let i = Math.floor((Math.random()*731) + 1);
        
        const url = `http://gql.devtvornica.org/cors.php?url=https://superheroapi.com/api/3389585741075876/${i}`;
        promises.push(fetch(url).then((res) => res.json()));
    }
    Promise.all(promises).then((results) => {
        const superhero = results.map((result) => ({
            posterama: result.name
        }));
        displaySuperhero(superhero);
    });
};

const displaySuperhero = (superhero) => {
    console.log(superhero);
}
