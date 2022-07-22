
function VectorStander(x1, x2, y1, y2) {

    console.log(`The value in X1 = ${x1} and x2 = ${x2}`)
    console.log(`The value in Y1 = ${y1} and xY = ${y2}`)
    
    const rangeX = [x2 - x1]
    const rangeY = [y2 - y1]

    console.log(`The range X is ${rangeX} and range Y is ${rangeY}`)

    const PythagoreanTheorem = Math.sqrt(Math.pow(rangeX, 2) + Math.pow(rangeY, 2))

    rangeAB = PythagoreanTheorem

    console.log(rangeAB);
}

VectorStander(4, 12, 1, 5)
