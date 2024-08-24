

// Function to calculate the average score from a list of scores
function calculateAverageScore(...scores: number[]): string {
  // Calculate the total sum of all the scores
  const totalScore = scores.reduce(
    (accumulator, currentScore) => accumulator + currentScore,
    0
  );
  console.log(`Total score: ${totalScore}`); // Log the total score

  // Divide total score with score array length to find the average score
  const averageScore = totalScore / scores.length;

  // Return the average score
  return `Average Score: ${averageScore.toFixed(2)}%`;
}

// Calculate the average score for the given scores
const averageScoreResult = calculateAverageScore(90, 30, 50, 10, 80, 40);
console.log(averageScoreResult); // Print the result
