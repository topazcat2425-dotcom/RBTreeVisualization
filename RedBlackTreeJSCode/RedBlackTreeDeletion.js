/*
I just wanna say, this one file took me a full WEEK. I hate deletion.
*/

/**
 * Removes the node at the given spot.
 * 
 * @param {int} spaceID 
 */
function removeMe(spaceID) {

    RBDelete(parseInt(spaceID));

    setTimeout(redrawLines, 10);
}

/**
 * At the given ID, the node is deleted. O(1)
 * 
 * @param {int} ID 
 */
function wipeNode(ID) {
    document.getElementById(ID).innerHTML = "";
}

/**
 * This function deletes the node at the given spaceID. O(log(n))
 * 
 * @param {int} nodeID 
 */
function RBDelete(nodeID) {
    let y = nodeID;
    let isYBlack = isBlack(y);
    let x = null;

    // if left is null
    if (isNodeNull(nodeID * 2)) {
        x = nodeID * 2 + 1;
        swapNodes(nodeID, x);
        wipeNode(x);

        x = nodeID;

        // if right is null
    } else if (isNodeNull(nodeID * 2 + 1)) {
        x = nodeID * 2;
        swapNodes(nodeID, x);
        wipeNode(x);

        x = nodeID;

    } else {
        // get the minimum of the right subtree
        y = findMin(nodeID * 2 + 1);
        isYBlack = isBlack(y);
        let wasRed = !isBlack(nodeID);

        // console.log(x);

        swapNodeData(y, nodeID);

        moveTreeUpRight(y);
        x = y;
        if (wasRed) {
            console.log("was red");
            makeRed(nodeID);
        }
    }

    console.log(x);
    if (isYBlack) {
        idReset();
        RBDeleteFixUpHolyFuck(x);
    }
    treeRootCheck();
}

/**
 * This function fixes the tree after a node is deleted. O(log(n))
 * 
 * @param {int} node 
 */
function RBDeleteFixUpHolyFuck(node) {
    // this is the worst thing I've ever coded in my entire life.
    let x = node;

    while (x > 1 && isBlack(x)) {

        // if x is a left child
        if (x % 2 == 0) {
            // w is the right child
            let w = x + 1;
            let p = findParent(x);
            console.log(x, w, p);

            // case 1 (sibling is red)
            if (!isBlack(w)) {
                console.log("case 1 L");
                makeBlack(w);
                makeRed(p);

                rotateLeft(p);

                // makes the parent the parent again
                p = p * 2;
                x = p * 2;
                w = x + 1;
            }
            // case 2 (sibling has two black children)
            if (isBlack(w * 2) && isBlack(w * 2 + 1)) {
                console.log("case 2 L");
                makeRed(w);
                x = findParent(x);

            } else {
                // case 3 (the inner child of w is black)
                if (isBlack(w * 2 + 1)) {
                    console.log("case 3 L");
                    makeBlack(w * 2);
                    makeRed(w);
                    rotateRight(w);
                    w = x + 1
                }

                // case 4 (when the sibling is black, but the inner child is red)
                console.log("case 4 L");
                if (!isBlack(p)) {
                    makeRed(w);
                } else {
                    makeBlack(w);
                }
                makeBlack(p);
                makeBlack(w * 2 + 1);
                rotateLeft(p);
                x = 1;

            }
            // if the child is right, same deal really
        } else {

            // w is the LEFT child now
            let w = x - 1;
            let p = findParent(x);

            // case 1, right child version
            if (!isBlack(w)) {
                console.log("case 1 R");
                makeBlack(w);
                makeRed(p);

                rotateRight(p);

                // makes the parent the parent again
                p = p * 2 + 1;
                x = p * 2 + 1;
                w = x - 1;
            }
            // case 2, right child ver.
            if (isBlack(w * 2) && isBlack(w * 2 + 1)) {
                makeRed(w);
                x = findParent(x);
                w = x - 1;
                p = findParent(x);

            } else {
                // case 3, right child ver.
                if (isBlack(w * 2)) {
                    console.log("case 3 R");
                    makeBlack(w * 2 + 1);
                    makeRed(w);
                    rotateLeft(w);
                }
                // case 4, right child ver.
                console.log("case 4 R");
                if (!isBlack(p)) {
                    makeRed(w);
                } else {
                    makeBlack(w);
                }
                makeBlack(p);
                makeBlack(w * 2);
                rotateRight(p);
                x = 1;

            }
        }
    }
    // make x black
    makeBlack(x);
}