/*----------------------------------------------
Hello! I am Trevor, I made this.
-------------------------------------------------*/

/**
 * Gets the data contained in the node specified, returns null if the node is empty. O(1)
 * 
 * @param {int} nodeNum  
 * @returns data at the node, or null if empty
 */
function getNodeData(nodeNum) {
    const node = document.getElementById(nodeNum);
    let returnThing = null;
    if (node != null) {
        if (node.firstElementChild != null) {
            returnThing = parseInt(node.firstElementChild.innerHTML)
        }
    }
    return (returnThing);
}

/**
 * gets the height of the tree O(n)
 * 
 * @returns the height of the tree
 */
function getHeight() {
    return (getHeightFromRoot(1));
}

/**
 * given a root on a tree, gets the height of said tree. O(n)
 * 
 * @param {int} root 
 * @returns height of the tree
 */
function getHeightFromRoot(root) {
    // why are there two functions for this? I got tired of having to type in 1 into getHeight()
    const tree = document.getElementById(root);
    let height = 0;

    // yes its recursive
    if (tree != null && getNodeData(tree.id) != null) {
        height = 1;
        let lHeight = getHeightFromRoot(root * 2);
        let rHeight = getHeightFromRoot((root * 2) + 1);

        if (lHeight > rHeight) {
            height += lHeight
        } else {
            height += rHeight;
        }
    }
    return (height);
}

/**
 * Gets the maximum possible number of nodes in the tree given the height. O(1)
 * 
 * @returns the maximum possible # of nodes
 */
function getMaxNodeCount() {
    // idk if this is still used anywhere
    return (Math.pow(2, getHeight()));
}

/**
 * this returns an array of empty (or nil) nodes in the tree. O(n)
 * 
 * @returns array of empty divs in the tree
 */
function getSpaces() {
    let spaces = [];

    for (let i = 1; i < getMaxNodeCount(); i++) {
        const spot = document.getElementById(i);
        if (spot != undefined) {
            spaces.push(spot);
        }
    }
    return (spaces);
}

/**
 * Gets ID of the parent of the node. O(1)
 * 
 * @param {int} node 
 * @returns parent of node
 */
function findParent(node) {

    if (parseInt(node) < 2) {
        return 1;
    }
    // lol, its just math
    return (Math.floor(parseInt(node) / 2));
}

/**
 * gets the ID of the sibling of the root. O(1)
 * 
 * @param {int} root 
 * @returns sibling of root
 */
function findSibling(root) {
    if (root == 1) {
        return 1
    }
    if (root % 2 == 0) {
        return (root + 1);
    } else {
        return (root - 1);
    }
}

/**
 * Returns if the node is the left child of the root. O(1)
 * 
 * @param {int} node 
 * @param {int} root 
 * @returns boolean if node is left child of root
 */
function isLeftChild(node, root) {
    return ((root * 2) == node);
}

function areChildrenNull(root) {
    const left = getNodeData(root * 2);
    const right = getNodeData((root * 2) + 1);

    return (left == null && right == null);
}

/**
 * Checks if the node given is NIL... or exists at all O(1)
 * 
 * @param {int} node 
 * @returns if the node is NIL
 */
function isNodeNull(node) {
    return (getNodeData(node) == null);
}

/**
 * Checks to see if both children of the node are black. O(1)
 * 
 * @param {int} node 
 * @returns if both children are black
 */
function areChildrenBlack(node) {
    return (isBlack(node * 2) && isBlack(node * 2 + 1))
}

/**
 * Finds the index of the max value from the subtree of root. O(lg(n))
 * Finally, our first logarithmic runtime!
 * 
 * @param {int} root 
 * @returns index of the max value from root
 */
function findMax(root) {
    let flexibleNode = root
    while (!isNodeNull(flexibleNode)) {
        flexibleNode = flexibleNode * 2 + 1;
    }
    return ((flexibleNode - 1) / 2)
}

/**
 * Finds the index of the min value from the subtree of root. O(lg(n))
 * Finally, our second logarithmic runtime!
 * 
 * @param {int} root 
 * @returns index of the min value from root
 */
function findMin(root) {
    let flexibleNode = root
    while (!isNodeNull(flexibleNode)) {
        flexibleNode = flexibleNode * 2;
    }
    return (flexibleNode / 2)
}