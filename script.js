// Function that evaluates the score and returns the remark
function evaluateScore(score) {
  let remark;

  if (score >= 90 && score <= 100) {
    remark = "Excellent";
  } else if (score >= 75 && score <= 89) {
    remark = "Passed";
  } else if (score > 0 && score < 75) {
    remark = "Failed";
  } else {
    remark = "Invalid score";
  }

  return remark;
}

// Function that shows the final result on the webpage
function showResult(html) {
  document.getElementById("result").innerHTML = html;
}

// Main program
function startProgram() {
  // 1. Welcome message
  alert("Welcome to the Score Evaluator!");

  // 2. Ask for name
  let name = prompt("Please enter your name:");

  // Validation: empty name (or Cancel pressed)
  if (name === null || name.trim() === "") {
    showResult(
      "<span class='Invalid'>Error: Name is required. No name was entered.</span>",
    );
    return;
  }
  name = name.trim();

  // 3. Ask for score
  let scoreInput = prompt(
    "Hello, " + name + "! Please enter your score (1-100):",
  );

  // Validation: empty score (or Cancel pressed)
  if (scoreInput === null || scoreInput.trim() === "") {
    showResult(
      "<span class='Invalid'>Error: Score is required. No score was entered.</span>",
    );
    return;
  }

  let score = Number(scoreInput);

  // Validation: non-numeric
  if (isNaN(score)) {
    showResult(
      "<span class='Invalid'>Error: \"" +
        scoreInput +
        '" is not a number. Invalid score.</span>',
    );
    return;
  }

  // Validation: zero
  if (score === 0) {
    showResult(
      "<span class='Invalid'>Error: Score cannot be zero. Invalid score.</span>",
    );
    return;
  }

  // Validation: negative
  if (score < 0) {
    showResult(
      "<span class='Invalid'>Error: Score cannot be negative. Invalid score.</span>",
    );
    return;
  }

  // Validation: beyond 100
  if (score > 100) {
    showResult(
      "<span class='Invalid'>Error: Score cannot be more than 100. Invalid score.</span>",
    );
    return;
  }

  // 4. Confirm to continue
  let proceed = confirm("Do you want to continue and see your result?");

  if (!proceed) {
    showResult("You chose not to continue. Goodbye, " + name + "!");
    return;
  }

  // 5. Evaluate using function and display result
  let remark = evaluateScore(score);
  let cssClass = remark.split(" ")[0]; // Excellent, Passed, Failed, Invalid

  showResult(
    "<strong>Name:</strong> " +
      name +
      "<br>" +
      "<strong>Score:</strong> " +
      score +
      "<br>" +
      "<strong>Remark:</strong> <span class='" +
      cssClass +
      "'>" +
      remark +
      "</span>",
  );
}

// Run automatically when the page loads
window.onload = startProgram;