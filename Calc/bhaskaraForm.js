

function bhaskaraForm(a, b, c) {
    const delta = b * b - 4 * a * c

    if (!a || !b || !c) {
        console.log('These values ​​cannot be empty A, B or C.')
    }
    else if (a == 0) {
        console.log('The value cannot be empty A.')
    }
    else if (delta < 0) {
        console.log('')
    }
    else{
        const x1 = (-b + Math.sqrt(delta)) / (2 * a)
        const x2 = (-b - Math.sqrt(delta)) / (2 * a)

        console.log(x1)
        console.log(x2)
    }
}

bhaskaraForm(5, 50, 5)