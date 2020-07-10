function dragstartHandler(ev): void {
    console.log('dragstart')
    ev.preventDefault()
    console.log(ev)
    ev.dataTransfer.dropEffect = "move"
    ev.dataTransfer.setData('text/html', ev.target.innerHTML)
    
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

function setEventHandler(event: string, eventHandler, query: string): void {
    // get all the buttons
    const elements = document.querySelectorAll(query)
    for(let i = 0; i < elements.length; i++) {
        const elem = elements[i]
        elem.addEventListener(event, eventHandler)
    }
}



function setUp() : void {
    // setDragStartHandler();
    setEventHandler('dragstart', dragstartHandler, '.options__btn')
    setEventHandler('dragover', dragoverHandler, '.question-box__drop-zone__text')
    setEventHandler('drop', dropHandler, '.question-box__drop-zone__text')
}


setUp()