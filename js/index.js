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
    // 메인화면에 텍스트 나타내기
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
    // 오른쪽 상단에 메뉴 누르면 해당 위치로 이동하기
    $(".scrollToSection").on("click", function(e) {
        e.preventDefault();

        var target = $(this).data("target");
        var offset = $("#" + target).offset().top -100;

        $("html, body").animate({
            scrollTop: offset
        }, 1000); // 1000은 원하는 애니메이션 속도를 밀리초 단위로 나타냅니다.
    });
  

    /* //////////////////////////////////////// */
    /* //////////////////////////////////////// */
    /* //////////////////////////////////////// */
    /* //////////////////////////////////////// */
    // blueHorizon 버튼 누르면 깃허브로 이동하기
    $("#blueHorizon").on("click", function() {
      // 특정 사이트 주소를 여기에 입력
      let targetUrl = "https://github.com/dogpaw1230/teamProject";

      // 새 창에서 사이트 열기
      window.open(targetUrl, "_blank");
    })

    // 오르리청산 페이지 보기 버튼 누르면 깃허브로 이동하기
    $("#orriChungsan").on("click", function() {
      // 특정 사이트 주소를 여기에 입력
      let targetUrl = "https://dogpaw1230.github.io/frontendProject/1.index.html";

      // 새 창에서 사이트 열기
      window.open(targetUrl, "_blank");
    })

    // contact의 깃 버튼 누르면 깃허브로 이동하기
    $(".git").on("click", function() {
      // 특정 사이트 주소를 여기에 입력
      let targetUrl = "https://github.com/dogpaw1230";

      // 새 창에서 사이트 열기
      window.open(targetUrl, "_blank");
    })

    // contact의 깃 버튼 누르면 깃허브로 이동하기
    $(".blog").on("click", function() {
      // 특정 사이트 주소를 여기에 입력
      let targetUrl = "https://velog.io/@dogpaw1230";

      // 새 창에서 사이트 열기
      window.open(targetUrl, "_blank");
    })

    // 메일 팝업창
    document.getElementById('showEmail').addEventListener('click', function() {
      document.getElementById('emailPopup').style.display = 'block';
    });
  
    document.getElementById('closeBtn').addEventListener('click', function() {
      document.getElementById('emailPopup').style.display = 'none';
    });

    document.getElementById('emailAddress').addEventListener('click', copyEmail);

    function copyEmail() {
      var emailAddress = document.getElementById('emailAddress');
      var range = document.createRange();
      range.selectNode(emailAddress);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
      document.execCommand('copy');
      window.getSelection().removeAllRanges();
      alert('메일주소가 복사되었습니다!');
    }
  
});
