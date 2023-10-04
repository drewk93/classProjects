let coffeeMaker = {
    coffeeHot: true,
    coffeeVolume: 8,
    coffeeFull: false,
    isCoffeeFull: function (volume){
        if (coffeeMaker.coffeeVolume === 10){
            coffeeMaker.coffeeFull = true;
            console.log(coffeeMaker.coffeeFull)
        } else {
        coffeeFull = false;
        console.log(coffeeMaker.coffeeFull)
        }
    },
    brewCoffee: function (){
        coffeeMaker.coffeeVolume = 10;
        return `Coffee Brewed to ${coffeeMaker.coffeeVolume} cups!`;
    }
}

console.log(coffeeMaker.isCoffeeFull())
console.log(coffeeMaker.brewCoffee(),coffeeMaker.isCoffeeFull())
