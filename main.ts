//  m1a output auf P15
//  m1b auf p13
//  m2a auf p14
//  m2b auf p12
//  input ins grüne +/- (5V)
//  trigger = P8
//  echo = P9
//  3.3v pin
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    basic.showNumber(x)
    rechts_abbiegen(x)
})
function backward(time: number, speed: number) {
    pins.analogWritePin(AnalogPin.P13, 1023 * speed)
    pins.analogWritePin(AnalogPin.P12, 1023 * speed)
    basic.pause(time * 1000)
    pins.analogWritePin(AnalogPin.P13, 0)
    pins.analogWritePin(AnalogPin.P12, 0)
}

function rechts_abbiegen(winkel: number) {
    pins.analogWritePin(AnalogPin.P15, 1023)
    pins.analogWritePin(AnalogPin.P12, 1023)
    basic.pause(winkel)
    pins.analogWritePin(AnalogPin.P15, 0)
    pins.analogWritePin(AnalogPin.P12, 0)
}

input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    x = x + 100
})
//  forward & backward time in sekunden angeben wie lange fahren,
//  speed wie schnell 1 = vollgas 0.5 = halbgas
//  abbiegen: winkel in grad angeben 0 - 360
function forward(time: number, speed: number) {
    pins.analogWritePin(AnalogPin.P15, 1023 * speed)
    pins.analogWritePin(AnalogPin.P14, 1023 * speed)
    basic.pause(time * 1000)
    pins.analogWritePin(AnalogPin.P15, 0)
    pins.analogWritePin(AnalogPin.P14, 0)
}

/**
  * Lässt den Roboter um den gegebenen Winkel links abbiegen
  */
    //% block
function links_abbiegen(winkel: number) {
    pins.analogWritePin(AnalogPin.P13, 1023)
    pins.analogWritePin(AnalogPin.P14, 1023)
    basic.pause(winkel)
    pins.analogWritePin(AnalogPin.P13, 0)
    pins.analogWritePin(AnalogPin.P14, 0)
}

let x = 0
let speed = 0
let winkel = 0
let time = 0
