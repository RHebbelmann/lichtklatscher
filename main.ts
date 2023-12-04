basic.forever(function () {
    if (input.soundLevel() > 20) {
        basic.setLedColor(0xff0000)
    } else {
        basic.setLedColor(0x00ff00)
    }
})
