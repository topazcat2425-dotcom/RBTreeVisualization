/* 
They call this file a lumberjack, cause it moves trees. get it?
I was just getting tired of them cluttering NoveMovement
*/

/**
 * moves the tree starting at root down one element layer of the tree to the left. O(n)
 * 
 * @param {int} root 
 */
function moveTreeDownLeft(root) {
    const treeRoot = document.getElementById(root).parentElement;
    if (document.getElementById(root * 2) != null) {
        const leftSibling = document.getElementById(root).nextElementSibling;
        leftSibling.innerHTML = treeRoot.innerHTML;
        makeNullSpots();
    }
}

/**
 * moves the tree starting at root down one element layer of the tree to the right. O(n)
 * 
 * @param {int} root 
 */
function moveTreeDownRight(root) {
    const treeRoot = document.getElementById(root).parentElement;
    if (document.getElementById(root * 2) != null) {
        const rightSibling = document.getElementById(root).nextElementSibling.nextElementSibling;
        rightSibling.innerHTML = treeRoot.innerHTML;
        makeNullSpots();
    }

}

/**
 * moves the tree starting at the roots left child, and moves it on top of the node at the root. O(n)
 * 
 * @param {int} root 
 */
function moveTreeUpLeft(root) {
    const treeRoot = document.getElementById(root);
    const leftChild = document.getElementById(root * 2);
    const leftGrandchild = document.getElementById((root * 2) * 2);
    treeRoot.innerHTML = leftChild.innerHTML;
    if (leftGrandchild != null) {
        leftChild.parentElement.innerHTML = leftGrandchild.parentElement.innerHTML;
    }
    makeNullSpots();
}

/**
 * moves the tree starting at the roots right child, and moves it on top of the node at the root. O(n)
 * 
 * @param {int} root 
 */
function moveTreeUpRight(root) {
    const treeRoot = document.getElementById(root);
    const rightChild = document.getElementById(root * 2 + 1);
    const rightGrandchild = document.getElementById((root * 2 + 1) * 2 + 1);
    treeRoot.innerHTML = rightChild.innerHTML;
    if (rightGrandchild != null) {
        rightChild.parentElement.innerHTML = rightGrandchild.parentElement.innerHTML;
    }
    makeNullSpots();
}

/**
 * Swaps the tree at root1 and root2. O(n)
 * 
 * @param {int} root1 
 * @param {int} root2 
 */
function treeSwap(root1, root2) {
    makeNullSpots();

    if (document.getElementById(root1) == null) {
        treeSwap(root2, root1);
    }

    const tree1 = document.getElementById(root1).parentElement;
    const tree2 = document.getElementById(root2).parentElement;
    let tempInner = tree1.innerHTML;

    tree1.innerHTML = tree2.innerHTML;
    tree2.innerHTML = tempInner;

    makeNullSpots();
}

/*
WHY IS IT ALL ON O(n)
because of makeNullSpots();
thats O(n), so everything its used in is in O(n)
*/