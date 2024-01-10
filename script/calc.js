// 1번 문제
// DOM 변수 등록
const userHeight = document.querySelector('#height');
const userWeight = document.querySelector('#weight');
const userGoal = document.querySelector('#goals');
const resultBtn = document.querySelector('#result');
// DOM 변수 데이터 정상 확인
console.log(userHeight, userWeight, userGoal, resultBtn);
//-----------------
// 2번 문제
/* 
< 절차 정리 >
· 목표: 사용자가 키와 몸무게를 입력하고 결과보기 버튼을 클릭하면 최종 목표에 적정 체중이 출력되고 팝업으로 적정 체중과 초과 몸무게가 출력된다.

1. 결과보기 버튼을 클릭하는 이벤트 생성
2. 변수 만들기 : 적정체중 계산(적정체중 = (본인신장-100)*0.9), 초과 몸무게(본인무게-적정체중)
3. 적정체중을 최종목표 칸에 출력
4. 적정체중과 초과체중을 팝업창으로 출력
*/
resultBtn.addEventListener('click',function(){
    // 계산 변수 만들기
    const result = (Number(userHeight.value) - 100)*0.9;
    const overWeight = Number(userWeight.value)-result;
    // 변수 정상 확인
    console.log(result,overWeight)
    // 최종목표 칸에 결과 출력
    userGoal.value = result;
    // 팝업 출력
    alert(`적정 체중은 ${result}kg이며 ${overWeight}kg 초과되셨습니다.`);
})
