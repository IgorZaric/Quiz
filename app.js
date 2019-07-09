const correctAnswers = ["C", "A", "B", "B", "C", "C", "A", "B"];
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");

form.addEventListener("submit", e => {
  e.preventDefault();

  let score = 0;

  const userAnswers = [
    form.Q1.value,
    form.Q2.value,
    form.Q3.value,
    form.Q4.value,
    form.Q5.value,
    form.Q6.value,
    form.Q7.value,
    form.Q8.value
  ];

  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 12.5;
    }
  });
  scrollTo(0, 0);
  result.classList.remove("d-none");

  let output = 0;
  const timer = setInterval(() => {
    result.querySelector("span").textContent = `${output}%`;
    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10);
});
