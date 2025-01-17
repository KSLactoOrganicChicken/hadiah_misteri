const prizes = [
    { name: "🎁 Free Coffee", image: "coffee.png" },
    { name: "🎉 $5 Gift Card", image: "giftcard.png" },
    { name: "🎟️ Discount Coupon", image: "coupon.png" },
    { name: "🎊 Mystery Prize", image: "mystery.png" },
    { name: "😢 Try Again", image: "tryagain.png" },
    { name: "🎈 Extra Spin", image: "spin.png" }
];

let spinning = false;

function startSpinning() {
    if (spinning) return;
    spinning = true;

    let prizeText = document.getElementById("prize-text");
    let prizeImage = document.getElementById("prize-image");
    let winSound = document.getElementById("win-sound");
    let totalTime = 5000; // Total spinning time (5 sec)
    let minSpeed = 50; // Fastest speed (50ms per switch)
    let maxSpeed = 300; // Slowest speed (300ms per switch)
    let elapsedTime = 0;
    let speed = minSpeed; // Start fast

    prizeImage.style.display = "none"; // Hide image initially

    let spinInterval = setInterval(() => {
        let randomIndex = Math.floor(Math.random() * prizes.length);
        prizeText.innerText = prizes[randomIndex].name;

        // Gradually slow down
        elapsedTime += speed;
        speed += 5; // Increase speed step by step

        if (speed >= maxSpeed || elapsedTime >= totalTime) {
            clearInterval(spinInterval);

            // Choose final prize
            let finalPrize = prizes[Math.floor(Math.random() * prizes.length)];
            prizeText.innerText = finalPrize.name;
            prizeImage.src = finalPrize.image;
            prizeImage.style.display = "block"; // Show image

            winSound.play(); // Play sound

            // Confetti effect 🎊
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });

            spinning = false;
        }
    }, speed);
}
