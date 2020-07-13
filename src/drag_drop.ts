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
    ev.dataTransfer.setData('text/plain', ev.target.id)
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
    const id = ev.dataTransfer.getData('text/plain')
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
 * Also, switch their id's - this will help in checking the answers
 * 
 */

function buttonSwitchingDragOverHandler(ev): void {
    ev.preventDefault()
    ev.dataTransfer.dropEffect = "copy"
}

/**
 * 
 * @param ev - event fired at the destination
 */
function buttonSwitchingDropHandler(ev): void {
    // get the id of the button to move, the one we are dropping
    const dropped_id = ev.dataTransfer.getData('text/plain')
    // we need the text in the source button, the one we are dropping
    const dropped_text = document.getElementById(dropped_id).innerText
    // get the text in the destination button, the one we are dropping on
    const destination_text = ev.target.innerText
    // ge the id of the destination button
    const dest_id = ev.target.id
    // switch their texts
    document.getElementById(dropped_id).innerText = destination_text // 
    document.getElementById(dest_id).innerText = dropped_text
    // switch their id. This is quite tricky
    // change the id of the one we are dropping
    document.getElementById(dropped_id).id = dest_id
    // now we cannot access the dropped via dropped_id because we have changed it
    // we now have two buttons with id=dest_id
    // query select both
    // the one that holds the dropped_text is the one to change its id
    // why? 
    // we have switched the texts, so the one that has the dropped_text is actually
    // the destination button
    const newElements = document.querySelectorAll(`#${dest_id}`)
    for (let i = 0; i < newElements.length; i++) {
        if (newElements[i].innerText === dropped_text) newElements[i].id = dropped_id
    }
}


function setUp(): void {
    setEventHandler('dragstart', dragstartHandler, '.options__btn')
    setEventHandler('dragover', dragoverHandler, '.question-box__drop-zone')
    setEventHandler('drop', dropHandler, '.question-box__drop-zone__text')

    setEventHandler('dragover', buttonSwitchingDragOverHandler, '.options__btn')
    setEventHandler('drop', buttonSwitchingDropHandler, '.options__btn')
}

setUp()