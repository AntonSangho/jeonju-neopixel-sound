let strip = neopixel.create(DigitalPin.P0, 40, NeoPixelMode.RGBW)
//  소리에 따라서 LED를 켜기
input.onSound(DetectedSound.Loud, function on_sound_lound() {
    let sound_level = input.soundLevel()
    let num_leds = Math.min(Math.max(Math.idiv(sound_level, 1), 1), 40)
    strip.clear()
    for (let i = 0; i < num_leds; i++) {
        strip.setPixelColor(i, neopixel.colors(NeoPixelColors.Red))
    }
    strip.show()
    basic.pause(1000)
    strip.clear()
    //  이전에 동작했던 LED 초기화
    strip.show()
})
