/*
This implements the functions given in the slides, which are the same as the functions in
Introduction to Algorithms: Third Edition
*/

/**
 * This inserts a node with the given value into the Red Black Tree
 * 
 * @param {int} val 
 */
function insertNode(val) {
    let index = 1
    let data = getNodeData(index);

    if (data != null) {
        if (data > val) {
            index = insertNodeIndex(index * 2, val);
        } else {
            index = insertNodeIndex(index * 2 + 1, val)
        }
    } else {
        addNode(index, val);
    }

    // the tree was adding too fast, so I needed a LITTLE bit of time between 
    // the node being added, and redrawing lines.
    // 1ms was enough lol
    setTimeout(redrawLines, 1);

    RBFixUp(index);
}

/**
 * Fixes up the tree when a node is inserted. The node 
 * needs to be the leaf on the path we want to fix up.
 * O(log(n))
 * 
 * @param {int} node 
 */
function RBFixUp(node) {
    let flexibleNode = node;
    const div = document.getElementById(node);

    if (node > 1) {
        flexibleNode = RBFixUp1(node)
        flexibleNode = RBFixUp2(flexibleNode);
        flexibleNode = RBFixUp3(flexibleNode);


        makeNullSpots();
    }
    treeRootCheck();
}

/**
 * When the node and its parent and its auncle are all red, it turns the parent and auncle to black nodes
 * then makes the grandparent red. O(log(n))
 * 
 * @param {int} node 
 * @returns the top of the tree path of red nodes
 */
function RBFixUp1(node) {
    let child = node;
    let parent = findParent(node);
    let returnNode = node;

    if (child > 1 && isRed(parent)) {

        const auncle = findSibling(parent); // gender neutral aunt/uncle
        const grandparent = findParent(parent);

        if (isRed(auncle)) {
            invertColor(parent);
            invertColor(auncle);
            makeRed(grandparent);
            returnNode = RBFixUp1(grandparent);
        }
    }
    return (returnNode);
}

/**
 * If the auncle is black and the parent is red, we rotate on the parent
 * node to ensure both the child node and the parent node are on the same side
 * of the grandparent. Like if the parent was the left child, the inserted node
 * is now also a left child, and vice versa. O(1)
 * 
 * @param {int} node 
 * @returns formerly parent node now child node index
 */
function RBFixUp2(node) {

    const child = node;
    const parent = findParent(node);
    const auncle = findSibling(parent);
    const grandparent = findParent(parent);

    if (node <= 1 || isBlack(parent)) {
        return node;
    }

    if (isBlack(auncle) && isRed(parent)) {
        if (isLeftChild(node, parent) && !isLeftChild(parent, grandparent)) {
            rotateRight(parent);
            return (node + 1);
        } else if (!isLeftChild(node, parent) && isLeftChild(parent, grandparent)) {
            rotateLeft(parent);
            return (node - 1);
        }
    }
    return (node);
}

/**
 * If two red nodes are on the same side, make the parent of the node black, 
 * make its grandparent red, then rotate on the grandparent. O(1)
 * 
 * @param {int} node 
 * @returns the position of the grandparent node
 */
function RBFixUp3(node) {

    const parent = findParent(node);
    if (node <= 1 || isBlack(parent)) {
        return 1;
    }

    const grandparent = findParent(parent);
    const auncle = findSibling(parent);

    if (isLeftChild(node, parent) && isLeftChild(parent, grandparent)) {
        makeBlack(parent);
        makeRed(grandparent);
        rotateRight(grandparent);
        return (grandparent);
    } else if (!isLeftChild(node, parent) && !isLeftChild(parent, grandparent)) {
        makeBlack(parent);
        makeRed(grandparent);
        rotateLeft(grandparent);
        return (grandparent);
    }
    return (node);
}
