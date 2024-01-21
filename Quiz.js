

const quizDB = [
    {
        question: "Q1:  What is the full form of HTML?",
        a: "Hyper text mark language",
        b: "Hyper type manu language",
        c: "Hyper text markup language",
        d: "hayer text markup language me",
        ans: "ans3"
    },
    {
        question: "Q2: What is the full form of CSS?",
        a: "casecading  style sheet",
        b: "case sport system",
        c: "core science system",
        d: "care sport system",
        ans: "ans1"
    },
    {
    question: "Q3: What is the full form of Js?",
    a: "jsonScript",
    b: "javaScript",
    c: "java StyleSheet",
    d: "java science",
    ans: "ans2"

    },
    {
        question: "Q4: What is the full form of HTTP?",
        a: "hyper text transfer protocol",
        b: "hyper text test protocol",
        c: "hightext type problem",
        d: "high typ product",
        ans: "ans1"
    }

];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;
const loadQuestion = () => {
    console.log(quizDB[0]);

    const questionList = quizDB[questionCount];
    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;

}

loadQuestion();
const getCheckAnswer = () => {
    let answer;
    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }

    });

    return answer;

};

const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);

}


submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
console.log(checkedAnswer);

if(checkedAnswer == quizDB[questionCount].ans){
score++;
};

questionCount++;
deselectAll();

if(questionCount < quizDB.length){
    loadQuestion();
}

else{
    showScore.innerHTML = `
    <h3> You scored ${score}/${quizDB.length} ✌️ </h3>
     <button class="btn" onclick="location.reload()">Play Again</button>
     `;
    showScore.classList.remove('scroeArea');
};

});