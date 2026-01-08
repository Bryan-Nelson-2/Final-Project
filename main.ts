/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Bryan
 * Created on: Jan 2026
 * This program ...
*/

// variables
let motor: stepperMotor.Motor
let distanceToObject: number = 0

//setup
basic.showString("READY")
robotbit.MotorRun(robotbit.Motors.M1A, 150)


// when button A is pressed, LEFT wheel spins foraward
input.onButtonPressed(Button.A, function() {
    robotbit.StepperDual(1000, 1000)
    basic.pause(100)
})


while (true) {
    // gets the distance constantly
    distanceToObject = sonar.ping(
        DigitalPin.P1,
        DigitalPin.P2,
        PingUnit.Centimeters
    )
    basic.showIcon(IconNames.Happy)

    if (distanceToObject < 10) {
        robotbit.StepperDual(0, 0)

    } else {
        basic.showIcon(IconNames.Happy)
        basic.pause(500)
    }
}


//set radio group
radio.setGroup(41)
