let obj = { result: 0 };

obj.add = function add(x, y) {
  //anonymous 익명함수
  this.result = x + y;
};

let add2 = obj.add; //위 함수와 똑같음.

console.log(add2 === obj.add);

add2(3, 4);
console.log(obj);
console.log(result);
