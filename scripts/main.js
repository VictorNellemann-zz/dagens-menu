
let currentDay = new Date();
currentDay = currentDay.getDay();
console.dir(`Weekday: ${currentDay}`);

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


let timeOfDay = new Date();
timeOfDay = timeOfDay.getHours();
console.dir(`Time of day: ${timeOfDay}`);

let menuType;
if (timeOfDay < 16) {

} else {

};

console.dir(`Menutype: ${menuType}`);