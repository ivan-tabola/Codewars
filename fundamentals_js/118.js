function countPositivesSumNegatives(input) {
    let arr = [0, 0];
    if (input == null || input.length == 0) {
      return [];
    }
    for (let i of input) {
      if (i > 0) {
        arr[0]++
      } else {
        arr[1] += i;
      }
    }
    return arr;
  }
  