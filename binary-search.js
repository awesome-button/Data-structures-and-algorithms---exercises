function search(array, searchEle) {

    if (array.length === 1) {
        return array[0] === searchEle ? true : false;
    }
    let middleIdx = Math.floor(array.length / 2);

    let left = array.slice(0, middleIdx);
    let right = array.slice(middleIdx);

    return array[middleIdx] > searchEle ?
        search(left, searchEle) : search(right, searchEle);

}

search([1, 3, 8, 9, 10, 12, 15], 10);