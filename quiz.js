// Function to check the user's answer
function checkAnswer() {
    // Step 1: Define the correct answer
    const correctAnswer = "4";

    // Step 2: Retrieve the user's selected answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked');

    // Step 3: Select the feedback element
    const feedbackElement = document.getElementById("feedback");

    // Step 4: Validate and provide feedback
    if (!userAnswer) {
        feedbackElement.textContent = "Please select an answer before submitting.";
        feedbackElement.style.color = "red";
        return;
    }

    if (userAnswer.value === correctAnswer) {
        feedbackElement.textContent = "Correct! Well done.";
        feedbackElement.style.color = "green";
    } else {
        feedbackElement.textContent = "That's incorrect. Try again!";
        feedbackElement.style.color = "red";
    }
}

// Attach the event listener to the submit button
const submitButton = document.getElementById("submit-answer");
if (submitButton) {
    submitButton.addEventListener("click", checkAnswer);
} else {
    console.error("Submit button with ID 'submit-answer' not found!");
}
