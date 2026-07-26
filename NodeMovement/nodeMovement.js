/*----------------------------------------------
Hello! I am Trevor, I made this.
-------------------------------------------------*/

/**
 * rotates the tree at the root to the left. O(n)
 * 
 * @param {int} root 
 */
function rotateLeft(root) {

    const bottomToBe = document.getElementById(root);
    const topToBe = document.getElementById((root * 2) + 1);

    moveTreeDownLeft(root * 2);

    document.getElementById(root * 2).innerHTML = bottomToBe.innerHTML;

    idReset();
    let leftsRightChild = ((root * 2) * 2) + 1;
    treeSwap(leftsRightChild, leftsRightChild + 1);

    moveTreeUpRight(root);
    idReset();

    setTimeout(redrawLines(), 1);
}

/**
 * rotates the tree at the root to the right. O(n)
 * 
 * @param {int} root 
 */
function rotateRight(root) {

    const bottomToBe = document.getElementById(root);
    const topToBe = document.getElementById((root * 2));

    moveTreeDownRight(root * 2 + 1);

    document.getElementById((root * 2) + 1).innerHTML = bottomToBe.innerHTML;

    idReset();
    let rightsLeftChild = ((root * 2 + 1) * 2);
    treeSwap(rightsLeftChild, rightsLeftChild - 1);

    moveTreeUpLeft(root);
    idReset();

    setTimeout(redrawLines(), 1);
}

/**
 * Swaps the entire node, including colour, between two spaces. O(1)
 * 
 * @param {int} node1 
 * @param {int} node2 
 */
function swapNodes(node1, node2) {
    const tempInnerHTML = document.getElementById(node1).innerHTML;
    document.getElementById(node1).innerHTML = document.getElementById(node2).innerHTML;
    document.getElementById(node2).innerHTML = tempInnerHTML;
}


/**
 * Swaps the data inside the nodes given, if one node is empty, it deletes the other node. O(1)
 * 
 * @param {int} node1 
 * @param {int} node2 
 */
function swapNodeData(node1, node2) {
    const div1 = document.getElementById(node1);
    const div2 = document.getElementById(node2);

    if (div1.innerHTML == "") {
        swapNodeData(node2, node1);
    } else if (div2.innerHTML == "") {
        div1.innerHTML = "";
    } else {
        const tempData = div1.firstElementChild.innerHTML;
        div1.firstElementChild.innerHTML = div2.firstElementChild.innerHTML;
        div2.firstElementChild.innerHTML = tempData;
    }
}