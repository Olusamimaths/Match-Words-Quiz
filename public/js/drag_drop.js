function dragStartHandler(ev) {
    ev.preventDefault();
    ev.dataTransfer.setData('text/html', ev.target.outerHTML);
    ev.dataTransfer.dropEffect = "move";
}
function dragoverHandler(ev) {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = "move";
}
function dropHandler(ev) {
    var id = ev.dataTransfer.getData('text/html');
    var elemToMove = document.getElementById(id);
    ev.target.appendChild(elemToMove);
}
function setDragStartHandler() {
    var buttons = document.querySelectorAll('.options__btn');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('dragstart', dragStartHandler);
    }
}
function setUp() {
    setDragStartHandler();
}
setUp();
