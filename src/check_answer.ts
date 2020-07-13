// get all the questions
// for each question
// check the option attached to it
// check if the option id is the same as the option id
// in the data object for the question

function checkAnswer(): void {

    const result: Result = { score: 0, hints: [] }

    // we need a live list that is why I don't use querySelectorAll
    // getElementsByClassName returns a live HTMLCOllection
    const questions: HTMLCollection = document.getElementsByClassName('question-box')
    for (let i = 0; i < questions.length; i++) {
        const queId: string = questions[i].id
        // get the drop zone node
        const dropZone: Node = document.getElementById(`dz_${queId}`)
        // the the children nodes of the drop zone
        const children: NodeList = dropZone.childNodes
        // the button is the 4th child at index 3
        const selectedOption: Node = children[3]
        if (selectedOption) {
            const optId: string = selectedOption['id']
            // check if the optId is the same for the question in the data object
            if (`opt${data.questions[i].optionId}` == optId) {
                result.score++
            } else {
                if (data.questions[i].hint) result.hints.push(data.questions[i].hint);
            }
        }
    }

    let hints = ''

    for (const hint of result.hints) {
        hints += `\n${hint}\n`;
    }

    alert(
        `Your Score: ${result.score},
        Hints: ${hints}`
    )
}

document.querySelector('.submit-box__button').addEventListener('click', checkAnswer)