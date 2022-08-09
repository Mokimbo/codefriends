const prompt = require('prompt-sync')();
let answer;
let groceryList = [];
do {
    answer = prompt('Would you like to "add", "show" or "quit"? ');
    if (answer === 'add'){
        do {
            answer = prompt('(type "back" to return) What would you like to add? ');
            if (answer !== 'back'){
                groceryList.push(answer)           
        } 
            else if(answer === 'back'){
                
            }
    } while(answer !== 'back')
    }
    else if(answer === "show"){
        console.log(groceryList);
    }
} while(answer !== 'quit');