function checkAnswer() {
    var correctAnswer = "4";
    var userAnswer = document.querySelector('input[name="quiz"]:checked');

    if (userAnswer) {
        userAnswer = userAnswer.value;
    } else {
        document.getElementById('feedback').textContent = "Please select an answer.";
        return; // Exit the function if no answer is selected
    }

    if (userAnswer === correctAnswer) {
        document.getElementById('feedback').textContent = "Correct! Well done.";
    } else {
        document.getElementById('feedback').textContent = "That's incorrect. Try again!";
    }
}

var submitButton = document.getElementById('submit-answer');
submitButton.addEventListener('click', checkAnswer);