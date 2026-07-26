/**
 * Colours the root red. O(1)
 * 
 * @param {int} root 
 */
function makeRed(root) {
    const node = document.getElementById(root).firstElementChild;

    if (node != null) {
        node.classList.replace("bg-black", "bg-red-500");
    }
}

/**
 * Checks if the root is red. O(1)
 * 
 * @param {int} root 
 * @returns if root is red
 */
function isRed(root) {
    const node = document.getElementById(root).firstElementChild;
    let redQuestionMark = false;

    if (node != null) {
        redQuestionMark = node.classList.contains("bg-red-500");
    }

    return (redQuestionMark);
}

/**
 * Colours the root black. O(1)
 * 
 * @param {int} root 
 */
function makeBlack(root) {
    const node = document.getElementById(root).firstElementChild;

    if (node != null) {
        node.classList.replace("bg-red-500", "bg-black");
    }
}

/**
 * Checks if the root is black. O(1)
 * 
 * @param {int} root 
 * @returns if root is black
 */
function isBlack(root) {
    const node = document.getElementById(root);
    let blackQuestionMark = true;
    if (node != null && node.firstElementChild != null) {
        blackQuestionMark = node.firstElementChild.classList.contains("bg-black");
    }

    return (blackQuestionMark);
}

/**
 * Flips the colour of the node
 * 
 * @param {int} root 
 */
function invertColor(root) {
    // I'm not sure if I ever use this, but its cool!
    if (isBlack(root)) {
        makeRed(root);
    } else {
        makeBlack(root);
    }
}