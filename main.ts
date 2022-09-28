let primer_numero = 0
let segundo_numero = 0
let tercer_numero = 0
input.onButtonPressed(Button.A, function () {
    if (primer_numero == 0 && primer_numero == 0) {
        basic.showIcon(IconNames.No)
    } else {
    	
    }
})
input.onGesture(Gesture.Shake, function () {
    primer_numero = randint(0, 9)
    segundo_numero = randint(0, 9)
    tercer_numero = randint(0, 9)
    if (primer_numero != segundo_numero && (segundo_numero != tercer_numero && primer_numero != tercer_numero)) {
        basic.showIcon(IconNames.Yes)
        basic.showNumber(primer_numero)
        basic.showNumber(segundo_numero)
        basic.showNumber(tercer_numero)
    } else {
        basic.showIcon(IconNames.No)
        primer_numero = 0
        segundo_numero = 0
        tercer_numero = 0
    }
})
