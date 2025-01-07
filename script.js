// Modal elements
const modal = document.getElementById('greeting-modal');
const greetBtn = document.getElementById('greet-btn');
const closeModal = document.querySelector('.close-btn');
const submitNameBtn = document.getElementById('submit-name-btn');
const nameInput = document.getElementById('name-input');
const greetingMessage = document.getElementById('greeting-message');

// Open the modal with a fade-in effect
greetBtn.addEventListener('click', () => {
    modal.classList.add('show');
});

// Close the modal with a fade-out effect
const closeModalHandler = () => {
    modal.classList.remove('show');
};

closeModal.addEventListener('click', closeModalHandler);

// Close modal if the user clicks outside the content
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModalHandler();
    }
});

// Handle name submission and display greeting
submitNameBtn.addEventListener('click', () => {
    const userName = nameInput.value.trim();
    if (userName) {
        greetingMessage.textContent = `Hello, ${userName}! Welcome to my page!`;
    } else {
        greetingMessage.textContent = "Hello! Welcome to my page!";
    }
    // Close the modal and clear input
    closeModalHandler();
    nameInput.value = '';
    // Show the greeting message with fade-in
    greetingMessage.style.opacity = 1;
});
