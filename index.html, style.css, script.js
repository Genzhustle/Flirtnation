index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meet Hot Singles Near You! 💘</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <div class="container">
        <h1>🔥 Meet Hot Singles Near You! 💋</h1>
        <p>Find someone special tonight. Private chats & video calls available!</p>

        <!-- Countdown Timer -->
        <div id="countdown">Offer expires in: <span id="timer">05:00</span></div>

        <!-- Fake Chat Messages -->
        <div class="chat-box">
            <p><strong>💋 Ashley (24):</strong> "Hey, I love new people! Wanna chat?"</p>
            <p><strong>😈 Emma (26):</strong> "I have a special surprise for you… Join now!"</p>
            <p><strong>🔥 Samantha (22):</strong> "You look cute. Private call? 😉"</p>
        </div>

        <!-- Call-to-Action Button -->
        <a href="https://bit.ly/41ri1Ny" class="cta-button">👉 Start Chatting Now!</a>

        <p class="small-text">💡 100% Free to Sign Up – Only a Few Spots Left!</p>
    </div>

    <script src="script.js"></script>
</body>
</html>

style.css
body {
    font-family: Arial, sans-serif;
    text-align: center;
    background-color: black;
    color: white;
    margin: 0;
    padding: 0;
}

.container {
    width: 90%;
    max-width: 500px;
    margin: 50px auto;
    background: #222;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(255, 0, 0, 0.8);
}

h1 {
    color: red;
    font-size: 24px;
}

#countdown {
    font-size: 20px;
    margin: 10px 0;
    color: yellow;
    font-weight: bold;
}

.chat-box {
    background: #333;
    padding: 10px;
    border-radius: 5px;
    margin: 15px 0;
    text-align: left;
    font-size: 16px;
}

.chat-box p {
    background: #444;
    padding: 8px;
    border-radius: 5px;
    margin: 5px 0;
}

.cta-button {
    display: inline-block;
    padding: 15px 25px;
    background: red;
    color: white;
    text-decoration: none;
    font-size: 20px;
    font-weight: bold;
    border-radius: 5px;
}

.cta-button:hover {
    background: darkred;
}

.small-text {
    font-size: 14px;
    color: lightgray;
}
script.js
function startCountdown(durationInMinutes) {
    let timer = durationInMinutes * 60;
    let countdownElement = document.getElementById("timer");

    function updateCountdown() {
        let minutes = Math.floor(timer / 60);
        let seconds = timer % 60;
        countdownElement.innerHTML = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;

        if (timer > 0) {
            timer--;
            setTimeout(updateCountdown, 1000);
        } else {
            setTimeout(() => { startCountdown(durationInMinutes); }, 2000); // Reset after 2 seconds
        }
    }
    updateCountdown();
}

startCountdown(5); // Set countdown to 5 minutes
