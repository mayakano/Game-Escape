
var readlineSync = require('readline-sync');

var name = readlineSync.question('Welcome to the Escape Room, what is your name? ');

console.log(`Hello ${name}, you have entered a room. Your goal is to escape, good luck ${name}! \n`)

var isAlive = true;
var hasKey = false;

while(isAlive){
    var choices = ['Put hand in hole', 'Find the key', 'Open the door'];
    var index = readlineSync.keyInSelect(choices, "What would you like to do? ");

    if(choices[index] === 'Open the door'){
        if(hasKey){
            console.log('the door was opened')
            isAlive = false
            console.log('Great!  You won!')

        } else {
            console.log('Can you find the key ')
        }

    } else if (choices[index] === "Find the key") {
        console.log("You found a key! Now open the door!")
        hasKey = true
        
    } else if(choices[0] === 'Put hand in hole'){
        console.log("You're Dead Game Over")
        isAlive = false
    }
}

