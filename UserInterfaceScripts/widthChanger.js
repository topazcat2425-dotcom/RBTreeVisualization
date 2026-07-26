/*----------------------------------------------
Hello! I am Trevor, I made this.
-------------------------------------------------*/

/**
 * Gets the last index of the "array" we're using to represent the tree. O(1)
 * 
 * @returns last space in the BST "array"
 */
function getLastSpace() {

    const spaces = getSpaces();
    smallestID = spaces[spaces.length - 1].id;

    return (smallestID);
}

/**
 * Replaces the width of the container holding the tree, so it can hold more tree elements. O(1)
 * Yes I know theres a for loop, but the classlist is a constant, so it runs at most like 10 times
 * 
 * @param {String} divID 
 * @param {int} newSize 
 */
function replaceWidth(divID, newSize) {
    // console.log(divID);
    const scroll = document.getElementById(divID);

    for (const classItem of scroll.classList) {
        // console.log(classItem);
        if (classItem.startsWith("w-")) {
            // console.log("replacing with ", newSize);
            scroll.classList.replace(classItem, "w-[" + newSize + "px]");
        }
    }
}

/**
 * Resets the width of the div to take up the full width of the div. It's never used,
 * but if YOU want to fix it, I welcome any modifications to my code, so this is here
 * for you.
 * O(1)
 * 
 * @param {String} divID 
 */
function resetWidth(divID) {
    const scroll = document.getElementById(divID);

    for (const classItem of scroll.classList) {
        // console.log(classItem);
        if (classItem.startsWith("w-")) {
            // console.log("replacing with ", newSize);
            scroll.classList.replace(classItem, "w-full");
        }
    }
}

/**
 * Changes the size of the tree container relative to the width of its smallest node. O(1)
 */
function resizeWidth() {

    setTimeout(() => {
        if (detectMinWidth() < 64) {
            let newSize = Math.ceil(getMaxNodeCount() / 2) * 75;

            replaceWidth("scrollContainer", newSize);
            replaceWidth("theLineHolder", newSize);
        }
    }, 1);
}

/**
 * Gets the pixel width of the smallest space on the tree. O(1)
 * 
 * @returns the pixel wdith of smallest space
 */
function detectMinWidth() {
    const smallest = getLastSpace();

    return (getSpaceWidth(smallest));
}

/**
 * Given the index of the space, it returns the width of that space in pixels
 * 
 * @param {int} num 
 * @returns pixel width of space
 */
function getSpaceWidth(num) {
    return (document.getElementById(num).getBoundingClientRect().width);
}