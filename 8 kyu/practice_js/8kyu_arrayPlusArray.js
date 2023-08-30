function arrayPlusArray(arr1, arr2) {
   var x = [].concat(arr1, arr2)
   var s = 0;
   for (i = 0; i < x.length; i++) {
      s += x[i];
   }
   return s;
}