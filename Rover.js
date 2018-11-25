class Rover {
    constructor (motors){
        this.motors = motors;
    }

    forward () {
        console.log('Full speed ahead!');
        this.motors.forward(255);
    }

    backward (){
        console.log('Reverse!');
        this.motors.reverse(255);
    }

    left () {
        console.log('To the left!');
        this.motors[0].reverse(200);
        this.motors[1].forward(200);
    }

    right () {
        console.log('To the right!');
        this.motors[0].forward(200);
        this.motors[1].reverse(200);
    }

    stop () {
        this.motors.stop();
        console.log('Stoppping motors...');
    }
}

module.exports = Rover;

newtask should equal newTask = {name: "lkj", address: "lkj", email: "lkjjj", relationship: "lkdsfjf", phoneNumber: "lksdjf"}