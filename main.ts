/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Kyphong Pham and Alex Bryan
 * Created on: Jan 2026
 * This program spins wheels forward when you press A on the other microbit and stops when sonar is with 10cm of an object
*/

// variables
let distanceToObject: number = 0
let moving = false

//setup
basic.showString("READY")
radio.setGroup(41)

// When button A is pressed, BACK wheels spin foraward
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        moving = true
        robotbit.StepperDual(1000000, 1000000)
        basic.pause(100)
    } else if (receivedNumber == 2) {
        moving = true
        robotbit.StepperDual(-1000000, -1000000)
        basic.pause(100)
    }  
})

// Stops when within 10 cm
basic.forever(function () {
    distanceToObject = sonar.ping(
        DigitalPin.P1,
        DigitalPin.P2,
        PingUnit.Centimeters
    )

    if (moving) {
        if (distanceToObject < 10) {
            robotbit.StepperDual(0, 0)
            moving = false
        } else {
            basic.showIcon(IconNames.Happy)
            basic.pause(500)
        }
    }
})
