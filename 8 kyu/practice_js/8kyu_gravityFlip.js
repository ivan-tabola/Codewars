const flip=(d, a)=>{
    if (d == 'R') {
      return a.sort((x,y)=>x-y);
    } else if (d == 'L') {
      return a.sort((x,y)=>y-x);
    }  
  }