x = 0

def on_button_pressed_a():
    basic.show_number(x)
    rechts_abbiegen(x)
    links_abbiegen(90)
    backward(10, 30)
    forward(20, 20)
input.on_button_pressed(Button.A, on_button_pressed_a)

# m1a output auf P15
# m1b auf p13
# m2a auf p14
# m2b auf p12
# input ins grüne +/- (5V)
# trigger = P8
# echo = P9
# 3.3v pin
def backward(time: number, speed: number):
    pins.analog_write_pin(AnalogPin.P13, 1023 * speed)
    pins.analog_write_pin(AnalogPin.P12, 1023 * speed)
    basic.pause(time * 1000)
    pins.analog_write_pin(AnalogPin.P13, 0)
    pins.analog_write_pin(AnalogPin.P12, 0)
def rechts_abbiegen(winkel: number):
    pins.analog_write_pin(AnalogPin.P15, 1023)
    pins.analog_write_pin(AnalogPin.P12, 1023)
    basic.pause(winkel)
    pins.analog_write_pin(AnalogPin.P15, 0)
    pins.analog_write_pin(AnalogPin.P12, 0)

def on_button_pressed_b():
    global x
    x = x + 100
input.on_button_pressed(Button.B, on_button_pressed_b)

# forward & backward time in sekunden angeben wie lange fahren,
# speed wie schnell 1 = vollgas 0.5 = halbgas
# abbiegen: winkel in grad angeben 0 - 360
def forward(time2: number, speed2: number):
    pins.analog_write_pin(AnalogPin.P15, 1023 * speed2)
    pins.analog_write_pin(AnalogPin.P14, 1023 * speed2)
    basic.pause(time2 * 1000)
    pins.analog_write_pin(AnalogPin.P15, 0)
    pins.analog_write_pin(AnalogPin.P14, 0)
def links_abbiegen(winkel2: number):
    pins.analog_write_pin(AnalogPin.P13, 1023)
    pins.analog_write_pin(AnalogPin.P14, 1023)
    basic.pause(winkel2)
    pins.analog_write_pin(AnalogPin.P13, 0)
    pins.analog_write_pin(AnalogPin.P14, 0)