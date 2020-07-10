interface Question {
    text: string,
    questionId: number,
    answerId: number,
    hint?: string
}

interface Answer {
    text: string,
    optionId: number
}

interface Data {
    questions: Array<Question>,
    answers: Array<Answer>
}

const data : Data = {
    questions: [
        {
            text: "Which lives in water?",
            questionId: 1,
            answerId: 2
        },
        {
            text: "Which one barks?",
            questionId: 2,
            answerId: 3
        },
        {
            text: "Which is beef gotten from?",
            questionId: 3,
            answerId: 4
        },
        {
            text: "Which has 9 lives?",
            questionId: 4,
            answerId: 1
        }
    ],

    answers: [
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

