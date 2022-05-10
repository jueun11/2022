// * 제이쿼리 주의보 이이이이이이잉★
var rangeSlider = function(){
  //?함수지정...
  var slider = $('.range-slider'),
  //* 달러표시는 걍 쿼리 셀렉터이다
      range = $('.range-slider__range'),
      value = $('.range-slider__value');
    
  slider.each(function(){
//* each 라고 하는건 제이쿼리 방식 javascript에서는 for each라고 한다
// * for each란 배열에서 활용가능한 메서드, 배열의 반복문, 배열의 처음부터 마지막 요소까지 반복하여 실행
// * 인자로 콜백함수를 받아옴, 주어진 콜백함수를 배열 각각 요소에 실행한다. 주로 쿼리셀렉터올을 이용하여 사용
    value.each(function(){
      var value = $(this).prev().attr('value');
      $(this).html(value);
    });

    range.on('input', function(){
      $(this).next(value).html(this.value);
      nextSiblings, previousSibling

      setAttribute;
      getAttribute;
    });
  });
};

rangeSlider();

//?제이쿼리 run