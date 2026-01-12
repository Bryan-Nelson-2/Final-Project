/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Kyphong Pham and Alex Bryan
 * Created on: Jan 2026
 * This program spins wheels forward when you press A on the other microbit and stops when sonar is with 10cm of an object
*/

// variables
let distanceToObject: number = 0

//setup
basic.showString("READY")
radio.setGroup(41)

// When button A is pressed, LEFT wheel spins foraward
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        robotbit.StepperDual(1000000, 1000000)
        basic.pause(100)}
})

basic.forever(function () {
// gets the distance constantly
        distanceToObject = sonar.ping(
            DigitalPin.P1,
            DigitalPin.P2,
            PingUnit.Centimeters
    )

    if (distanceToObject < 10) {
        robotbit.StepperDual(0, 0)

    } else {
        basic.showIcon(IconNames.Happy)
        basic.pause(500)
    }
})
