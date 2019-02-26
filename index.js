



function onScroll() {
  window.addEventListener("scroll", callbackFunc);
  function callbackFunc() {
    var YScroll = window.pageYOffset; // 브라우저 좌상단에서 스크롤된 픽셀 리턴
    if (YScroll > 100 ) {
        if (YScroll > prevYScroll) {
            header.classList.remove("upScroll");
            header.classList.add("scroll"); //header 태그에 "scroll" 클래스를 추가, scroll은 css에 작성함
           } else {
               header.classList.remove("scroll");
               header.classList.add("upScroll");
            }
    } else {
      header.classList.remove("scroll", "upScroll");
    }
    prevYScroll = YScroll;
  }
}

// 페이지 로드가 끝난 후 함수 호출
window.onload = function() {
    onScroll();
}

var map = null;

function initMap() {
    map = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(37.4657323, 126.959487),
        zoom: 11, // 줌 설정 : 1~14, 수치가 클수록 지도 확대(줌인)
        zoomControl : true, // 줌 컨트롤 표시 (기본값 표시안함)
        zoomControlOptions : { // 줌 컨트롤 오른쪽 위로 위치 설정
		position : naver.maps.Position.TOP_RIGHT // 오른쪽 위로 설정값
	},
    });
    marker = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.4657323, 126.959487),
    map: map
    });
    
}
// 기본 마커 표시하기
var marker = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.4657323, 126.959487),
    map: map
});