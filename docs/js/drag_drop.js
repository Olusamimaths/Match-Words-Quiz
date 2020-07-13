function setEventHandler(event, eventHandler, query) {
    var elements = document.querySelectorAll(query);
    for (var i = 0; i < elements.length; i++) {
        var elem = elements[i];
        elem.addEventListener(event, eventHandler);
    }
}
function dragstartHandler(ev) {
    ev.dataTransfer.setData('text/plain', ev.target.id);
    ev.dataTransfer.dropEffect = "move";
}
function dragoverHandler(ev) {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = "move";
}
function dropHandler(ev) {
    var id = ev.dataTransfer.getData('text/plain');
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
    var dropped_id = ev.dataTransfer.getData('text/plain');
    var dropped_text = document.getElementById(dropped_id).innerText;
    var destination_text = ev.target.innerText;
    var dest_id = ev.target.id;
    document.getElementById(dropped_id).innerText = destination_text;
    document.getElementById(dest_id).innerText = dropped_text;
    document.getElementById(dropped_id).id = dest_id;
    var newElements = document.querySelectorAll("#" + dest_id);
    for (var i = 0; i < newElements.length; i++) {
        if (newElements[i].innerText === dropped_text)
            newElements[i].id = dropped_id;
    }
}
function setUp() {
    setEventHandler('dragstart', dragstartHandler, '.options__btn');
    setEventHandler('dragover', dragoverHandler, '.question-box__drop-zone');
    setEventHandler('drop', dropHandler, '.question-box__drop-zone__text');
    setEventHandler('dragover', buttonSwitchingDragOverHandler, '.options__btn');
    setEventHandler('drop', buttonSwitchingDropHandler, '.options__btn');
}
setUp();
