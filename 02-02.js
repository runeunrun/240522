let msg = 'GLOBAL';
function outer() {
  let msg = 'OUTER';
  console.log(msg);
  if (true) {
    let msg = 'BLOCK';
    console.log(msg);
  }
}
console.log(msg); //전역 변수 부름
outer(); //지역 변수 부름
