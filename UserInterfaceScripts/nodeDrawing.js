/*----------------------------------------------
Hello! I am Trevor, I made this.
-------------------------------------------------*/

/**
 * Its log base whatever. O(1)
 * 
 * @param {int} x 
 * @param {int} y 
 * @returns log base x of y
 */
function getBaseLog(x, y) {
    return Math.log(y) / Math.log(x);
}

/**
 * It finds the center value between num1 and num2. O(1)
 * 
 * @param {int} num1 
 * @param {int} num2 
 * @returns center between both numbers
 */
function getCenter(num1, num2) {
    if (num1 > num2) {
        return (getCenter(num2, num1));
    }
    let difference = num2 - num1;
    difference /= 2;
    return (num1 + difference);
}


/**
 * Draws a line on the canvas between s1 and s2. O(1)
 * 
 * @param {int} s1 
 * @param {int} s2 
 * @returns null if failed
 */
function drawLine(s1, s2) {
    // checks if they both exist first
    if (document.getElementById(s2) == null || document.getElementById(s2).firstElementChild == null) {
        return;
    }

    // gets the position of s1
    var position = document.getElementById(s1).firstElementChild.getBoundingClientRect();
    var x1 = getCenter(position.left, position.right);
    var y1 = getCenter(position.top, position.bottom);

    // gets the position of s2
    var position = document.getElementById(s2).firstElementChild.getBoundingClientRect();
    var x2 = getCenter(position.left, position.right);
    var y2 = getCenter(position.top, position.bottom);

    // draws the line by adding it to The Line Holder div
    const lineHolder = document.getElementById("theLineHolder");
    lineHolder.innerHTML += '<svg class="absolute fixed h-full w-full"> ' +
        '<line class="transition-all duration-300 z-10" x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '"' +
        'stroke-width="3" stroke="white" id="line" /></svg >';
}

/**
 * Deletes all the lines that have been drawn. O(1)
 */
function clearLines() {
    document.getElementById("theLineHolder").innerHTML = "";
}

/**
 * Clears then redraws every line between parent and child nodes. O(n)
 */
function redrawLines() {
    clearLines();

    for (let i = 0; i < getMaxNodeCount(); i++) {
        let leftNode = (i + 1) * 2;
        drawLine((i + 1), leftNode);
        drawLine((i + 1), (leftNode + 1));
    }
}
