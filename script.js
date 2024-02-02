function sendMessage() {
    var userInput = document.getElementById('userInput').value;
    document.getElementById('userInput').value = '';

    appendMessage('User: ' + userInput);

    // Simple bot responses based on user input
    var botResponse = getBotResponse(userInput);
    appendMessage('Bot: ' + botResponse);
}

function appendMessage(message) {
    var chatDiv = document.getElementById('chat');
    chatDiv.innerHTML += '<div>' + message + '</div>';
}

function getBotResponse(userInput) {
    // Simple predefined responses
    switch (userInput.toLowerCase()) {
        case 'hello':
            return 'Hi there! How can I help you?';
        case 'how are you':
            return 'I am just a computer program, but thanks for asking!';
        case 'bye':
            return 'Goodbye! Have a great day!';
        default:
            return 'I did not understand that. Can you please rephrase?';
    }
}
