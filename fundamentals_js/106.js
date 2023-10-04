function toCsvText(array) {
    let a = [];
   for (let i = 0; i < array.length; i++){
     a = array.join('\n');
   }
   return a;
 }