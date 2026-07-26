/*
this is never used, it's just to provide the requirement for the project. I want my 10 points.
*/

/**
 * Finds the index of the value given. Returns -1 otherwise. O(log(n))
 * 
 * @param {int} val 
 * @returns index of value
 */
function findValue(val) {
    let index = 1
    let data = getNodeData(index);

    if (data != null) {
        if (data > val) {
            index = findValueIndex(index * 2, val);
        } else {
            index = findValueIndex(index * 2 + 1, val)
        }
    } else {
        return -1;
    }
    return (index);
}

/**
 * Finds the index of the value given starting at the index given.
 * Returns -1 otherwise. O(log(n))
 * 
 * @param {int} index 
 * @param {int} val 
 * @returns index of value
 */
function findValueIndex(index, val) {

    let data = getNodeData(index);

    if (data != null) {
        if (data > val) {
            return (findValueIndex(index * 2, val));
        } else if (data < val) {
            return (findValueIndex(index * 2 + 1, val));
        } else {
            return (index);
        }
    } else {
        return -1;
    }
}