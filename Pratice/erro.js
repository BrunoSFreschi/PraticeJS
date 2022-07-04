
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