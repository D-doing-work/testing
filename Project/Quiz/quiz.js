// Questions that will be asked
const Questions = [{
	q: "Who is a duelist in Valorant?",
	a: [{ text: "Sage", isCorrect: false },
	{ text: "KillJoy", isCorrect: false },
	{ text: "Jett", isCorrect: true },
	{ text: "Sova", isCorrect: false }
	]

},
{
	q: "How many sites do Haven have? ",
	a: [{ text: "1", isCorrect: false },
    { text: "2", isCorrect: false },
	{ text: "3", isCorrect: true },
    { text: "4", isCorrect: false, isSelected: false }
	]

},
{
	q: "Who is suppose to push on to site?",
	a: [{ text: "Initiator", isCorrect: false },
    { text: "Duelists", isCorrect: true },
	{ text: "Sentinal", isCorrect: false },
	{ text: "Controller", isCorrect: false }
	]

},

{
	q: "Who should not have bomb?",
	a: [{ text: "Initiator", isCorrect: false },
    { text: "Duelists", isCorrect: false },
	{ text: "Sentinal", isCorrect: true },
	{ text: "Controller", isCorrect: false }
	]

}
]

let currQuestion = 0
let score = 0

function loadQues() {
	const question = document.getElementById("ques")
	const opt = document.getElementById("opt")

	question.textContent = Questions[currQuestion].q;
	opt.innerHTML = ""

	for (let i = 0; i < Questions[currQuestion].a.length; i++) {
		const choicesdiv = document.createElement("div");
		const choice = document.createElement("input");
		const choiceLabel = document.createElement("label");

		choice.type = "radio";
		choice.name = "answer";
		choice.value = i;

		choiceLabel.textContent = Questions[currQuestion].a[i].text;

		choicesdiv.appendChild(choice);
		choicesdiv.appendChild(choiceLabel);
		opt.appendChild(choicesdiv);
	}
}

loadQues();

function loadScore() {
	const totalScore = document.getElementById("score")
	totalScore.textContent = `You scored ${score} out of ${Questions.length}`
}


function nextQuestion() {
	if (currQuestion < Questions.length - 1) {
		currQuestion++;
		loadQues();
	} else {
		document.getElementById("opt").remove()
		document.getElementById("ques").remove()
		document.getElementById("btn").remove()
		loadScore();
	}
}

function checkAns() {
	const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

	if (Questions[currQuestion].a[selectedAns].isCorrect) {
		score++;
		console.log("Correct")
		nextQuestion();
	} else {
		nextQuestion();
	}
}
