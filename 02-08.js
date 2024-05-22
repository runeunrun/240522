//function 함수 (변수,변수,변수) => 변수는 기본값
function addContact3(name, phone, email = '이메일없음', age = 0) {
  console.log(name, phone, email, age);
}
//함수호출
//addContact3('이몽룡', '010-3434-8989', 'seoul', 123, 22);
addContact3();
