function getDuplicateElements(inputList) {
    const uniqueSet = new Set();
    const duplicateSet = new Set(); // New set to store duplicate elements
    const duplicateList = [];

    for (let i = 0; i < inputList.length; i++) {
        const currentElement = inputList[i];
        if (uniqueSet.has(currentElement)) {
            // If the element is already in uniqueSet, add it to duplicateSet
            duplicateSet.add(currentElement);
        }
        uniqueSet.add(currentElement);

    }

    // Convert duplicateSet to an array (if needed)
   const temp= [...duplicateSet].sort((a,b)=>a-b)

    return temp;
}

const arr = [4,1,3,4,3,5,3,6,4]

console.log(getDuplicateElements(arr))