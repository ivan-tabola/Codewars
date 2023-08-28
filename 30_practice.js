function invert(array) {
    const numbers = [];
    for (let i = 0; i < array.length; i++) {
      numbers.push(-array[i]);
    }
    return numbers;
  }