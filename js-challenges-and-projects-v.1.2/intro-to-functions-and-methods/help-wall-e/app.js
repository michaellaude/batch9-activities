const robot = document.querySelector('.robot')

//Challenge: Make Eve move when you click its body.
// document.querySelector('.robot').style.right += '2px'
//

var move = 0
function moveRobot() {
    move += 150
    robot.style.marginLeft = move
}
robot.addEventListener('click', moveRobot)