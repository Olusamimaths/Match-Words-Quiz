function setEventHandler(event, eventHandler, query) {
    var elements = document.querySelectorAll(query);
    for (var i = 0; i < elements.length; i++) {
        var elem = elements[i];
        elem.addEventListener(event, eventHandler);
    }
}
function dragstartHandler(ev) {
    ev.dataTransfer.setData('text/html', ev.target.id);
    ev.dataTransfer.dropEffect = "move";
}
function dragoverHandler(ev) {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = "move";
}
function dropHandler(ev) {
    var id = ev.dataTransfer.getData('text/html');
    var elemToMove = document.getElementById(id);
    var parent = ev.target.parentElement;
    parent.appendChild(elemToMove);
    parent.firstElementChild.style.opacity = 0;
    parent.style.paddingBottom = '1rem';
}
function buttonSwitchingDragOverHandler(ev) {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = "copy";
}
function buttonSwitchingDropHandler(ev) {
    var id = ev.dataTransfer.getData('text/html');
    var textSource = document.getElementById(id).innerText;
    var textDestination = ev.target.innerText;
    document.getElementById(id).innerText = textDestination;
    ev.target.innerText = textSource;
}
function setUp() {
    setEventHandler('dragstart', dragstartHandler, '.options__btn');
    setEventHandler('dragover', dragoverHandler, '.question-box__drop-zone');
    setEventHandler('drop', dropHandler, '.question-box__drop-zone__text');
    setEventHandler('dragover', buttonSwitchingDragOverHandler, '.options__btn');
    setEventHandler('drop', buttonSwitchingDropHandler, '.options__btn');
}
setUp();
