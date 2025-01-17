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

    let totalTime = 15000; // Total spinning time (15 seconds)
    let minSpeed = 50;     // Fastest speed (50ms per switch)
    let maxSpeed = 250;    // Slowest speed (250ms per switch)
    let elapsedTime = 0;
    let speed = minSpeed;  // Start with a faster speed

    prizeImage.style.display = "none"; // Hide image initially

    let spinInterval = setInterval(() => {
        let randomIndex = Math.floor(Math.random() * prizes.length);
        prizeText.innerText = prizes[randomIndex].name;

        // Gradually slow down by increasing the interval more smoothly
        elapsedTime += speed;
        speed = Math.min(speed + 3, maxSpeed); // Increase speed gradually, without going above maxSpeed

        if (elapsedTime >= totalTime) {
            clearInterval(spinInterval);

            // Final prize display
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
