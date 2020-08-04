class Hero {
    constructor(name, powerStats) {
        this.name = name;
        this.powersStats = new PowerStats(powerStats.combat, powerStats.durability, powerStats.inteligence, powerStats.power, powerStats.speed, powerStats.strength);
    }
}

class PowerStats {
    constructor(combat, durability, inteligence, power, speed, strength) {
        this.combat = combat;
        this.durability = durability;
        this.inteligence = inteligence;
        this.power = power;
        this.speed = speed;
        this.strength = strength;
    }
}


let promises = [];
let heroes = [];
let quarterFinale = [];
let semifinal = [];

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

    }
}).finally(() => {
    console.log('Heroes ready');
    console.log('Četvrtfinale');
    console.log(heroes);
    let abilities = new PowerStats();
    for (let i = 0; i < 8; i += 2) {
        let result1 = fight(heroes[i], heroes[i + 1], abilities);
        quarterFinale.push(result1 === 1 ? heroes[i] : heroes[i + 1])
    }

    console.log('Polufinale');
    console.log(quarterFinale);
    for (let i = 0; i < 4; i += 2) {
        let result2 = fight(quarterFinale[i], quarterFinale[i + 1], abilities);
        semifinal.push(result2 === 1 ? quarterFinale[i] : quarterFinale[i + 1])
    }

    console.log('Finale');
    console.log(semifinal);
    for (let i = 0; i < 2; i += 2) {
        let result3 = fight(semifinal[i], semifinal[i + 1], abilities);
        let winer = result3 === 1 ? semifinal[i] : semifinal[i + 1];
        console.log('winer');
        console.log(winer.name);
    }
});


function fight(firstHero, secondHero, abilities) {
    let heroOne = 0;
    let heroTwo = 0;
    let keys = Object.keys(abilities);

    while ((heroOne < 2 && heroTwo < 2) || heroOne === heroTwo) {
        let { firstAbility, secondAbility } = this.randomAbility(keys);
        let result = this.round(firstHero, secondHero, firstAbility, secondAbility);
        if (result === 1) {
            heroOne++;
        } else if (result === 2) {
            heroTwo++;
        } else {
            heroOne++;
            heroTwo++;
        }
    }

    console.log(`%c${firstHero.name} %c- %c${secondHero.name} ${heroOne}:${heroTwo}`, 'color:' + (heroOne > heroTwo ? 'green' : 'red'), 'color:black', 'color:' + (heroOne < heroTwo ? 'green' : 'red'));

    return heroOne > heroTwo ? 1 : 2;
}

function randomAbility(keys) {
    let secondAbility;
    let firstAbility = keys[ keys.length * Math.random() << 0];
    secondAbility = keys[ keys.length * Math.random() << 0];
    while (firstAbility === secondAbility) {
        secondAbility = keys[ keys.length * Math.random() << 0];
    }

    return { firstAbility, secondAbility };
}


function round(firstHero, secondHero, firstAbility, secondAbility) {
    const heroOne = firstHero.powersStats[firstAbility] + firstHero.powersStats[secondAbility];
    const heroTwo = secondHero.powersStats[firstAbility] + secondHero.powersStats[secondAbility];
    return heroOne === heroTwo ?  0 : (heroOne > heroTwo ? 1 : 2);
}
