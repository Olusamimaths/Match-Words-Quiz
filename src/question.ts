interface Question {
    text: string,
    questionId: number,
    optionId: number,
    hint?: string
}

interface Option {
    text: string,
    optionId: number
}

interface Data {
    questions: Array<Question>,
    options: Array<Option>
}

const data: Data = {
    questions: [
        {
            text: "Which lives in water?",
            questionId: 1,
            optionId: 2
        },
        {
            text: "Which one barks?",
            questionId: 2,
            optionId: 3
        },
        {
            text: "Which is beef gotten from?",
            questionId: 3,
            optionId: 4
        },
        {
            text: "Which has 9 lives?",
            questionId: 4,
            optionId: 1
        }
    ],

    options: [
        {
            text: 'cat',
            optionId: 1
        },
        {
            text: 'fish',
            optionId: 2
        },
        {
            text: 'dog',
            optionId: 3
        },
        {
            text: 'goat',
            optionId: 4
        }
    ]
}

function createOptions(options): void {
    // get the options div
    const container = document.querySelector('.options')
    options.forEach((option, i) => {
        // create an option button element
        const button = 
        `<button id=opt${i+1} class="options__btn" draggable="true">${option.text}</button>`
        // append it to the container
        container.innerHTML += button
        return;
    })
    // append it to the options div  
}

function createQuestions(questions): void {
    // get the questions div
    const container = document.querySelector('.questions')
    questions.forEach((question, i) => {
        const div = `
        <div class="question-box" id=que${i+1}>
          <p class="question-box__text">${question.text}</p>
          <div class="question-box__drop-zone">
            <p class="question-box__drop-zone__text">
              Drop here
            </p>
          </div>
        </div>
        `
        container.innerHTML += div
        return;
    })
    // append it to the options div  
}


createOptions(data.options)
createQuestions(data.questions)