function dragstartHandler(ev): void {
    console.log('dragstart')
    ev.dataTransfer.setData('text/html', ev.target.id)
    ev.dataTransfer.dropEffect = "move"
}

function dragoverHandler(ev): void {
    console.log('dragover')
    ev.preventDefault()
    ev.dataTransfer.dropEffect = "move"
}

function dropHandler(ev): void {
    console.log('drop')
    // get the id of the item to move and add it to the dom of the destination
    const id = ev.dataTransfer.getData('text/html')
    const elemToMove = document.getElementById(id)
    // get the parent of the destination element
    const parent = ev.target.parentElement
    // add elemToMove as a sibling of the destination element
    parent.appendChild(elemToMove)
    // make the 'Dro here' text invisible
    parent.firstElementChild.style.opacity = 0
}

function setEventHandler(event: string, eventHandler, query: string): void {
    // get all the buttons
    const elements = document.querySelectorAll(query)
    for (let i = 0; i < elements.length; i++) {
        const elem = elements[i]
        elem.addEventListener(event, eventHandler)
    }
}

function buttonDragOverHandler(ev): void {
    console.log('dragover button')
    ev.preventDefault()
    ev.dataTransfer.dropEffect = "copy"
}

function buttonDropHandler(ev): void {
    console.log('drop button')
    // get the id of the item to move and add it to the dom of the destination
    const id = ev.dataTransfer.getData('text/html')
    const textSource = document.getElementById(id).innerText
    
    const textDestination =  ev.target.innerText
    // switch their texts
    document.getElementById(id).innerText = textDestination
    ev.target.innerText = textSource
}
/**
 * when a button is dropped on another button
 * switch their text
 * how? 
 * drop handler holds the destination
 * drag start handler holds the source 
 * 
 */





function setUp(): void {
    setEventHandler('dragstart', dragstartHandler, '.options__btn')
    setEventHandler('dragover', dragoverHandler, '.question-box__drop-zone')
    setEventHandler('drop', dropHandler, '.question-box__drop-zone__text')

    setEventHandler('dragover', buttonDragOverHandler, '.options__btn')
    setEventHandler('drop', buttonDropHandler, '.options__btn')
}

setUp()