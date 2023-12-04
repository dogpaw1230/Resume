$(document).ready(function() {

    let hd_top_px = $('.header').height();

    // 초기 상태에서 animalBox 숨기기
    $('.animalBox').css('opacity', 0);
    
    $(window).scroll(function() {
        // 스크롤 위치가 헤더 높이보다 큰지 확인
        if (hd_top_px <= $(window).scrollTop()) {
            // 강아지 이미지의 투명도를 1로 애니메이션
            $('.animalBox').stop().animate({
                opacity: 1
            }, 500);
        }
        // 헤더 높이보다 작은 경우
        else if (hd_top_px > $(window).scrollTop()) {
            // 강아지 이미지와 텍스트의 투명도를 0으로 애니메이션
            $('.animalBox').stop().animate({
                opacity: 0,
            }, 500);
        }
    });

    // 초기 투명도 설정
    let opacity = 1;

    // stars_icon1 이미지를 3초에 한 번씩 반짝이게 하는 함수
    function blinkStarsIcon() {
        $('.animalBox > img').animate({
            opacity: opacity
        }, 500, function() {
            // 애니메이션 완료 후에 투명도 반전
            opacity = 1 - opacity;
        });
    }

    // 초기 실행
    blinkStarsIcon();

    // 3초마다 반복 실행
    setInterval(blinkStarsIcon, 2000);

    /* //////////////////////////////////////// */
    /* //////////////////////////////////////// */
    /* //////////////////////////////////////// */
    /* //////////////////////////////////////// */

    let text = "EUNBEEN";
    let text1 = "함께 일하고 싶은 개발자가 되겠습니다!"
    let textContainer = document.getElementsByClassName('nameBox')[0];
    let textContainer1 = document.getElementsByClassName('nameBox1')[0];
    let index = 0;
    let isFadingOut = false;
  
    function showNextCharacter() {
      if (index < text.length) {
        textContainer.textContent += text.charAt(index);
        index++;
        setTimeout(showNextCharacter, 500); // 다음 글자를 500밀리초 후에 나타내도록 설정
        textContainer1.textContent = text1;
      } else {
        // 글자가 다 나타난 후 2초 후에 fadeOut 함수 호출
        setTimeout(fadeOut, 2000);
      }
    }
  
    function fadeOut() {
      isFadingOut = true;
      textContainer.style.transition = "opacity 1s ease-in-out";
      textContainer1.style.transition = "opacity 1s ease-in-out";
      textContainer.style.opacity = 0; // 투명도를 0으로 설정하여 글자를 사라지게 함
      textContainer1.style.opacity = 0; // 투명도를 0으로 설정하여 글자를 사라지게 함
      setTimeout(fadeIn, 2000); // 1초 후에 fadeIn 함수 호출
    }
  
    function fadeIn() {
      isFadingOut = false;
      textContainer.textContent = ''; // 글자를 지우고
      textContainer1.textContent = ''; // 글자를 지우고
      textContainer.style.opacity = 1; // 투명도를 1로 설정하여 글자를 나타나게 함
      textContainer1.style.opacity = 1; // 투명도를 1로 설정하여 글자를 나타나게 함
      index = 0; // 인덱스 초기화
      setTimeout(showNextCharacter, 500); // 다시 글자를 나타내는 showNextCharacter 함수 호출
    }
  
    // 페이지 로딩 후 바로 실행
    showNextCharacter();

    /* //////////////////////////////////////// */
    /* //////////////////////////////////////// */
    /* //////////////////////////////////////// */
    /* //////////////////////////////////////// */
    $(document).ready(function() {
      $(".scrollToSection").on("click", function(e) {
          e.preventDefault();
  
          var target = $(this).data("target");
          var offset = $("#" + target).offset().top -100;
  
          $("html, body").animate({
              scrollTop: offset
          }, 1000); // 1000은 원하는 애니메이션 속도를 밀리초 단위로 나타냅니다.
      });
  });
  
});
