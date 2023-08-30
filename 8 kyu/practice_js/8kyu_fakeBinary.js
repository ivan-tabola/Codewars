function fakeBin(x){
    let a = "";
    for (let i = 0; i < x.length; i++) {
      if (x[i] >= 5) {
         a += "1";
      } else {
         a += "0";
      }
    } 
    return a;
  }