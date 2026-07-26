/**
 * runs through the tree and resets each space ID to its proper ID, 
 * as it would be in a heapmin/heapmax array. O(n)
 */
function idReset() {
    const container = document.getElementById("treeContain");
    // in case the tree container is GONE????
    if (container == null) {
        alert("WHAT HAVE YOU DONE????");
    }

    container.firstElementChild.id = 1;
    idChangeFromRoot(1);
}

/**
 * Changes the ID of each root and its children based on the root given. O(n)
 * 
 * @param {int} root 
 */
function idChangeFromRoot(root) {
    const rootDiv = document.getElementById(root);
    const left = rootDiv.nextElementSibling;

    if (left != null) {
        const right = left.nextElementSibling;

        left.firstElementChild.id = (root * 2)
        right.firstElementChild.id = ((root * 2) + 1);
        idChangeFromRoot(left.firstElementChild.id);
        idChangeFromRoot(right.firstElementChild.id);
    }
}

/**
 * Creates the NIL spots on the tree under each node. O(n)
 */
function makeNullSpots() {
    for (let i = 1; i < getMaxNodeCount(); i++) {
        const space = document.getElementById(i);
        if (space != null && space.firstElementChild != null && space.parentElement.childElementCount < 3) {
            space.parentElement.innerHTML += '<div class="col-span-1 z-50 w-full h-full grid grid-cols-2 gap-2 justify-center">'
                + '<div class="col-span-2 z-50 justify-center items-center flex" id="' + (i * 2) + '"></div></div>'
                + '<div class="col-span-1 z-50 w-full h-full grid grid-cols-2 gap-2 justify-center">'
                + '<div class="col-span-2 z-50 justify-center items-center flex" id="' + ((i * 2) + 1) + '"></div ></div > '

        }
    }
}

/**
 * Ensures the root of the tree remains black. O(1)
 */
function treeRootCheck() {
    if (!isBlack(1)) {
        makeBlack(1);
    }
}