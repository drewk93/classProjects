let coffeeMaker = {
    coffeeHot: true,
    coffeeCups: 10,
    coffeeFull: true,
    coffeeHopper: 3,
    coffeeStock: 4,
    isCoffeeFull: (volume) => {
        if (coffeeMaker.coffeeCups === 10){
            coffeeMaker.coffeeFull = true; 
        } else {
        coffeeMaker.coffeeFull = false;        
        }
    },
    brewCoffee: () => {
        if (coffeeMaker.coffeeHopper >= 1){
            coffeeMaker.coffeeHopper--
            coffeeMaker.coffeeCups = 10;
            coffeeMaker.coffeeHot = true;
            return `Full pot of coffee. You have ${coffeeMaker.coffeeCups} cups!`;
        }
        if (coffeeMaker.coffeeHopper === 0){
            return `Coffee Hopper is empty. Fill Hopper first.`
        }
    },
    fillHopper: () => {
        if(coffeeMaker.coffeeHopper >= 0 && coffeeMaker.coffeeHopper < 4){
            while (coffeeMaker.coffeeHopper < 4 && coffeeMaker.coffeeStock > 0){
                let coffeeUsedFromStock = 0
                coffeeMaker.coffeeHopper++
                coffeeMaker.coffeeStock--
                coffeeUsedFromStock++
                return `Coffee Hopper is now full. Used ${coffeeUsedFromStock} pounds of coffee to fill Hopper. ${coffeeMaker.coffeeStock} pounds of coffee left in Coffee Stock`
            }
        if (coffeeMaker.coffeeHopper === 4){
            return `Coffee Hopper is already full`
        }
        }
    },
    drinkCoffee: (cups) => {
        coffeeMaker.coffeeCups -= cups
        coffeeMaker.isCoffeeFull()
        return(`You drank ${cups} cup(s) of coffee. Coffee Cups is now ${coffeeMaker.coffeeCups} cups.`)
    },
    coffeeIsCold: (hours) => {
        if (hours >= 3){
            coffeeMaker.coffeeHot = false;
        }
    }
}

console.log(coffeeMaker.fillHopper())
