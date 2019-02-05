let GameManager = {
    setGameStart: function (playerClass) {
        this.resetPlayer(playerClass);
        this.setPreFight();

    },
    resetPlayer: function (playerClass) {
        switch (playerClass) {
            case "Warrior":
                player = new Player(playerClass, 200, 0, 200, 100, 50);
                break;
            case "Rogue":
                player = new Player(playerClass, 100, 0, 100, 150, 200);
                break;
            case "Mage":
                player = new Player(playerClass, 80, 0, 50, 200, 50);
                break;
            case "Hunter":
                player = new Player(playerClass, 200, 0, 50, 200, 100);
                break;
        }
        let getInterface = document.querySelector(".interface");
        getInterface.innerHTML = '<img src="static/img/' + playerClass.toLowerCase() + '.jpg" class="avatar">' +
            '<div>' +
            '<h3>' + playerClass + '</h3>' +
            '<p class="health-player">Health:' + player.health + '</p>' +
            '<p>Mana:' + player.mana + '</p>' +
            '<p>Strength:' + player.strength + '</p>' +
            '<p>Agility:' + player.agility + '</p>' +
            '<p>Speed:' + player.speed + '</p>' +
            '</div>';
    },
    setPreFight: function () {
        let getHeader = document.querySelector('.header');
        let getActions = document.querySelector('.actions');
        let getArena = document.querySelector('.arena');

        getHeader.innerHTML = "<p>Task: Find an enemy!</p>";
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="GameManager.setFight()">Search for enemy!</a>';
        getArena.style.visibility = "visible";
    },
    setFight: function () {
        let getHeader = document.querySelector('.header');
        let getActions = document.querySelector('.actions');
        let getEnemy = document.querySelector('.enemy');
        // create enemy
        let enemy01 = new Enemy('warrior', 100, 0, 50, 100, 100);
        let enemy02 = new Enemy('mage', 200, 0, 150, 80, 150);
        let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(2))
        switch (chooseRandomEnemy) {
            case 0:
                enemy = enemy01
                break;
            case 1:
                enemy = enemy02
                break;
        }
        getHeader.innerHTML = '<p>Task: Choose your move!</p>';
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="PlayerMoves.calcAttack()">Attack!</a>';
        getEnemy.innerHTML = '<img src="static/img/' + enemy.enemyType.toLowerCase() + '.jpg" class="avatar">' +
            '<div>' +
            '<h3>' + enemy.enemyType + '</h3>' +
            '<p class="health-enemy">Health:' + enemy.health + '</p>' +
            '<p>Mana:' + enemy.mana + '</p>' +
            '<p>Strength:' + enemy.strength + '</p>' +
            '<p>Agility:' + enemy.agility + '</p>' +
            '<p>Speed:' + enemy.speed + '</p>' +
            '</div>';

    }
}