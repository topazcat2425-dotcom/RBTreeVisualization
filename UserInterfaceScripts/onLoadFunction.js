/**
 * Run this onloading the html
 */
function settingUp() {
    // when scroll, redraw the lines
    window.addEventListener('scroll', () => {
        redrawLines();
    });

    // when scroll, redraw the lines
    document.getElementById("scrollContainer").addEventListener('scroll', () => {
        redrawLines();
    })

    // change lines upon screen resize
    window.onresize = function () {
        redrawLines();
    }

    document.getElementById("input").addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            insertButton();
        }
    })

    // preBuiltTrees();
}

/**
 * This function inserts the tree I've been using for testing.
 * comment away the trees you don't want, or have both!
 */
function preBuiltTrees() {
    // tree 1
    insertNode(500);
    insertNode(100);
    insertNode(200);
    insertNode(300);
    insertNode(250);
    insertNode(50);
    insertNode(75);
    insertNode(750);
    insertNode(150);
    insertNode(145);
    insertNode(240);
    insertNode(230);
    insertNode(270);

    // tree 2
    insertNode(5);
    insertNode(4);
    insertNode(1);
    insertNode(3);
    insertNode(11);
    insertNode(8);
    insertNode(15);
    insertNode(13);
    insertNode(23);
}