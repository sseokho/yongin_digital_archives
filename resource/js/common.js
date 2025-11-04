
$(function() {

    $(".board-table__inner").bind("touchstart",function() {
        $(".board-table__inner").addClass("on");
    });
});






$(".subContent__lnb li.active").click(function () {
    $(this).toggleClass('on');
    $(this).parent(".subContent__lnb").toggleClass('on');
       if ($(this).hasClass("on")) {
           $(this).addClass('on')
           $(this).parent(".subContent__lnb").addClass('on')
       } else if (!$(this).hasClass("on")) {
            $(this).removeClass('on')
            $(this).parent(".subContent__lnb").removeClass('on')
       }
   });



function loadScriptForScreenSize() {
    // 필요한 요소들을 선택합니다.
    const $subVisualWrap = $('.sub-container.research.view .subVisual-wrap');
    const $breadcrumbOther = $('.sub-container.research.view .breadcrumb-wrap .other .external');

    // 요소가 있을 때에만 진행합니다.
    if ($subVisualWrap.length && $breadcrumbOther.length) {
        // breadcrumbOther 요소의 화면 상단에서 아래까지의 위치를 계산합니다.
        const otherBottom = $breadcrumbOther.offset().top + $breadcrumbOther.outerHeight(true);

        // 3.082rem을 픽셀 단위로 변환합니다.
        const additionalHeight = 4 * parseFloat($('html').css('font-size'));

        // subVisualWrap의 높이를 설정합니다.
        $subVisualWrap.css('height', `${otherBottom + additionalHeight}px`);
    }

    var originalHref = $('.subContent__lnb li.active > a').attr('href');

    const width = window.innerWidth;
    // 화면 너비에 따른 스크립트 조건
    if (width < 1024) {
        $('.subContent__lnb li.active > a').attr('href', 'javascript:void(0)');


    } else{
        $('.subContent__lnb li.active > a').attr('href', originalHref);


    }
  }

  // 페이지가 로드될 때 실행
  window.addEventListener("load", loadScriptForScreenSize);

  // 화면이 리사이즈될 때 실행
  window.addEventListener("resize", loadScriptForScreenSize);





$(document).ready(function () {
    scan();
    selectBar();
    brad();
    sideMenu();
    race();
    simpleBar();

    scrollEvent();
    component();
    main_pop();
    /*dDay();*/
    callPop();
    mnav();
    searchModal();
    toggleSite();
    activeEvent();
    targetEvent();
    $('.sub-container').siblings('header').addClass("sub_header");
	$('.sub-container').siblings('footer').addClass("sub_footer");

});






autosize();
function autosize(){
    race();
    var text = $('.y-scroll textarea');

    text.each(function(){
        $(this).attr('rows',1);
        resize($(this));
    });

    text.on('input', function(){
        resize($(this));
    });

    function resize ($text) {
        $text.css('height', 'auto');
        $text.css('height', $text[0].scrollHeight+'px');
    }
}

function autoResize(textarea) {

}

function scrollEvent(){
     const scrollThreshold = 50;

     // 헤더 요소 선택
     const header = document.querySelector('.header');

     // 스크롤 이벤트 리스너 추가
     window.addEventListener('scroll', function() {
         // 현재 스크롤 위치 확인
         const scrollPosition = window.scrollY || window.pageYOffset;

         // 스크롤 위치가 특정 높이보다 크면 클래스 추가, 그렇지 않으면 제거
         if (scrollPosition >= scrollThreshold) {
             header.classList.add('scrolled');
         } else {
             header.classList.remove('scrolled');
         }
     });
}

function simpleBar(){
    if (typeof SimpleBar !== 'undefined') {  // SimpleBar가 정의되어 있을 때만 실행
        // 첫 번째 .x-scroll 요소들에 대해 SimpleBar 초기화
        document.querySelectorAll('.x-scroll').forEach(element => {
            new SimpleBar(element, {
                autoHide: false,       // 스크롤바가 항상 보이도록 설정
                direction: 'ltr',      // 스크롤 방향 설정 (왼쪽에서 오른쪽)
                scrollbarMinSize: 120,  // 손잡이의 최소 크기를 120px로 설정
                scrollbarMaxSize: 120,  // 손잡이의 최대 크기를 120px로 설정
            });
        });
    
        // 두 번째 .custom-select.sub:not(.checked) .options 요소들에 대해 SimpleBar 초기화
        document.querySelectorAll('.custom-select.sub:not(.checked) .options').forEach(element => {
            new SimpleBar(element, {
                autoHide: false,       // 스크롤바가 항상 보이도록 설정
                direction: 'ltr',      // 스크롤 방향 설정 (왼쪽에서 오른쪽)
                scrollbarMinSize: 120,  // 손잡이의 최소 크기를 120px로 설정
                scrollbarMaxSize: 120,  // 손잡이의 최대 크기를 120px로 설정
            });
        });
    } else {
        console.warn('SimpleBar is not defined. Please ensure that the SimpleBar library is loaded.');
    }


}

function sideMenu() {

    /* 모바일 따로 씀 */
    if (window.innerWidth <= 1024) {
        // 기존에 등록된 이벤트를 제거
        $('.sitemap').off('click');
        $('.side-menu--close').off('click');
        $('.side-menu__depth01').off('click');
        $('.side-menu--close, .side-menu__bg').off('click');

        $('.sitemap').click(function() {
            $(this).addClass('is-click');
            if ($(this).hasClass('is-click')) {
                $('.side-menu').addClass('is-open');
                $('body').addClass("overflow-hidden");
            } else {
                $('.side-menu').removeClass('is-open');
                $('body').removeClass("overflow-hidden");
            }
        });

        $('.side-menu--close').click(function() {
            $('.sitemap').removeClass('is-click');
            $(".side-menu").removeClass('is-open');
            $('body').removeClass("overflow-hidden");
        });

        $('.side-menu__depth02').hide();

        $('.side-menu--close, .side-menu__bg').click(function() {
            $('.sitemap').removeClass('is-click');
            $(".side-menu").removeClass('is-open');
            $('body').removeClass("overflow-hidden");
        });

        $('.side-menu__depth02').hide();

        $('.side-menu__depth01:not(.no-dep)').click(function() {
            $(this).toggleClass('is-open');
            $(this).parents(".side-menu__item").toggleClass('is-open');
            if ($(this).hasClass('is-open')) {
                $('.side-menu__depth01').not(this).removeClass("is-open");
                $('.side-menu__depth01').not(this).parents(".side-menu__item").removeClass("is-open");
                $('.side-menu__depth01').not(this).next().slideUp();
                $(this).next().slideDown();
            } else {
                $(this).next().slideUp();
            }
        });
    } else {
        // 기존에 등록된 이벤트를 제거
        $('.sitemap').off('click');
        $('.side-menu--close').off('click');

        $('.sitemap').click(function() {
            $(this).addClass('is-click');
            if ($(this).hasClass('is-click')) {
                $(".bg").addClass("sideOn");
                $('.side-menu').addClass('is-open');
                $('body').addClass("overflow-hidden");
            } else {

                $('.side-menu').removeClass('is-open');
                $('body').removeClass("overflow-hidden");
            }
        });

        $('.side-menu--close').click(function() {
            $(".bg").removeClass("sideOn");
            $('.sitemap').removeClass('is-click');
            $(".side-menu").removeClass('is-open');
            $('body').removeClass("overflow-hidden");
        });

        $('.side-menu__depth02').hide();


// .side-menu__item에 대해 마우스 오버/아웃 이벤트 처리
document.querySelectorAll('.side-menu__item').forEach((sideMenuItem) => {
    const depth01Link = sideMenuItem.querySelector('.side-menu__depth01');
    
    sideMenuItem.addEventListener('mouseenter', function() {
        // 부모 항목과 해당 메뉴의 depth01에 active 클래스 추가
        sideMenuItem.classList.add('active');
        if (depth01Link) {
            depth01Link.classList.add('active');
        }
    });

    sideMenuItem.addEventListener('mouseleave', function() {
        // 마우스가 벗어날 때 active 클래스 제거
        if (!sideMenuItem.querySelector('.side-menu__depth02:hover') && !sideMenuItem.querySelector('.side-menu__depth03:hover')) {
            sideMenuItem.classList.remove('active');
            if (depth01Link) {
                depth01Link.classList.remove('active');
            }
        }
    });
});

// .side-menu__depth02 항목에 대한 이벤트 처리
document.querySelectorAll('.side-menu__depth02 > li').forEach((depth02Li) => {
    const depth02Link = depth02Li.querySelector('a');
    
    depth02Li.addEventListener('mouseenter', function() {
        // 해당 li에 active 클래스 추가
        depth02Li.classList.add('active');
        
        // 상위 .side-menu__item에 active 클래스 추가
        const parentSideMenuItem = depth02Li.closest('.side-menu__item');
        if (parentSideMenuItem) {
            parentSideMenuItem.classList.add('active');
            const depth01Link = parentSideMenuItem.querySelector('.side-menu__depth01');
            if (depth01Link) {
                depth01Link.classList.add('active');
            }
        }
    });

    depth02Li.addEventListener('mouseleave', function() {
        // 마우스가 벗어날 때만 active 클래스 제거
        depth02Li.classList.remove('active');
        
        const parentSideMenuItem = depth02Li.closest('.side-menu__item');
        if (parentSideMenuItem && !parentSideMenuItem.querySelector('.side-menu__depth02:hover') && !parentSideMenuItem.querySelector('.side-menu__depth03:hover')) {
            parentSideMenuItem.classList.remove('active');
            const depth01Link = parentSideMenuItem.querySelector('.side-menu__depth01');
            if (depth01Link) {
                depth01Link.classList.remove('active');
            }
        }
    });
});

// .side-menu__depth03 항목에 대한 이벤트 처리
document.querySelectorAll('.side-menu__depth03 a').forEach((depth03Link) => {
    depth03Link.addEventListener('mouseenter', function() {
        // 해당 depth03 항목의 상위 li에 active 클래스 추가
        const parentLi = this.closest('li');
        if (parentLi) {
            parentLi.classList.add('active');
        }

        // 상위 .side-menu__depth02와 .side-menu__item에 active 클래스 추가
        const parentDepth02 = parentLi.closest('.side-menu__depth02');
        if (parentDepth02) {
            parentDepth02.classList.add('active');
            const parentSideMenuItem = parentDepth02.closest('.side-menu__item');
            if (parentSideMenuItem) {
                parentSideMenuItem.classList.add('active');
                const depth01Link = parentSideMenuItem.querySelector('.side-menu__depth01');
                if (depth01Link) {
                    depth01Link.classList.add('active');
                }
            }
        }
    });

    depth03Link.addEventListener('mouseleave', function() {
        // 마우스가 벗어날 때만 active 클래스 제거
        const parentLi = this.closest('li');
        if (parentLi) {
            parentLi.classList.remove('active');
        }

        const parentDepth02 = parentLi.closest('.side-menu__depth02');
        if (parentDepth02) {
            parentDepth02.classList.remove('active');
        }

        const parentSideMenuItem = parentDepth02.closest('.side-menu__item');
        if (parentSideMenuItem && !parentSideMenuItem.querySelector('.side-menu__depth02:hover') && !parentSideMenuItem.querySelector('.side-menu__depth03:hover')) {
            parentSideMenuItem.classList.remove('active');
            const depth01Link = parentSideMenuItem.querySelector('.side-menu__depth01');
            if (depth01Link) {
                depth01Link.classList.remove('active');
            }
        }
    });
});










    }
}

// sideMenu() 호출
sideMenu();

// 윈도우 리사이즈 시 이벤트 핸들러를 다시 등록
window.addEventListener('resize', function() {
    sideMenu();
});

function component(){
    var a = $(".tab__list .tab__item");
var b = a.length;

for (let i = 0; i < b; i++) {
    $('.tab__link').eq(0).addClass('active');
    $('.tab-panel').eq(0).addClass('open');
    $(".tab__link").eq(i).on('click', function(event) {
        event.preventDefault(); // 기본 동작 막기
        $('.tab__link').removeClass('active');
        $('.tab__link').eq(i).addClass('active');
        $('.tab-panel').removeClass('open');
        $('.tab-panel').eq(i).addClass('open');
    });
}

    // 모든 아코디언 헤더 요소를 가져옴
    const headers = document.querySelectorAll('.accordion-header');

    headers.forEach(header => {
      header.addEventListener('click', function() {
        // 현재 클릭된 항목의 콘텐츠 가져오기
        const content = this.nextElementSibling;
        this.classList.toggle("on")
        // 현재 콘텐츠를 토글
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
      });
    });


}

function callPop(){
	$('.popup:not(.if-check)').on('click', function(){


        var cp = $(this);
        var tabDisable;
        var nowScrollPos = $(window).scrollTop();

        $('body').css('overflow', 'hidden');
        $("#" + $(this).data('id')).parents('.pop-wrap').show();
        $("#" + $(this).data('id')).show();
        $('.pop-cont .close button,.pop-cont .btn-cancel').focus();


        function popClose(){
            $('body').css('overflow', 'auto');
            $(window).scrollTop(nowScrollPos);
            $('.pop-wrap').hide();
            $('.core, .abstract_cont').hide();
            self.focus();
            cp.focus();
        };
        $('.pop-wrap').find('.close, .close button, .btn-cancel').on('click', popClose);
        $('.pop-wrap').find('.pop-bg').on('click', popClose);

	});
	$('.close_all').click(function(){
		$(this).parents('.abstract_cont').hide();
	});

    $('.pop-wrap:not(.modalPop) .close').click(function(){
		$(this).parents('.pop-wrap').hide();
	});

}



function mnav() {
    $('header .nav .topRight .menu a.mo').click(function(){
        $('header .nav .navWrap').toggleClass('mopen');
        $('body').toggleClass('fixed');

    });

    $('.mtab__depth02').hide();
    $('.mtab__depth01').click(function(){

        $(this).toggleClass('is-open');

        if($(this).hasClass('is-open')){
        $(this).next().slideDown();
        }else{
        $(this).next().slideUp();
        }


    });




}

function searchModal() {
    $("header .nav .topRight .search a").click(function(){
        $(".modal.search").fadeIn();
        $('body').addClass('fixed');
      });

      $(".modal.search .modal-content .modal-body .modal-close").click(function(){
        $(".modal.search").fadeOut();
        $('body').removeClass('fixed');
      });

}

function toggleSite() {
    var cont_w = $('.inner').width();


    if(cont_w < 1024){
        $('header .gotoSite .d-flex .site').on("click",function(){
            $('header .gotoSite .d-flex ul' ).slideToggle('slow');
            $('header .gotoSite').toggleClass('on');
        });
    }else{
    }

	/*$('header .gotoSite .d-flex .site').click(function(){
		if(cont_w > 1200){
		}else{
            $('header .gotoSite .d-flex ul' ).slideToggle('slow');
            $('header .gotoSite').toggleClass('on');
		}
    });*/

}

function main_pop(){
    $(document).ready(function () {
        // 팝업창에 주어진 이름을 변수로 던져 저장된 쿠키가 있는지 확인
        var popup1 = getCookie('popup1');

        // 변수가 없을경우 팝업 출력
        if (!popup1) {
            popUpAction('popup1');
        }

        $(".btn_close").click(function(){
            $(".popup-main").addClass('hidden');
        })

    });

    // 쿠키 가져오기
    function getCookie(name) {
        var nameOfCookie = name + "=";
        var x = 0;
        while (x <= document.cookie.length) {
            var y = (x + nameOfCookie.length);

            if (document.cookie.substring(x, y) == nameOfCookie) {
                if ((endOfCookie = document.cookie.indexOf(";", y)) == -1)
                    endOfCookie = document.cookie.length;
                return unescape(document.cookie.substring(y, endOfCookie));
            }

            x = document.cookie.indexOf(" ", x) + 1;

            if (x == 0) break;
        }

        return "";
    } // 24시간 기준 쿠키 설정하기

    // expiredays 후의 클릭한 시간까지 쿠키 설정
    function setCookie24(name, value, expiredays) {
        var todayDate = new Date();

        todayDate.setDate(todayDate.getDate() + expiredays);

        document.cookie = name + "=" + escape(value) + "; path=/; expires=" + todayDate.toGMTString() + ";";
    }

    // 00:00 시 기준 쿠키 설정하기 // expiredays 의 새벽 00:00:00 까지 쿠키 설정
    function setCookie00(name, value, expiredays) {
        var todayDate = new Date(); todayDate = new Date(parseInt(todayDate.getTime() / 86400000) * 86400000 + 54000000);

        if (todayDate > new Date()) {
            expiredays = expiredays - 1;
        }

        todayDate.setDate(todayDate.getDate() + expiredays);

        document.cookie = name + "=" + escape(value) + "; path=/; expires=" + todayDate.toGMTString() + ";";
    }

    // 팝업출력
    function popUpAction(name) {
        // name으로 해당 팝업창 열기
        $("div[name=" + name + "]").fadeIn();
    }

    // 닫기버튼 클릭 이벤트
    $('.btn_close').click(function () {
        $(this).parent('.main_notice_pop').fadeOut();

        // 오늘하루 보지않기 체크 확인
        if ($("input:checkbox[name=today_close1]").is(":checked") == true) {
            setCookie00('popup1', "done", 1);
        }

        // name으로 해당 팝업창 닫기
        $(this).parent("div[name=" + name + "]").fadeOut();
    })





}




function scan(){

    
    const sel = document.querySelector('.header-select .sel');
    const option = document.querySelector('.header-select .option');
    
    if (sel && option) {
        const optionItems = document.querySelectorAll('.header-select .option li');

        // .sel 클릭 시 option 리스트 토글
        sel.addEventListener('click', function() {
            option.classList.toggle('show');
        });

        // optionItems 클릭 시 선택된 텍스트로 .sel 업데이트 및 option 리스트 숨기기
        optionItems.forEach(item => {
            item.addEventListener('click', function() {
                // 선택된 텍스트를 .sel에 반영
                sel.textContent = this.querySelector('button').textContent;
                
                // option 리스트 숨기기
                option.classList.remove('show');
            });
        });
    } else {
        console.error('Elements not found: .sel or .option');
    }

    
    

    
    


    const topBtn = document.querySelector('.topBtn');
    if (topBtn) { // 요소가 존재하는지 확인
        topBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    } else {
        return false;

    }

    $(".copyright span").attr('contenteditable','true');

/* 끝 */



/* 끝 */


    var all = $(".wrap");
    var ele = $(".sub-container")
    all.each((i,v) => {
        if($(ele).length < 0){
            $(".header").addClass("sub_header");
            $(".footer").addClass("sub_footer");


        }
    })

	var ele = $(".sub_header img,.sub_footer img")
    var link = $(".sub_header a,.sub_footer a")
    ele.each((i,v) => {
        $(v).attr("src", $(v).attr("src").replace("././","../../"));
    })
    link.each((i,v) => {
        $(v).attr("href", $(v).attr("href").replace("././","../../"));
    })
}



function brad(){
    var bradTit = $(".breadcrumb-tit").text();
    var btnOne = $(".breadcrumb-item:not(.next) .breadcrumb__tit");
    $(btnOne).html(bradTit);

    $(".all-menu__content .depth_1 > li > a").addClass("depth1_a");
    var depth1a = $(".depth1_a");
    var depth1aCopy = depth1a.clone();

    $(".breadcrumb-item:not(.next) .breadcrumb__links").html('');
    $(".breadcrumb-item:not(.next) .breadcrumb__links").html(depth1aCopy);
    depth1aCopy.each((i,v)=>{
        $(v).wrap('<li></li>');
    })


    /*  */
    if($(".subContent__lnb").length){
		if($(".subContent__lnb li").length >= 4){
            $(".subContent__lnb").addClass("len");
        }
        depth1a.each((i,v) => {
            var lnbActive = $(".subContent__lnb li.active").text();
            $(".breadcrumb__tit.is-active").html(lnbActive);

            var lnbList = $(".subContent__lnb li");
            var lnbListCopy = $(lnbList).clone();

            $(".breadcrumb-item.next .breadcrumb__links").html('');
            $(".breadcrumb-item.next .breadcrumb__links").html(lnbListCopy);

        })
    }else{//단일메뉴일때

        depth1a.each((i,v) => {
            var bradActive = $(".breadcrumb-item:not(.next) .breadcrumb__tit").text();
            var depth1aText = depth1a.eq(i).text();
            if(bradActive == depth1aText){
                depth1a.eq(i).addClass("include");
                var includeEle = $(".depth1_a.include ~ ul li a");
                var includeEleCopy = $(includeEle).clone();
                var includeTxt = includeEleCopy.text();

                $(".breadcrumb__tit.is-active").html(includeTxt);
                $(".breadcrumb__tit.is-active").next().html(includeTxt);

                $(".breadcrumb-item.next .breadcrumb__links").html('');
                $(".breadcrumb-item.next .breadcrumb__links").html(includeEleCopy);

            }
        })

    }
}

function activeEvent(){
    var ele = $(".table-basic--blue tbody > tr.is-active");
    ele.each((i,v) =>{
        $(v).prev().addClass("chil");
    })
    $(".list-situation li").click(function(){
        $(".list-situation li").removeClass("on");
        $(this).addClass("on");
    })

    var chapter = $(".chapter");
    chapter.each((i,v) =>{
        if($(v).find('p').length){

        }else{
            $(v).addClass('noLen');
        }

    })
}

function targetEvent(){
    $(function () {
        $('.subContent__lnb.target li a').click(function (){
            $('html, body').animate({scrollTop: $(this.hash).offset.top}, 300);
        });
    });
}



function selectBar() {
    // 'ui-checkbox' 클래스를 가진 모든 체크박스를 선택
    const checkboxes = document.querySelectorAll('.ui-checkbox');

    // 각 체크박스에 대해 change 이벤트 리스너 추가
    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            if (checkbox.checked) {
                console.log(`${checkbox.id} 체크박스가 체크되었습니다.`);
            } else {
                console.log(`${checkbox.id} 체크박스가 해제되었습니다.`);
            }
        });
    });


    

// sub 클래스가 있는 .custom-select 요소 처리
const subCustomSelects = document.querySelectorAll('.custom-select.sub');

document.addEventListener('click', (event) => {
    let isClickInside = false;

    subCustomSelects.forEach(customSelect => {
        const selected = customSelect.querySelector('.selected');
        const options = customSelect.querySelector('.options');
        const items = options.querySelectorAll('li');
        const checkboxes = options.querySelectorAll('.ui-checkbox'); // ui-checkbox 요소 선택
        const labels = options.querySelectorAll('.ui-label'); // ui-label 요소 선택

        // .selected 클릭 시 드롭다운 표시
        if (selected.contains(event.target)) {
            isClickInside = true;
            // 다른 선택 메뉴 닫기
            subCustomSelects.forEach(otherSelect => {
                if (otherSelect !== customSelect) {
                    otherSelect.querySelector('.options').classList.remove('show');
                    otherSelect.querySelector('.selected').classList.remove('on');
                }
            });
            options.classList.toggle('show');
            selected.classList.toggle('on');
        }

        // li 항목 클릭 시 .selected 텍스트 업데이트 및 메뉴 닫기
        items.forEach(item => {
            if (item.contains(event.target)) {
                // .custom-select에 checked 클래스가 없는 경우에만 업데이트
                if (!customSelect.classList.contains('checked')) {
                    isClickInside = true;
                    selected.textContent = item.textContent; // 선택된 항목 텍스트로 업데이트
                    options.classList.remove('show');
                    selected.classList.remove('on');
                }
            }
        });

        // ui-checkbox 클릭 시 options 닫히지 않도록 설정
        checkboxes.forEach(checkbox => {
            if (checkbox.contains(event.target)) {
                isClickInside = true;
                setTimeout(() => {
                    const checkedCount = options.querySelectorAll('.ui-checkbox:checked').length;
                    selected.querySelector('.count').textContent = checkedCount;
                }, 0);
            }
        });

        // ui-label 클릭 시에도 isClickInside 설정
        labels.forEach(label => {
            if (label.contains(event.target)) {
                isClickInside = true;
            }
        });
    });

    // 메뉴 밖을 클릭하면 모든 드롭다운 메뉴 닫기
    if (!isClickInside) {
        subCustomSelects.forEach(customSelect => {
            customSelect.querySelector('.options').classList.remove('show');
            customSelect.querySelector('.selected').classList.remove('on');
        });
    }
});





}



function race(){
    $(document).ready(function() {
        // a와 b 선택
        const $aItems = $('.navigation.depth_1 > li');
        const $bItems = $('.depth_2');

        // 배경 요소 및 header 선택
        const $bgElement = $('.bg');
        const $headerElement = $('.header'); // header 요소 선택
        const $containerElement = $('.container'); // container 요소 선택

        // hover 시 bg 높이를 업데이트하는 함수
        function updateBgHeight() {
            const headerHeight = $headerElement.outerHeight(); // header의 높이
            let maxHeight = 0;

            // 모든 depth_2의 높이를 측정하여 최대 높이 찾기
            $bItems.each(function() {
                maxHeight = Math.max(maxHeight, $(this).outerHeight());
            });

            // 모든 depth_2의 높이를 최대 높이에 맞춰 조정
            $bItems.each(function() {
                $(this).css('height', maxHeight + 'px'); // 모든 .depth_2의 높이를 최대 높이로 설정
            });

            // bg의 높이를 header의 높이 + depth_2의 최대 높이로 설정
            $bgElement.css('height', headerHeight + maxHeight + 'px');
        }

        // navi-bg 높이 업데이트 함수
        function updateNaviBgHeight($aItem) {
            const headerHeight = $headerElement.outerHeight(); // header의 높이
            const $relatedBItems = $aItem.find('.depth_2'); // 해당 aItem에 포함된 depth_2 선택

            let maxHeight = 0;
            $relatedBItems.each(function() {
                maxHeight = Math.max(maxHeight, $(this).outerHeight()); // 해당 depth_2의 최대 높이 측정
            });

            const $naviBgElement = $aItem.find('.navi-bg'); // 해당 aItem 내의 navi-bg 요소 선택
            $naviBgElement.css('height', headerHeight + maxHeight + 'px'); // navi-bg의 높이를 업데이트
        }

        // 초기 로드 시 bg 높이 계산
        $bgElement.css('height', '0'); // 초기 상태에서 .bg의 높이를 0으로 설정

        // a의 각 항목에 대한 이벤트 설정
        $aItems.each(function(index) {
            const $aItem = $(this);
            const $bItem = $bItems.eq(index);

            $aItem.on('mouseenter', function() {
                $headerElement.addClass('active');
                updateBgHeight(); // bg 높이 업데이트
                updateNaviBgHeight($aItem); // navi-bg 높이 업데이트
                $aItem.addClass('active');
                if ($bItem.length) {
                    $bItem.addClass('active');
                }
            });

            $aItem.on('mouseleave', function() {
                // aItem에서 나가면 active 클래스를 제거
                $aItem.removeClass('active');
                if ($bItem.length) {
                    $bItem.removeClass('active');
                }

                // header와 bg를 모두 벗어나면 active 해제
                if (!$headerElement.hasClass('active')) {
                    resetBgHeight();
                }
            });
        });

        // b의 각 항목에 대한 이벤트 설정
        $bItems.each(function(index) {
            const $bItem = $(this);
            const $aItem = $aItems.eq(index);

            $bItem.on('mouseenter', function() {
                $headerElement.addClass('active');
                updateBgHeight(); // bg 높이 업데이트
                updateNaviBgHeight($aItem); // navi-bg 높이 업데이트
                $aItem.addClass('active'); // 해당 aItem의 active 상태 유지
                $bItem.addClass('active'); // 해당 bItem의 active 상태 유지
            });

            $bItem.on('mouseleave', function(event) {
                // .depth_2에서 나가면 active 클래스를 제거
                $bItem.removeClass('active');

                // header와 bg를 모두 벗어나면 active 해제
                if (!$headerElement.is(event.relatedTarget) && !$bgElement.is(event.relatedTarget)) {
                    if (!$headerElement.hasClass('active')) {
                        resetBgHeight();
                    }
                }
            });
        });

        // bg와 header를 벗어났을 때 처리
        $(document).on('mouseleave', function(event) {
            if (!$headerElement.is(event.relatedTarget) && !$bgElement.is(event.relatedTarget)) {
                $headerElement.removeClass('active'); // header에서 active 클래스 제거
                resetBgHeight(); // bg 높이 초기화
            }
        });

        // container에 마우스가 올라갔을 때 header active 제거
        $containerElement.on('mouseenter', function() {
            $headerElement.removeClass('active'); // header에서 active 클래스 제거
            resetBgHeight(); // bg 높이 초기화
        });

        // bg 높이 초기화 함수
        function resetBgHeight() {
            $bgElement.css('height', 'auto'); // bg의 높이는 자동으로 설정
            // 모든 depth_2 높이를 초기 상태로 복원
            $bItems.css('height', 'auto'); // 원래 높이로 복원

            // navi-bg의 높이를 0으로 설정
            $('.navi-bg').css('height', '0'); // 모든 navi-bg 요소 높이를 0으로 설정
        }

        $('.depth_2 > li').each(function() {
            const $item = $(this);
            $item.on('mouseenter', function() {
                // Remove 'active' class from all siblings
                $item.siblings().removeClass('active');
                // Add 'active' class to the hovered item
                $item.addClass('active');
            });

            $item.on('mouseleave', function() {
                // Remove 'active' class when mouse leaves
                $item.removeClass('active');
            });
        });
    });



}

