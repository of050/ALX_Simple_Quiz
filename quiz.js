// Step 1: Define the function `checkAnswer`
function checkAnswer() {
    // Step 2: Declare the correct answer
    const correctAnswer = "4";

    // Step 3: Retrieve the user's selected answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked');

    // Step 4: Check if the user selected an answer
    const feedbackElement = document.getElementById("feedback");
    if (!userAnswer) {
        feedbackElement.textContent = "Please select an answer before submitting.";
        feedbackElement.style.color = "red";
        return;
    }

    // Step 5: Compare the user's answer with the correct answer
    if (userAnswer.value === correctAnswer) {
        feedbackElement.textContent = "Correct! Well done.";
        feedbackElement.style.color = "green";
    } else {
        feedbackElement.textContent = "That's incorrect. Try again!";
        feedbackElement.style.color = "red";
    }
}

// Step 6: Add the event listener to the "Submit Answer" button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
