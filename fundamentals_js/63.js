var cubeChecker = function(volume, side){  
    if (volume + side <= 0) {
      return false;
    } else if (volume == side ** 3) {
      return true;
    } else {
      return false;
    }
   }