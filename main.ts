input.onSound(DetectedSound.Loud, function () {
    x += 1
})
let x = 0
xgo.init_xgo_serial(SerialPin.P2, SerialPin.P1)
basic.forever(function () {
    if (x == 3) {
        basic.showIcon(IconNames.Happy)
        music.play(music.builtinPlayableSoundEffect(soundExpression.soaring), music.PlaybackMode.InBackground)
        xgo.execution_action(xgo.action_enum.Go_prone)
        x = 0
    } else if (x == 2) {
        basic.showIcon(IconNames.Heart)
        xgo.execution_action(xgo.action_enum.Looking_for_food)
    } else if (x == 1) {
        xgo.execution_action(xgo.action_enum.Default_posture)
    } else {
        basic.showIcon(IconNames.Asleep)
        xgo.execution_action(xgo.action_enum.Default_posture)
    }
})
