function removeEveryOther(arr){
  //your code here
  let a = arr.filter((item, index) => index % 2 === 0);
  return a;
}