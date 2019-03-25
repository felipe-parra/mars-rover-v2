// Rover Object Goes Here
// ======================

var rover = {
    direction: "N"
}
function upping(valor) {
    return valor.toUpperCase()
}

function validatingCommand(command) {
    if (upping(command) === 'N') {
        console.log('Norte');
        console.log('Rover direction is: ' + rover.direction);
    }
    else if(upping(command) === 'S'){
        rover.direction = 'S'
        console.log("South");
    }
    else if(upping(command) === 'E'){
        rover.direction = 'E'
        console.log("South");
    }
    else if(upping(command) === 'W'){
        rover.direction = 'W'
        console.log("South");
    } else {
        return false;
    }
}
// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
  let currentPosition = rover.direction;
  let nexPosition = ""
  console.log(currentPosition);
}

function turnRight(rover){
  console.log("turnRight was called!");
}

function moveForward(rover){
  console.log("moveForward was called")
}
function receiveCommand(valor) {
    if (valor.length > 1) {
        for (var i = 0; i < valor.length; i++) {
            if (!validatingCommand(valor[i])) {
                // moves
            }
        }
    } else {
        if (!validatingCommand(valor)){

        }else {
            console.log("Sorry, is not a valid command!");
        }
    }
}
receiveCommand('n')
