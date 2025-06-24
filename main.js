// QUESTIONS
const questionUn = {
    title: "Question n°1",
    sentence: "1. Comment s'appelle le guitariste du groupe Queen ?",
    answers: ["A - John Lennon", "B - Freddie Mercury", "C - Mick Jagger", "D - Brian May"],
    goodAnswer: "D - Brian May",
    info: "Brian May, légende du rock, performe toujours à ce jour avec 'Queen + Adam Lambert', qui est une reformation du groupe.\n"
}

const questionDeux = {
    title: "Question n°2",
    sentence: "2. Qui a composé, entre autres, les musiques de Jurassic Park, Star Wars et Indiana Jones ?",
    answers: ["A - John Williams", "B - Hans Zimmer", "C - James Horner", "D - Joe Hisaishi"],
    goodAnswer: "A - John Williams",
    info: "John Williams a composé les musiques de nombreux films cultes, dont beaucoup de Steven Spielberg, ainsi que les 3 premiers Harry Potter.\n"
}

const questionTrois = {
    title: "Question n°3",
    sentence: "3. Quel artiste a originalement composé et interprété la chanson 'Knockin' on Heaven's Door' ?",
    answers: ["A - Guns N' Roses", "B - Bob Dylan", "C - Elton John", "D - Eric Clapton"],
    goodAnswer: "B - Bob Dylan",
    info: "'Knockin on Heaven's Door' a d'abord été écrite par Bob Dylan en 1973. La version de Guns N' Roses de 1991 est en fait une reprise.\n"
}

const questionQuatre = {
    title: "Question n°4",
    sentence: "4. Laquelle de ses chansons a été écrite par le duo Twenty One Pilots ?",
    answers: ["A - Radioactive", "B - Stressed Out", "C - Paradise", "D - In the End"],
    goodAnswer: "B - Stressed Out",
    info: "'Stressed Out' est sortie en 2015 et est la chanson qui a rendu le duo mondialement populaire.\n"
}

const questionCinq = {
    title: "Question n°5",
    sentence: "5. le duo Daft Punk a composé la bande originale de quel film de science-fiction sorti en 2010 ?",
    answers: ["A - Inception", "B - Avatar", "C - Tron : Legacy", "D - Bladerunner 2049"],
    goodAnswer: "C - Tron : Legacy",
    info: "Daft Punk a composé toute la BO du film 'Tron: Legacy'. Ils apparaissent d'ailleurs brièvement dans une des scènes du film.\n"
}



// CONSTANTES ET VARIABLES
const questionList = [questionUn, questionDeux, questionTrois, questionQuatre, questionCinq]
let questionContainer = document.querySelector("#question")
let answerContainer = document.querySelectorAll(".answer")
let count = 0
let scoreContainer = document.querySelector("#score")
let score = 0
let turnContainer = document.querySelector("#turn")
let turn = 0
let infoContainer = document.querySelector(".info")
let resultContainer = document.querySelector("#result")
let questionNumber = document.querySelector("#questionNmb")
let startBtn = document.querySelector("#startBtn")




// FONCTIONS
function displayIntro() {
    questionNumber.textContent = "Voici cinq questions pour tester ta culture musicale."
    questionContainer.textContent = "Si tu obtiens moins de la moyenne... essaye un peu d'écouter autre chose que Jul :("
    document.querySelector(".cardAnswers").style.display = "none"

    startBtn.style.display = "flex"

    startBtn.addEventListener("click", () => {
        startBtn.style.display = "none" // On le cache
        document.querySelector(".cardAnswers").style.display = "flex"
        questionNumber.textContent = questionList[count].title
        init()
    })

    // VERSION QUI DEMARRE AUTO AU BOUT DE 3S :
    // setTimeout(() => {
    //     document.querySelector(".cardAnswers").style.display = "flex"
    //     questionNumber.textContent = questionList[count].title
    //     init()
    // }, 3000)
}


function displayQuestion() {
    questionContainer.textContent = questionList[count].sentence
}


function displayAnswer() {
    questionList[count].answers.forEach((answer, i) => {
        answerContainer[i].textContent = answer
    })
}


function reply(elem) {
    turnContainer.textContent = turn
    let userAnswer = elem.textContent
    if (userAnswer == questionList[count].goodAnswer) {
        score++
        scoreContainer.textContent = score
        resultContainer.textContent = "Bonne réponse !"
        resultContainer.style.color = "#71d663"
    } else {
        resultContainer.textContent = "Mauvaise réponse !"
        resultContainer.style.color = "#751313"
    }
    turn++
    turnContainer.textContent = turn
    infoContainer.textContent = questionList[count].info
    count++
    if (count < questionList.length) {
        questionNumber.textContent = questionList[count].title
        init()
    } else {
        if (score >= 3) {
            questionNumber.textContent = "Quiz terminé !";
            questionContainer.textContent = "Ton score est de " + score + " / " + questionList.length + " ! GG, tu es très culturé dis donc :)";
        } else {
            questionNumber.textContent = "Quiz terminé !";
            questionContainer.textContent = "Ton score est de " + score + " / " + questionList.length + " ! Pas terrible...";
        }
        document.querySelector(".cardAnswers").style.display = "none"
        resultContainer.style.display = "none"
        infoContainer.textContent = "Clique sur la bannière ''Musi'Quizz'' pour recommencer."
    }
}

function init() {
    displayQuestion()
    displayAnswer()
}

// DEMARRAGE
displayIntro()
