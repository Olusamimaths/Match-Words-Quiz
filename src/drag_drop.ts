/**
 * This function adds an event listner to an Html element
 * @param event - the type of event 
 * @param eventHandler - the function that handles the event
 * @param query - the query for selecting the element
 */
function setEventHandler(event: string, eventHandler, query: string): void {
    // get all the buttons
    const elements = document.querySelectorAll(query)
    for (let i = 0; i < elements.length; i++) {
        const elem = elements[i]
        elem.addEventListener(event, eventHandler)
    }
}

/**
 * Attached to the buttons to make them draggable unto the question boxes
 * @param ev - event fired on the source option button
 */
function dragstartHandler(ev): void {
    ev.dataTransfer.setData('text/html', ev.target.id)
    ev.dataTransfer.dropEffect = "move"
}

/**
 * Attached alongside dropHandler to the question box to make it droppable
 * @param ev 
 */
function dragoverHandler(ev): void {
    ev.preventDefault()
    ev.dataTransfer.dropEffect = "move"
}

function dropHandler(ev): void {
    // get the id of the item to move and add it to the dom of the destination
    const id = ev.dataTransfer.getData('text/html')
    const elemToMove = document.getElementById(id)
    // get the parent of the destination element
    const parent = ev.target.parentElement
    // add elemToMove as a sibling of the destination element
    parent.appendChild(elemToMove)
    // make the 'Drop here' text invisible
    parent.firstElementChild.style.opacity = 0
    // this helps to center the button
    parent.style.paddingBottom = '1rem'
}


/**
 * SWITCHING THE CONTENTS OF BUTTONS
 * when a button is dropped on another button
 * switch their text
 * how? 
 * drop handler holds the destination
 * drag start handler holds the source 
 * 
 */
function buttonSwitchingDragOverHandler(ev): void {
    ev.preventDefault()
    ev.dataTransfer.dropEffect = "copy"
}

function buttonSwitchingDropHandler(ev): void {
    // get the id of the button to move 
    const id = ev.dataTransfer.getData('text/html')
    // we only need the text in the button comming in
    const textSource = document.getElementById(id).innerText
    // get the text in the destination button
    const textDestination =  ev.target.innerText
    // switch their texts
    document.getElementById(id).innerText = textDestination
    ev.target.innerText = textSource
}


function setUp(): void {
    setEventHandler('dragstart', dragstartHandler, '.options__btn')
    setEventHandler('dragover', dragoverHandler, '.question-box__drop-zone')
    setEventHandler('drop', dropHandler, '.question-box__drop-zone__text')

    setEventHandler('dragover', buttonSwitchingDragOverHandler, '.options__btn')
    setEventHandler('drop', buttonSwitchingDropHandler, '.options__btn')
}

setUp()