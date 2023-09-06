function cookie(x){
    let a = typeof x; //Оператор typeof возвращает строку, указывающую тип операнда.
    if (a == "string") {
      return "Who ate the last cookie? It was Zach!";
    } else if (a == "number") {
      return "Who ate the last cookie? It was Monica!";
    } else {
      return "Who ate the last cookie? It was the dog!";
    }
  }