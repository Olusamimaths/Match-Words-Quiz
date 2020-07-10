function dragstartHandler(ev) {
    console.log('dragstart');
    ev.dataTransfer.dropEffect = "move";
    ev.dataTransfer.setData('text/html', ev.target.outerHTML);
}
function dragoverHandler(ev) {
    console.log('dragover');
    ev.preventDefault();
    ev.dataTransfer.dropEffect = "move";
}
function dropHandler(ev) {
    console.log('drop');
    var id = ev.dataTransfer.getData('text/html');
    var elemToMove = document.getElementById(id);
    ev.target.appendChild(elemToMove);
}
function setEventHandler(event, eventHandler, query) {
    var elements = document.querySelectorAll(query);
    for (var i = 0; i < elements.length; i++) {
        var elem = elements[i];
        elem.addEventListener(event, eventHandler);
    }
}
function setUp() {
    setEventHandler('dragstart', dragstartHandler, '.options__btn');
    setEventHandler('dragover', dragoverHandler, '.question-box__drop-zone__text');
    setEventHandler('drop', dropHandler, '.question-box__drop-zone__text');
}
var buttons = document.querySelectorAll('.options__btn');
for (var i = 0; i < buttons.length; i++) {
    var button = buttons[i];
    button.addEventListener('dragstart', dragstartHandler);
}
