
/**
 * Changes if we are in removal mode or not
 * 
 * @param {true to turn on removal mode} booleanVar 
 */
function removalModeSet(booleanVar) {
    document.getElementById("treeContain").setAttribute("deleting", booleanVar)
}

/**
 * checks what removal mode is set to
 * 
 * @returns what removal mode is set to currently
 */
function removalModeGet() {
    const mode = document.getElementById("treeContain").getAttribute("deleting");
    return (mode === "true");
}

/**
 * enables each node to be pressed to delete itself
 */
function enableNodeButtons() {
    const isDisabled = !removalModeGet();

    for (let i = 1; i < getMaxNodeCount(); i++) {
        const space = document.getElementById(i);

        if (space != null && space.firstElementChild != null) {
            const node = space.firstElementChild;
            node.disabled = isDisabled;
            if (!isDisabled) {
                node.classList.replace("placeholder1", "hover:scale-125");
                node.classList.replace("placeholder2", "shiver");
            } else {
                node.classList.replace("hover:scale-125", "placeholder1");
                node.classList.replace("shiver", "placeholder2");
            }
        }
    }
}

/**
 * This function locks the other buttons in the UI, the ones that aren't the removal button
 */
function lockUI() {
    const isDisabled = removalModeGet();
    const panelElements = document.getElementById("input").parentElement.children;

    if (isDisabled) {
        for (const i of panelElements) {
            if (!i.classList.contains("immunity")) {
                i.disabled = true;
                i.classList.replace("hover:bg-red-400", "nuhuhuh");
            }
            i.classList.replace("holder1", "scale-90");
            i.classList.replace("holder2", "grayscale-75");

            i.classList.replace("border-cyan-400", "border-cyan-800");
        }
    } else {
        for (const i of panelElements) {
            i.disabled = false;
            i.classList.replace("scale-90", "holder1");
            i.classList.replace("grayscale-75", "holder2");
            i.classList.replace("nuhuhuh", "hover:bg-red-400");
            i.classList.replace("border-cyan-800", "border-cyan-400");
        }
    }

}