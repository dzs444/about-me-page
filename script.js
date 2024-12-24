document.getElementById("greetBtn").addEventListener("click", function () {
        const userName = prompt("What is your name?");
        if (userName) {
            const greetingDiv = document.getElementById("greeting");
            greetingDiv.textContent = `Hello, ${Sir Zamil}! Welcome to my page!`;
            greetingDiv.style.color = "#008080";
            greetingDiv.style.fontSize = "20px";
            greetingDiv.style.fontWeight = "bold";
            greetingDiv.classList.remove("hidden");

            // Fade-in effect
            greetingDiv.style.opacity = 0;
            let opacity = 0;
            const fadeIn = setInterval(function () {
                if (opacity < 1) {
                    opacity += 0.1;
                    greetingDiv.style.opacity = opacity;
                } else {
                    clearInterval(fadeIn);
                }
            }, 50);
        }
    });
