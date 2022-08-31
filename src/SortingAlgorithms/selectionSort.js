export function selectionSort(array) {
    const animations = [];
    for (let i = 0; i < array.length; i++) {
        let min = i;
        animations.push([i,i, "colorChange"]); //color change
        for(let j = i + 1; j < array.length; j++) {
            animations.push([j,j, "colorChange"]); //color change
            animations.push([j,j, "colorRev"]); //color revert

            if (array[j] < array[min])
                min = j;
        }
        animations.push([i,min, "swap"]); //swap
        animations.push([i,min, "colorRevall"]); //color revert
        swap(array, i, min);
    }

    return animations;
}

function swap(array, i, j) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}
