let nonSortedArray = [2, 3, 1, 4, 8, 5, 55, 44];

for (let i = 0; i < nonSortedArray.length - 1; i++) {
  for (let j = i + 1; j < nonSortedArray.length; j++) {
    if (nonSortedArray[i] > nonSortedArray[j]) {
      let a = nonSortedArray[j];
      nonSortedArray[j] = nonSortedArray[i];
      nonSortedArray[i] = a;
    }
  }
}
console.log("Sorted Array", nonSortedArray);
