strip = neopixel.create(DigitalPin.P0, 40, NeoPixelMode.RGBW)

# 소리에 따라서 LED를 켜기
def on_sound_lound():
    sound_level = input.sound_level()
    num_leds = min(max(sound_level // 1, 1), 40)
    strip.clear()
    for i in range(num_leds):
        strip.set_pixel_color(i, neopixel.colors(NeoPixelColors.RED))
    strip.show()
    basic.pause(1000)
    strip.clear() # 이전에 동작했던 LED 초기화
    strip.show()

input.on_sound(DetectedSound.LOUD, on_sound_lound)
