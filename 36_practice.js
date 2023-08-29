function betterThanAverage(classPoints, yourPoints) {
    // Your code here
    let gPA = 0;
    for (let i = 0; i < classPoints.length; i++) {
      gPA += classPoints[i];
    }
    gPA = gPA / classPoints.length;
    return yourPoints > gPA;
  }