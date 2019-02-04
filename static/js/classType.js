classType = [
    {
        name: 'Warrior',
        description: 'Wariors have higher health and strength, however their strength also makes them slower and clumsier.',
        image: 'warrior'
    },
    {
        name: 'Rogue',
        description: 'Rogues are fast and have stamina and speed which makes up for their lack in strength and health.',
        image: 'rogue'
    },
    {
        name: 'Mage',
        description: 'Mages are glass canons which puts all their effort into spells. This means they slack on everything else.',
        image: 'mage'
    },
    {
        name: 'Hunter',
        description: 'Hunters are well rounded fighters that focus on evening out their skills. No strengths or weaknesses.',
        image: 'hunter'
    },
]


let classInformation = []
classType.forEach(function (item) {
    classInformation.push(`<a href="#" onclick="GameManager.setGameStart('${item.name}')">
    <img src="static/img/${item.image}.jpg" alt="${item.image}">
    <div>
    <h3>${item.name}</h3>
    <p>${item.description}</p>
    </div>
    </a>`)
})

var interface = document.querySelector('.interface').innerHTML = classInformation;

