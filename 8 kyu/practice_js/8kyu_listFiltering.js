function filter_list(l) {
    // Return a new array with the strings filtered out
    let a = [];
    for(let i = 0; i < l.length; i++) {
      if(typeof l[i] == "number") {
        a.push(l[i]);
      }
    }
    return a;
  }