// Funzione per aggiornare il countdown
function updateCountdown() {
    // Data e ora attuale
    let now = new Date();

    // Data e ora di domani alle 9:30
    let tomorrow = new Date(now);
    tomorrow.setDate(now.getDate() + 1);
    tomorrow.setHours(9, 30, 0, 0);
    let difference = tomorrow - now;

    // Calcolo delle ore minuti e secondi 
    var hours = Math.floor(difference / 3600000);
    var minutes = Math.floor((difference % 3600000) / 60000);
    var seconds = Math.floor((difference % 60000) / 1000);

    // Aggiorna l'elemento 
    document.getElementById('countdown').innerHTML = hours + 'h ' + minutes + 'm ' + seconds + 's';
}


var countdownInterval = setInterval(updateCountdown, 1000);

// fermare il countdown quando è arrivato a 9:30 di domani
var stopCountdown = new Date();
stopCountdown.setDate(stopCountdown.getDate() + 1);
stopCountdown.setHours(9, 30, 0, 0);

if (new Date() > stopCountdown) {
    clearInterval(countdownInterval);
    document.getElementById('countdown').innerHTML = "Conto alla rovescia terminato!";
}