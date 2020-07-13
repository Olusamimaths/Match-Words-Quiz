var data = {
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
};
function createOptions(_a) {
    var options = _a.options;
    var container = document.querySelector('.options');
    options.forEach(function (option, i) {
        var button = "<button id=opt" + (i + 1) + " class=\"options__btn\" draggable=\"true\">" + option.text.toUpperCase() + "</button>";
        container.innerHTML += button;
        return;
    });
}
function createQuestions(_a) {
    var questions = _a.questions;
    var container = document.querySelector('.questions');
    questions.forEach(function (question, i) {
        var div = "\n        <div class=\"question-box\" id=que" + (i + 1) + ">\n          <p class=\"question-box__text\">" + question.text + "</p>\n          <div class=\"question-box__drop-zone\" id=dz_que" + (i + 1) + ">\n            <p class=\"question-box__drop-zone__text\">\n              Drop here\n            </p>\n          </div>\n        </div>\n        ";
        container.innerHTML += div;
        return;
    });
}
createOptions(data);
createQuestions(data);
