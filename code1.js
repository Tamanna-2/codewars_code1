// our goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]





function arrayDiff(a, b) {
    // Create a new array to store the result
    let result = [];

    // Iterate through each element in array a
    for (let i = 0; i < a.length; i++) {
        let found = false;
        // Check if the current element exists in array b
        for (let j = 0; j < b.length; j++) {
            if (a[i] === b[j]) {
                found = true;
                break;
            }
        }
        // If the element is not found in array b, add it to the result array
        if (!found) {
            result.push(a[i]);
        }
    }
    return result;
}

// Test cases
console.log(arrayDiff([1,2],[1]));         // Output: [2]
console.log(arrayDiff([1,2,2,2,3],[2]));   // Output: [1, 3]
