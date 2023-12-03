
var play = document.getElementById("play-state");
var pause = document.getElementById("pause-state");
var reset = document.getElementById("reset");
var appendTens = document.getElementById("tens");
var appendSeconds = document.getElementById("seconds");
var tens = 0;
var seconds = 0;
var flg = false;
var interval;

console.log("working");
function startTimer() {
    tens++;

    if (tens < 9) {
        console.log("tens" + tens);
        appendTens.innerHTML = "0" + tens;
        console.log(appendTens.innerHTML);
    }
    if (tens > 9) {
        appendTens.innerHTML = tens;
    }
    if (tens > 99) {
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
    }
    if (seconds > 9) {
        appendSeconds.innerHTML = seconds;
    }
    console.log(tens, seconds);
}

function showNotification(message) {
    var toastContainer = new bootstrap.Toast(document.getElementById('toast'));
    document.querySelector('.toast-body').innerText = message;
    toastContainer.show();
}

play.onclick = function () {
    if (!flg) {
        flg = true;
        console.log("working");
        play.style.display = "none";
        pause.style.display = "inline";

    }
    showNotification("Stop Watch Started!");
    console.log("timer started")
    if (interval) {
        clearInterval(interval);
    }
    interval = setInterval(startTimer);
};

pause.onclick = function () {
    flg = false;
    pause.style.display = "none";
    showNotification("Stop Watch Paused!");
    play.style.display = "inline";

    clearInterval(interval);
};

reset.onclick = function () {
    clearInterval(interval);
    showNotification("Reset!");
    tens = "00";
    seconds = "00";
    appendSeconds.innerHTML = seconds;
    appendTens.innerHTML = tens;
};


