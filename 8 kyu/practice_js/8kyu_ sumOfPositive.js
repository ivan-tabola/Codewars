function positiveSum(arr) {
    let a = 0;
    for (i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        a += arr[i];
      }
    }
    return a;
  }