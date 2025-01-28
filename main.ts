let strip = neopixel.create(DigitalPin.P0, 40, NeoPixelMode.RGBW)
//  원하는 값으로 LED를 켜기 
function set_leds(up_to: number) {
    strip.clear()
    for (let i = 0; i < up_to + 1; i++) {
        strip.setPixelColor(i, neopixel.colors(NeoPixelColors.Red))
    }
    strip.show()
}

basic.forever(function on_forever() {
    set_leds(10)
    basic.pause(1000)
    set_leds(25)
    basic.pause(1000)
})
