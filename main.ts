function vorwärts (time2: number, speed2: number) {
    pins.analogWritePin(AnalogPin.P15, 1023 * speed2)
    pins.analogWritePin(AnalogPin.P13, 1023 * speed2)
    basic.pause(time2 * 1000)
    pins.analogWritePin(AnalogPin.P15, 0)
    pins.analogWritePin(AnalogPin.P13, 0)
}
// forward & backward time in sekunden angeben wie lange fahren,
// speed wie schnell 1 = vollgas 0.5 = halbgas
// abbiegen: winkel in grad angeben 0 - 360
// 15 cm bei 0.5s und 1 speed
// 6.5cm bei 0.5s und 0.5 speed
// Von vorne schauen
// P14 = links rückwärts, P15 links vorwärts
// P13 = rechts vorwärts, P12 = rechts rückwärts
function rückwärts (time: number, speed: number) {
    pins.analogWritePin(AnalogPin.P14, 1023 * speed)
    pins.analogWritePin(AnalogPin.P12, 1023 * speed)
    basic.pause(time * 1000)
    pins.analogWritePin(AnalogPin.P14, 0)
    pins.analogWritePin(AnalogPin.P12, 0)
}
function rechts_abbiegen (winkel: number, speed1: number) {
    pins.analogWritePin(AnalogPin.P13, 1023 * speed1)
    pins.analogWritePin(AnalogPin.P14, 1023 * speed1)
    if (speed1 == 1) {
        basic.pause((winkel - 15.884) / 0.21176)
    }
    if (speed1 == 0.5) {
        basic.pause((winkel - 7.5) / 0.15)
    }
    pins.analogWritePin(AnalogPin.P14, 0)
    pins.analogWritePin(AnalogPin.P13, 0)
}
function links_abbiegen (winkel2: number, speed3: number) {
    pins.analogWritePin(AnalogPin.P15, 1023 * speed3)
    pins.analogWritePin(AnalogPin.P12, 1023 * speed3)
    if (speed3 == 1) {
        basic.pause((winkel2 - 15.884) / 0.21176)
    }
    if (speed3 == 0.5) {
        basic.pause((winkel2 - 7.5) / 0.15)
    }
    pins.analogWritePin(AnalogPin.P15, 0)
    pins.analogWritePin(AnalogPin.P12, 0)
}
