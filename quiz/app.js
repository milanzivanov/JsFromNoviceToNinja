const correctAnswer = ["B", "B", "B", "B"];
const form = document.querySelector(".quiz-form");

form.addEventListener("submit", e => {

    e.preventDefault();

    let score = 0;
    const userAnswer = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];


    // check answers
    userAnswer.forEach((answer, index) => {
        if(answer === correctAnswer[index]) {
            score += 25;
        }
    })

    console.log(score);

});