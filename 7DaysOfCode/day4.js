// #7DaysOfCode - Lógica JS 4/7: Loops e randomização

let randomNumber = Math.floor(Math.random() * 11)

const n = 4

function discoverNumber(n) {
    for (let i = 1; i <= 3; i++) {
        if (n == randomNumber) {
            console.log(`Nice the random number is ${randomNumber}.`)
            break
        }
        console.log(`You can try more ${ 4 - i} time`)
    }
    if (n != randomNumber) {
        console.log(`Ok the random number is ${randomNumber}, try again.`)       
    }
}


discoverNumber(n)