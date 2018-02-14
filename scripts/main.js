function setDayOfWeek() {
    let currentDay = new Date();
    currentDay = currentDay.getDay();
    switch (currentDay) {
        case 1:
            currentDay = 'mandag';        
            break;
        case 2:
            currentDay = 'tirsdag';        
            break;
        case 3:
            currentDay = 'onsdag';        
            break;
        case 4:
            currentDay = 'torsdag';        
            break;
        case 5:
            currentDay = 'fredag';        
            break;
        case 6:
            currentDay = 'lørdag';        
            break;
        case 0:
            currentDay = 'søndag';        
            break;
        default:
            currentDay = 'Fejl - ukendt dag'
            break;
    };
    return currentDay;
}

currentDay = setDayOfWeek();
console.dir(`Weekday: ${currentDay}`);

let timeOfDay = new Date();
timeOfDay = timeOfDay.getHours();
console.dir(`Time of day: ${timeOfDay}`);

// -----------------------------------------------------------------

class Menu {
    constructor(menuType, dagensRetter) {
        this.menuKort = menuType;
        this.dagensRetter = dagensRetter;
    }
}

let menuType = '';
let dagensRetter = {
    'Forret': 'Suppe', 
    'Hovedrret': 'Dessert',
    'Desser': 'Kaffe og is'
};

function createMenu(menuType, dagensRetter) {
    if (this.timeOfDay < 12) {
        let menuType = 'Frokost';
        const menuFrokost = new Menu(menuType, dagensRetter);
        console.dir(menuFrokost);
        console.dir('hej');
    } else {
        let menuType = 'Aften';
        const menuAften = new Menu(menuType, dagensRetter);
        console.dir(menuAften);
        console.dir('farvel');
    }
}

createMenu(menuType, dagensRetter);

//let dagensRetterIndex = 0, dagensRetterIndex < this.dagensRetter.length, dagensRetterIndex++