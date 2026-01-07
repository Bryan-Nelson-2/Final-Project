/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Bryan
 * Created on: Jan 2026
 * This program ...
*/

// variables
let motor: stepperMotor.Motor

//setup
basic.showString("READY")
robotbit.MotorRun(robotbit.Motors.M1A, 150)

// if button A is pressed, LEFT wheel spins foraward
input.onButtonPressed(Button.A, function() {
    robotbit.StepperDual(360, 360)
    basic.pause(100)
})