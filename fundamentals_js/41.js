function testEven(n) {
    //Метод Number.isInteger() определяет, является ли переданное значение целым числом.
    if(Number.isInteger(n) == true) {
      return n % 2 == 0;
    } else { 
      return false;
  }
}