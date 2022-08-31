export function insertionSort(array) {
    const animations = [];
    for (let i = 1; i < array.length; i++) {
        let j = i - 1;
        let key = array[i];
        animations.push([i, i, "key"]);
        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            animations.push([j, j+1, "colorChange"]); //color change
            animations.push([j, j+1, "swap"]); //swap
            animations.push([j, j+1, "colorRev"]); //color revert
            j--;
        }
        animations.push([j + 1, j + 1, "keyRev"]); //key revert
        array[j + 1] = key;
    }
    return animations;
}

