function showMessage() {
    var message = document.getElementById('message').value;
    if (message) {
        document.getElementById('displayMessage').innerText = "💌 " + message;

        // Send message to log.php to save in log.txt
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "log.php", true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send("message=" + encodeURIComponent(message));

        // Clear the input field after sending
        document.getElementById('message').value = "";
    } else {
        document.getElementById('displayMessage').innerText = "Please enter a message first!";
    }
}

function createRose() {
    const roseContainer = document.getElementById("fallingRoses");
    const rose = document.createElement("span");
    rose.innerHTML = "🌹";
    rose.style.left = Math.random() * 100 + "vw";
    rose.style.animationDuration = Math.random() * 3 + 2 + "s";
    rose.classList.add("falling-rose");
    roseContainer.appendChild(rose);
    setTimeout(() => { rose.remove(); }, 5000);
}

setInterval(createRose, 500);
