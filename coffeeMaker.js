let coffeeMaker = {
    coffeeHot: true,
    coffeeVolume: 10,
    coffeeFull: true,
    isCoffeeFull: function (volume){
        if (coffeeMaker.coffeeVolume === 10){
            coffeeMaker.coffeeFull = true;
            
        } else {
        coffeeFull = false;        
        }
        console.log(coffeeMaker.coffeeFull)
    },
    brewCoffee: function (){
        coffeeMaker.coffeeVolume = 10;
        return `Coffee Brewed to ${coffeeMaker.coffeeVolume} cups!`;
    },
    drinkCoffee: function(volume){
        coffeeMaker.coffeeVolume -= 1
        console.log(`You drank 1 cup of coffee. Coffee volume is now ${coffeeMaker.coffeeVolume} cups.`)
    }
}
console.log(coffeeMaker.coffeeFull)
console.log(coffeeMaker.drinkCoffee())
console.log(coffeeMaker.coffeeFull)
