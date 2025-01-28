strip = neopixel.create(DigitalPin.P0, 40, NeoPixelMode.RGBW)

# 원하는 값으로 LED를 켜기 
def set_leds(up_to):
    strip.clear()
    for i in range(up_to + 1):
        strip.set_pixel_color(i, neopixel.colors(NeoPixelColors.RED))
    strip.show()

def on_forever():
    set_leds(10)
    basic.pause(1000)
    set_leds(25)
    basic.pause(1000)

basic.forever(on_forever)

