const soldier = {
    soldierName: 'John',
    health: 10,
    weapon: {
        weaponName: 'Pistolet',
        numberСartridges: 35,
    },
    supplies: 3,

    shoot: function() {
        if(soldier.weapon.numberСartridges <= 0) {
            console.log('Обойма пуста. Перезарядитесь') 
        } else { 
        this.weapon.numberСartridges--
            console.log('Бах-бах!') 
        }
    },
    rechange: function() {
        if(soldier.supplies <= 0) {
            console.log('не осталось припасов') 
        } else {
            console.log('перезарядка...') 
            soldier.weapon.numberСartridges = 30
            this.supplies--
            
        }
        
    },
    to_hurt: function() {
        this.health--
        if(soldier.health <= 0) {
            console.log('Ты проиграл')
        }
    },
}
