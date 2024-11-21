/**
 * basic.forever(function () {
 * 
 * if (input.lightLevel() >= 50) {
 * 
 * basic.showIcon(IconNames.Heart)
 * 
 * } else {
 * 
 * basic.showIcon(IconNames.No)
 * 
 * }
 * 
 * })
 */
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        basic.showLeds(`
            . # # # .
            # . . . #
            # . . . #
            # . . . #
            . # # # .
            `)
    } else if (input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.Triangle)
    } else if (input.buttonIsPressed(Button.B)) {
        basic.showIcon(IconNames.Square)
    }
})
