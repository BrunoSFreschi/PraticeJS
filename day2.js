// #7DaysOfCode - Lógica JS 2/7: Variáveis

let name = prompt('How your name: ')
let age = prompt('How old are you: ')
let programLanguage = prompt('Whats tecnlogi you study: ')

console.log(`Nice to meet you ${name}, really your age is ${age}. Awsome.`);

let answer = prompt(`Are you wanna like study ${programLanguage}`)

if (answer == 'yes' || answer == 's') {
    console.log('Awsome! This is great you will be very successful.')
} else {
    console.log('Ahh... Ok try learn another language.');
}