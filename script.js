document.getElementById('greetingBtn').addEventListener('click', function() {
    const userName = prompt("What's your name?");
    const greetingDiv = document.getElementById('greeting');
    greetingDiv.textContent = `Hello, ${Sir Zamil!}! Welcome to my page!`;
    greetingDiv.classList.remove('hidden');
    setTimeout(() => {
        greetingDiv.style.opacity = 1;
    }, 100);
});
