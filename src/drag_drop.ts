function dragStartHandler(ev): void {
    ev.preventDefault()
    ev.dataTransfer.setData('text/html', ev.target.outerHTML)
    ev.dataTransfer.dropEffect = "move"
}

function dragoverHandler(ev): void {
    ev.preventDefault()
    ev.dataTransfer.dropEffect = "move"
}

function dropHandler(ev): void {
    // get the id of the item to move and add it to the dom of the destination
    const id = ev.dataTransfer.getData('text/html')
    const elemToMove = document.getElementById(id)
    ev.target.appendChild(elemToMove)
}

function setDragStartHandler(): void {
    // get all the buttons
    const buttons = document.querySelectorAll('.options__btn')
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('dragstart', dragStartHandler)
    }
}



function setUp() : void {
    setDragStartHandler();
}


setUp()