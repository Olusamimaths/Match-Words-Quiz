function checkAnswer() {
    var result = { score: 0, hints: [] };
    var questions = document.getElementsByClassName('question-box');
    for (var i = 0; i < questions.length; i++) {
        var queId = questions[i].id;
        var dropZone = document.getElementById("dz_" + queId);
        var children = dropZone.childNodes;
        var selectedOption = children[3];
        if (selectedOption) {
            var optId = selectedOption['id'];
            if ("opt" + data.questions[i].optionId == optId) {
                result.score++;
            }
            else {
                if (data.questions[i].hint)
                    result.hints.push(data.questions[i].hint);
            }
        }
    }
    var hints = '';
    for (var _i = 0, _a = result.hints; _i < _a.length; _i++) {
        var hint = _a[_i];
        hints += "\n" + hint + "\n";
    }
    alert("Your Score: " + result.score + ",\n        Hints: " + hints);
}
document.querySelector('.submit-box__button').addEventListener('click', checkAnswer);
