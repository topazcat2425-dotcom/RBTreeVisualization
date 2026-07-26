
/**
 * Adds the data to a node at the index of spot. O(1)
 * 
 * @param {int} spot 
 * @param {int} data 
 */
function addNode(spot, data) {

    const emptySpace = document.getElementById(spot)

    emptySpace.innerHTML += '<button disabled onclick="removeMe(this.parentElement.id)" class="placeholder1 placeholder2 transition duration-300 rounded-full bg-red-500 border-white border-2 size-16 text-white font-bold place-content-center text-center">'
        + data + '</button>';
    emptySpace.parentElement.innerHTML += '<div class="col-span-1 z-50 w-full h-full grid grid-cols-2 gap-2 justify-center">'
        + '<div class="col-span-2 z-50 justify-center items-center flex" id="' + (spot * 2) + '"></div></div>'
        + '<div class="col-span-1 z-50 w-full h-full grid grid-cols-2 gap-2 justify-center">'
        + '<div class="col-span-2 z-50 justify-center items-center flex" id="' + ((spot * 2) + 1) + '"></div ></div > '

    resizeWidth();

    // it takes a little bit of time before the html updates positions, so we give it 10 miliseconds
    setTimeout(redrawLines, 10);
}

/**
 * Starting at the index, it traverses the tree finding the spot to add the value in val. O(lg(n))
 * 
 * @param {int} index 
 * @param {int} val 
 * @returns 
 */
function insertNodeIndex(index, val) {

    let data = getNodeData(index);

    if (data != null) {
        if (data > val) {
            return (insertNodeIndex(index * 2, val));
        } else {
            return (insertNodeIndex(index * 2 + 1, val));
        }
    } else {
        addNode(index, val);
        return (index);
    }
}