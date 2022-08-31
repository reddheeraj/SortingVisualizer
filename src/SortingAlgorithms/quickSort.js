export function quickSort(array) {
    const animations = [];
    if (array.length <= 1) return array;
    quickSortHelper(array, 0, array.length - 1, animations);
    //console.log(array);
    return animations;
}

function quickSortHelper(array, first, last, animations) {
    if (first < last) {
        let p = partition(array, first, last, animations);
        quickSortHelper(array, first, p - 1, animations);
        quickSortHelper(array, p + 1, last, animations);
    }
}

function partition(array, first, last, animations) {
    let pivot = array[first];
    let left = first + 1;
    let right = last;
    animations.push([first,first,"pivot"]);
    while (left <= right) {
        while (left <= right && array[left] <= pivot) {
            animations.push([left, right, "colorChange"]);
            animations.push([left, right, "colorRev"]);
            left++;
        }
        while (left <= right && array[right] > pivot) {
            animations.push([left, right, "colorChange"]);
            animations.push([left, right, "colorRev"]);
            right--;
        }
        if (left < right) {
            swap(array, left, right, animations);
            left++;
            right--;
        }
    }
    swap(array, first, right, animations);
    return right;
}

function swap(array, one, two, animations) {
    const temp = array[one];
    array[one] = array[two];
    array[two] = temp;
    animations.push([one, two, "colorChange"]);
    animations.push([one, two, "swap"]);
    animations.push([one, two, "colorRev"]);
}