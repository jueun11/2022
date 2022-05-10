    const secondHand = document.querySelector('.second-hand');
    //변수 지정. 쿼리셀렉터 .찍고 하는거봐선 클래스이다
    const minsHand = document.querySelector('.min-hand');
    const hourHand = document.querySelector('.hour-hand');

    function setDate() {
    //? 몰루 setDate가 머여
    //* date는 현재 시간에 관한 것이다
    const now = new Date();
    //? now라는 변수는 새 정보??
    //* Date함수는 현재 시간에 관한 정보를 가져오는 것 이었다. 함수 now는 말그대로 현재 시각을 의미
    const seconds = now.getSeconds();
    //? seconds라는 변수는 위의 now변수에서 무언가 계산된 것인가봄
    //* getSecond함수는 초를 의미한다.now가 현재 시간을 뜻하기에 이건 현재 "초"를 말하는 것이다
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    //*secondsDegrees라는 함수는 무언가 계산된 숫자다.
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    //*이전에 지정했던 함수 secondHard의 스타일. transform은 위의 계산된 각도이다.  
    const mins = now.getMinutes();
    //? mins라는 변수는 now(뉴 데이터)
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    //? minsDegrees라는 변수는 이전에 계산한 min을 또 계산하고 seconds도 또 계산함 어우 ;ㅋ
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;
    //? 전에 봤던 양식. 뒤에꺼는 변수+변수이다
    const hour = now.getHours();
    //? getHours라는 변수는 없다. 아마 이게 자바스립트 자체의 무언가일듯
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    //? hourDegress는 아까마냥 계산한 값이다
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    //? 돌아가는거 설정. 계산한 숫자들의 영향을 받는다
  }

  setInterval(setDate, 1000);
  //센인터블 1초마다 작동
  setDate();
  //*setDate는 날짜함수라고 함. 함수가 실행되는 시점의 날짜 및 시간 데이터를 가져오는 함수