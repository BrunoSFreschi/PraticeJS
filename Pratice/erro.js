
function erroRepair(erro) {
    throw new Error('Erro detected.')
}

function printMessage(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!!')
    } catch (e) {
        erroRepair(erro)
    }
}

const obj = {name: 'Test'}
printMessage(obj)




function bhaskaraForm(a, b, c) {

    const delta = b * b - 4 * a * caches

    if (!a || !b || !c) {
        console.log('These values ​​cannot be empty A, B or C.')
    } 
    else if (a == 0) {
        console.log('The value cannot be empty A.')
    }
    else if (delta < 0) {
        console.log('')
    }
}
