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

interface Result {
    score: number,
    hints?: Array<string>
}

const data: Data = {
    questions: [
        {
            text: "Which lives in water?",
            questionId: 1,
            optionId: 2,
            hint: "Question 1 hint: Tilapia is an example."
        },
        {
            text: "Which one barks?",
            questionId: 2,
            optionId: 3,
            hint: "Question 2 hint: The kid is called a puppy."
        },
        {
            text: "Which is beef gotten from?",
            questionId: 3,
            optionId: 4,
            hint: "Question 3 hint: it is the greatest of all time"
        },
        {
            text: "Which has 9 lives?",
            questionId: 4,
            optionId: 1,
            hint: "Question 4 hint: Its curiosity killed it."
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

function createOptions({ options  }): void {
    // get the options div element
    const container : Element = document.querySelector('.options')
    options.forEach((option, i) => {
        // create an option button element
        const button : string =
            `<button id=opt${i + 1} class="options__btn" draggable="true">${option.text.toUpperCase()}</button>`
        // append it to the container element
        container.innerHTML += button
        return;
    })
    // append it to the options div  
}

function createQuestions({ questions }): void {
    // get the questions div
    const container : Element = document.querySelector('.questions')

    questions.forEach((question, i) => {
        const div : string = `
        <div class="question-box" id=que${i + 1}>
          <p class="question-box__text">${question.text}</p>
          <div class="question-box__drop-zone" id=dz_que${i+1}>
            <p class="question-box__drop-zone__text">
              Drop here
            </p>
          </div>
        </div>
        `
        container.innerHTML += div
        return;
    }) 
}


createOptions(data)
createQuestions(data)