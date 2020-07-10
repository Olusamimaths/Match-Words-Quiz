function dragstartHandler(ev) {
    console.log('dragstart');
    ev.dataTransfer.setData('text/html', ev.target.id);
    ev.dataTransfer.dropEffect = "move";
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
    var parent = ev.target.parentElement;
    parent.appendChild(elemToMove);
    parent.firstElementChild.style.opacity = 0;
}
function setEventHandler(event, eventHandler, query) {
    var elements = document.querySelectorAll(query);
    for (var i = 0; i < elements.length; i++) {
        var elem = elements[i];
        elem.addEventListener(event, eventHandler);
    }
}
function buttonDragOverHandler(ev) {
    console.log('dragover button');
    ev.preventDefault();
    ev.dataTransfer.dropEffect = "copy";
}
function buttonDropHandler(ev) {
    console.log('drop button');
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
    setEventHandler('dragover', buttonDragOverHandler, '.options__btn');
    setEventHandler('drop', buttonDropHandler, '.options__btn');
}
setUp();
