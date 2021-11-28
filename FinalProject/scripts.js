/*
    Ethan Penrose
    ITC 370
    11/24/2021
    Final Project - The Great Race
*/

// Number of pixels to the finish line.
const finishLine = 1000;
const redLight = "images/traffic-light-red.png";
const greenLight = "images/traffic-light-green.png";
var winnerDeclared = false;

function ChangeTrafficLightColor() {
    var trafficLight = document.getElementById("trafficLight");
    var trafficLightSrc = trafficLight.getAttribute("src");
    if (trafficLightSrc === redLight) {
        trafficLight.src = greenLight;
        StartRace();
    } else if (trafficLightSrc === greenLight) {
        trafficLight.src = redLight;
        ResetRace();
    }
}

function StartRace() {
    winnerDeclared = false;
    MoveParticipant("participant1");
    MoveParticipant("participant2");
    MoveParticipant("participant3");
}

function ResetRace() {
    ResetParticipant("participant1");
    ResetParticipant("participant2");
    ResetParticipant("participant3");
}

function ResetParticipant(participantId) {
    var participant = document.getElementById(participantId);
    participant.style.left = 0 + "px";
    participant.onclick = "";

    var participantText = document.getElementById(participantId + "Text");
    participantText.innerHTML = "";
}

function MoveParticipant(participantId) {
    var participant = document.getElementById(participantId);
    var position = parseInt(participant.style.left, 10);
    if (isNaN(position)) {
        position = 0;
    }

    if (position < finishLine) {
        position += randomNumber(5);
        participant.style.left = position + "px";
        setTimeout('MoveParticipant("' + participantId + '")', randomNumber(5));
    } else {
        if (position >= finishLine && !winnerDeclared) {
            winnerDeclared = true;
            var winnerImg = document.getElementById(participantId);
            winnerImg.addEventListener("click", function() {
                ResetRace();
            });

            var winnerText = document.getElementById(participantId + "Text");
            winnerText.innerHTML = "<strong>WINNER!</strong>";
            winnerText.style.textAlign = "right";
        }
    }
}

function randomNumber(max) {
    var min = 1;
    return Math.floor(Math.random() * (max - min)) + min;
}