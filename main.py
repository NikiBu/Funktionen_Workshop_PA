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

def rechts_abbiegen(winkel: number, speed1: number):
    pins.analog_write_pin(AnalogPin.P15, 1023 * speed1)
    pins.analog_write_pin(AnalogPin.P12, 1023 * speed1)
    if (speed1 == 1):
        basic.pause((winkel+10.6)/0.256)
    if (speed1 == 0.5):
        basic.pause((winkel+10.6)/0.256*2.666)
    pins.analog_write_pin(AnalogPin.P15, 0)
    pins.analog_write_pin(AnalogPin.P12, 0)

# forward & backward time in sekunden angeben wie lange fahren,
# speed wie schnell 1 = vollgas 0.5 = halbgas
# abbiegen: winkel in grad angeben 0 - 360

#15 cm bei 0.5s und 1 speed
#6.5cm bei 0.5s und 0.5 speed
def forward(time2: number, speed2: number):
    pins.analog_write_pin(AnalogPin.P15, 1023 * speed2)
    pins.analog_write_pin(AnalogPin.P14, 1023 * speed2)
    basic.pause(time2 * 1000)
    pins.analog_write_pin(AnalogPin.P15, 0)
    pins.analog_write_pin(AnalogPin.P14, 0)

def links_abbiegen(winkel2: number, speed3: number):
    pins.analog_write_pin(AnalogPin.P13, 1023)
    pins.analog_write_pin(AnalogPin.P14, 1023)
    if (speed3 == 1):
            basic.pause((winkel2 +10.6)/0.256)
    if (speed3 == 0.5):
            basic.pause((winkel2 +10.6)/0.256*2.666)
    pins.analog_write_pin(AnalogPin.P13, 0)
    pins.analog_write_pin(AnalogPin.P14, 0)