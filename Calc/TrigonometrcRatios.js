//Incomplete

Trigonometry = {
    Sine(opposite, hypotenuse) {
        const sine = Math.sin(opposite / hypotenuse)

        console.log(`Sine value: ${sine}`)
    },

    Cosine(adjacent, hypotenuse) {
        const cosine = Math.cos(adjacent / hypotenuse)

        console.log(`Cosine value: ${cosine}`)
    },

    Tanget(opposite, adjacent) {
        const tanget = Math.tan(opposite / adjacent)

        console.log(`Tanget value: ${tanget}`)
    }
}

Trigonometry.Cosine(10, 5)