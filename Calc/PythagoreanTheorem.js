
function PythagoreanTheorem(opposite, adjacent) {
    
    const hypotenuse = Math.sqrt((Math.pow(adjacent, 2) + Math.pow(opposite, 2)))

    console.log(hypotenuse)
}

PythagoreanTheorem(6, 8)


//Test

function VectorStander(x1, x2, y1, y2) {
    const rangeX = [x2 - x1]
    const rangeY = [y2 - y1]
    
    const resAB = Math.sqrt(Math.pow(rangeX, 2) + Math.pow(rangeY, 2))
    
    console.log(resAB);
}


VectorStander(4, 12, 1, 5)
