let N1 = 0
let N2 = 0
let N3 = 0
let mayor = 0
let medio = 0
let menor = 0
input.onButtonPressed(Button.A, function () {
    if (N1 == 0 && N2 == 0) {
        basic.showIcon(IconNames.No)
    }
    if (N1 > N2 && N1 > N3) {
        mayor = N1
        if (N2 > N3) {
            medio = N2
            menor = N3
        } else {
            medio = N3
            menor = N2
        }
        basic.showNumber(mayor)
        basic.showNumber(medio)
        basic.showNumber(menor)
    }
    if (N2 > N1 && N2 > N3) {
        mayor = N2
        if (N1 > N3) {
            medio = N1
            menor = N3
        } else {
            medio = N3
            menor = N1
        }
        basic.showNumber(mayor)
        basic.showNumber(medio)
        basic.showNumber(menor)
    }
    if (N3 > N1 && N3 > N2) {
        mayor = N3
        if (N1 > N2) {
            medio = N1
            menor = N2
        } else {
            medio = N2
            menor = N1
        }
        basic.showNumber(mayor)
        basic.showNumber(medio)
        basic.showNumber(menor)
    }
})
input.onGesture(Gesture.Shake, function () {
    N1 = randint(0, 9)
    N2 = randint(0, 9)
    N3 = randint(0, 9)
    if (N1 != N2 && (N2 != N3 && N1 != N3)) {
        basic.showIcon(IconNames.Yes)
        basic.showNumber(N1)
        basic.showNumber(N2)
        basic.showNumber(N3)
    } else {
        basic.showIcon(IconNames.No)
        N1 = 0
        N2 = 0
        N3 = 0
    }
})
