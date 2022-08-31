export function bubbleSort(array) {
    const animations = [];
    if (array.length <= 1) return array;
    array = bubbleSortHelper(array, animations);
    return animations;
}

function bubbleSortHelper(array, animations) {
    const n = array.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            animations.push([j, j + 1, "colorChange"]);
            //animations.push([j, j + 1]);
            if (array[j] > array[j + 1]) {
                animations.push([j, j + 1, "swap"]);
                //animations.push([j + 1, array[j]]);
                swap(array, j, j + 1);
            }
            else {
                animations.push([j,j+1, "colorRev"]); 
            }
            animations.push([j,j+1,"colorChange"]); 
        }
    }

    return array;
}

function swap(array, firstIndex, secondIndex) {
    const temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
}
