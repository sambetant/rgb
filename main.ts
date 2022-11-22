let strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
let rood = 0
let groen = 0
let blauw = 0
basic.forever(function () {
    for (let index = 0; index < 255; index++) {
        strip.showColor(neopixel.rgb(rood, groen, blauw))
        rood = rood + 1
        basic.pause(50)
    }
    for (let index = 0; index < 255; index++) {
        strip.showColor(neopixel.rgb(rood, groen, blauw))
        rood = rood - 1
        basic.pause(50)
    }
})
basic.forever(function () {
    for (let index = 0; index < 255; index++) {
        blauw = blauw + 1
        basic.pause(60)
    }
    for (let index = 0; index < 255; index++) {
        blauw = blauw - 1
        basic.pause(60)
    }
})
basic.forever(function () {
    for (let index = 0; index < 255; index++) {
        groen = groen + 1
        basic.pause(70)
    }
    for (let index = 0; index < 255; index++) {
        groen = groen - 1
        basic.pause(70)
    }
})
