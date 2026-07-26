
/**
 * When entered, or insert button is pressed, it takes the value from the input and inserts the a node 
 * with the value given into the tree.
 */
function insertButton() {

    let inputString = document.getElementById("input").value;

    /**
     * I don't know if I'm ALLOWED to admit this, but so much of my code is stolen from stack overflow, its not even funny
     * https://stackoverflow.com/questions/7148513/javascript-regular-expression-allow-only-numbers-and-commas
     */
    let inputArr = inputString.replace(/[^\d,]+/g, '').split(',');

    for (const i of inputArr) {
        insertNode(i);
    }

    document.getElementById("input").value = "";
}

/**
 * Enables/disables removal mode.
 */
function enableRemoval() {

    if (removalModeGet()) {
        removalModeSet(false);
    } else {
        removalModeSet(true);
    }
    enableNodeButtons();
    lockUI();

}

/**
 * Deletes the tree (except for one NIL slot at the root, but thats so everything doesn't break. Shhh)
 */
function clearTree() {
    document.getElementById("treeContain").innerHTML = '<div class="col-span-2 z-50 justify-center items-center flex" id="1"></div>'
    redrawLines();

    resetWidth("scrollContainer");
    resetWidth("theLineHolder");
}