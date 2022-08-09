const prompt = require('prompt-sync')();






let player1 = ' '
let player2 = ' '
let start = Math.random();
let restart = 'y'
let game = 'continue'
let answer = ' '
// create board
let board = [
    [' ',' ',' '],
    [' ',' ',' '],
    [' ',' ',' ']
    ]
console.log('      0    1    2\n 0',board[0],'\n 1',board[1],'\n 2',board[2],);
do{
    game = 'continue'
    if (restart === 'y'){
// naming players
    player1 = prompt(`Enter 1st player's name here `)
    player2 = prompt(`Enter 2nd player's name here `)
    console.log(`${player1} (X) vs ${player2} (O)`)

// pick who goes first
    start = Math.random()
    if (start < 0.5) {
    console.log(`${player1} goes first`);
    } 
    else {
    console.log(`${player2} goes first`);
    }
    restart = 'n'
    board = [
        [' ',' ',' '],
        [' ',' ',' '],
        [' ',' ',' ']
        ]
   console.log(`Game Start!`)
    }
    
// Check for win condition & possible restart?
        if (board[0][0] === 'O' && board[0][1] === 'O' && board[0][2] === 'O'){
        console.log(`${player2} wins!\n`)
        answer = prompt(`Would you like to play again?(y/n) `)
            if (answer = 'y'){
                restart = 'y' 
            }
            else {
                restart = 'n'
                game = 'end'
            }
        }
        else {
// Player1's turns
        while (start < 0.5){
            console.log(`${player1}'s turn\n`)
            let a = prompt(`What column you like to place you're X?(ex:the top would be 0) `)
            let b = prompt(`What row you like to place you're X?(ex: the left would be 0) `)
            if (board[a][b] !== 'X'){
                if(board[a][b] !== 'O'){
                    board[a][b] = 'X'
                    console.log('      0    1    2\n 0',board[0],'\n 1',board[1],'\n 2',board[2],);
// Continue to next players turn                
                    start = start+1
                    
                }
                else {
                    console.log(`There is a mark already there. Try again.`)
                }
            }
            else {
            console.log(`There is a mark already there. Try again.`)
        }
        }
        }
// Check for win condition
        if (board[0][0] === 'X' && board[0][1] === 'X' && board[0][2] === 'X'){
        console.log(`${player1} wins!`)
        answer = prompt(`Would you like to play again?(y/n) `)
            if (answer = 'y'){
                restart = 'y'
            }
            else {
                restart = 'n'
                game = 'end'
            }
        }
        else{
// Player2's turns
        while (start > 0.5){
            console.log(`${player2}'s turn\n`)
            let a = prompt(`What column you like to place you're O?(ex: the top would be 0) `)
            let b = prompt(`What row you like to place you're O?(ex: the left would be 0) `)
            if (board[a][b] !== 'X'){
                if (board[a][b] !== 'O'){
                    board[a][b] = 'O'
                    console.log('      0    1    2\n 0',board[0],'\n 1',board[1],'\n 2',board[2],);
// Continue to next players turn                
                    start = start-1
                        
                }
                else {
                    console.log(`There is a mark already there. Try again.`)
                }
            }
            else {
                console.log(`There is a mark already there. Try again.`)
            }
        }
        }
}while (game === 'continue')
