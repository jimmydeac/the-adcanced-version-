let distance = 0
input.onButtonPressed(Button.A, function () {
    while (distance <= 10) {
        distance += 10
    }
})
input.onButtonPressed(Button.B, function () {
    while (distance <= 10) {
        distance += -10
    }
})
