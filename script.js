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
    let totalTime = 5000;
    let intervalTime = 100;
    let elapsedTime = 0;

    prizeImage.style.display = "none"; // Hide image initially

    let spinInterval = setInterval(() => {
        let randomIndex = Math.floor(Math.random() * prizes.length);
        prizeText.innerText = prizes[randomIndex].name;
        elapsedTime += intervalTime;

        if (elapsedTime >= totalTime) {
            clearInterval(spinInterval);
            let finalPrize = prizes[Math.floor(Math.random() * prizes.length)];
            prizeText.innerText = finalPrize.name;
            prizeImage.src = finalPrize.image;
            prizeImage.style.display = "block"; // Show image

            winSound.play(); // Play sound

            // Confetti effect
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });

            spinning = false;
        }
    }, intervalTime);
}
