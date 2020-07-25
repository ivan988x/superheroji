import { promises as fetchData } from 'scripts/utils/api'

Promise.all(promises).then(function (data) {
    {
        data.forEach(hero => {
            let heroObject = new Hero(hero.name, hero.powerstats);
            heroes.push(heroObject);
            document.getElementById("heroes").innerHTML += `
                <li class="card">
                    <h2 class="card-title">${heroObject.name}</h2>
                </li>
            `;
        });

    }})
