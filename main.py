"""

basic.forever(function () {

if (input.lightLevel() >= 50) {

basic.showIcon(IconNames.Heart)

} else {

basic.showIcon(IconNames.No)

}

})

"""

def on_forever():
    if input.button_is_pressed(Button.AB):
        basic.show_leds("""
            . # # # .
            # . . . #
            # . . . #
            # . . . #
            . # # # .
            """)
    elif input.button_is_pressed(Button.A):
        basic.show_icon(IconNames.TRIANGLE)
    elif input.button_is_pressed(Button.B):
        basic.show_icon(IconNames.SQUARE)
basic.forever(on_forever)
