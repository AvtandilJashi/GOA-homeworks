function startCountdown(targetDate) {
    let target = new Date(targetDate).getTime();

    let interval = setInterval(() => {
        let now = new Date().getTime();
        let timeLeft = target - now;

        if (timeLeft <= 0) {
            clearInterval(interval);
            document.getElementById("countdown").innerHTML = "Time's up!";
            return;
        }

        let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = 
            `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
}
