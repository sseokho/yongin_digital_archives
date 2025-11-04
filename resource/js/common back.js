
$(function() {

    $(".board-table__inner").bind("touchstart",function() {
        $(".board-table__inner").addClass("on");
    });
});


window.addEventListener('resize', function(){
    if (window.innerWidth <= 1024) {
      $(".subContent__lnb li.active > a").attr('href', 'javascript:void(0)');

      
    }
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








$(document).ready(function () {
    footerScript(); // 푸터 전용 스크립트
    tab();
    main_pop();
    /*dDay();*/
    callPop();
    mnav();
    searchModal();
    toggleSite();
    simpleBar();
	scan();
    $('.sub-container').siblings('header').addClass("sub_header");
	$('.sub-container').siblings('footer').addClass("sub_footer");
   
    

});

function autoResize(textarea) {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
    return false;

    autoResize(textarea);
}




function footerScript(){
    $(".btn--goSel").click(function() {
        if($("#family_site option:selected").val() != "") {
            window.open($("#family_site option:selected").val());
        } else {
            alert("패밀리 사이트를 선택해주세요.");
        }
    });


    $(".copyright span").attr('contenteditable','true');
}
function sideMenu(){

        $('.sitemap').click(function(){
          $(this).addClass('is-click');
            if($(this).hasClass('is-click')){
                $('.side-menu').addClass('is-open');
                $('body').addClass("overflow-hidden");

            }else{
                $('.side-menu').removeClass('is-open');
                $('body').removeClass("overflow-hidden");
            }
        });
        $('.side-menu--close,.side-menu__bg').click(function(){
            $('.sitemap').removeClass('is-click');
            $(".side-menu").removeClass('is-open');
            $('body').removeClass("overflow-hidden");
        });
        $('.side-menu__depth02').hide();

        $('.side-menu__depth01:not(.no-dep)').click(function(){
          $(this).toggleClass('is-open');

          if($(this).hasClass('is-open')){
            $('.side-menu__depth01').not(this).removeClass("is-open")
            $('.side-menu__depth01').not(this).next().slideUp();

            $(this).next().slideDown();
          } else{
            $(this).next().slideUp();

          }

        });




}
function tab(){
    var a = $(".tab__list .tab__item");
    var b = a.length;

    for (let i=0;i<b;i++){
        $('.tab__link').eq(0).addClass('active');
        $('.tab-panel').eq(0).addClass('open');
        $(".tab__link").eq(i).on('click',function(){
            $('.tab__link').removeClass('active');
            $('.tab__link').eq(i).addClass('active');
            $('.tab-panel').removeClass('open');
            $('.tab-panel').eq(i).addClass('open');
        })
    }
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

function simpleBar(){
    var a = $(".y-scroll").length;
    
    for (let i=0;i<a;i++){
        new SimpleBar(document.querySelectorAll('.y-scroll')[i], {
            autoHide: false,
            scrollbarMinSize: 1,
            scrollbarMaxSize: 0,
            direction: 'rtl',
            timeout: 1000
        })
    }


    var b = $(".board-layout--calendar .board-table__inner").length;
    
    for (let i=0;i<b;i++){
        new SimpleBar(document.querySelectorAll('.board-table__inner')[i], {
            autoHide: false,
            scrollbarMinSize: 1,
            scrollbarMaxSize: 0,
            direction: 'rtl',
        })
    }
    
    
    


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

    $('.navigation,.all-menu').hover(function() {
        $(".all-menu").addClass("active");
    }, function(){
        $(".all-menu").removeClass("active");
    });
	
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
    var memTit = $(".sub-container.myPage .breadcrumb-tit").text();
    var mem = $(".sub-container.myPage .subContent__lnb").html();
    $(".sub-container.myPage .breadcrumb__tit").html(memTit);
    $(".sub-container.myPage .breadcrumb-item.next .breadcrumb__links").html(mem);

    
    
    $(".all-menu__content .depth_1 > li > a").addClass("depth1_a");

        
        
    var depth1a = $(".depth1_a");
    
    depth1a.each((i,v) => {
        var subCon = $(".sub-container");
        var depth1aEle = depth1a.eq(i);
        var depth1aTxt = depth1a.eq(i).text();
        
        var bradTit = $(".breadcrumb-tit").text();
        if($(subCon).is(".community") === true) {
            if(depth1aTxt.includes(bradTit)){
                depth1aEle.addClass('active');
            }
        } 
        if($(subCon).is(".coaching") === true) {
       
            

           if(depth1aTxt.includes(bradTit)){
                depth1aEle.addClass('active');
            }
        }
        if($(subCon).is(".myPage") === true) {
            
            if(depth1aTxt.includes(bradTit)){
                 $(".breadcrumb__tit").html(bradTit);
            }
         }
         

        /*
        if($(subCon).is(".community") === true) {
            if(depth1aTxt == "커뮤니티"){
                depth1aEle.addClass('active');
            }
            
        } else {
            return false;
        }
       */
    });


    var aa = $(".depth1_a");
    var subMainTit = $(".subContent__lnb li.active > a").text();
    $(".breadcrumb__tit.is-active").html(subMainTit);

    


    var toss = $(".depth1_a.active").next().html();
    $(".breadcrumb__tit.is-active").next(".breadcrumb__links").html(toss);

    aa.each((i,v) => {
        var bradActive = $(".breadcrumb__tit.is-active").text();
        var depth1a = $(".depth1_a");
        var depth1aText = depth1a.eq(i).text();
        if(bradActive == depth1aText){
            depth1a.eq(i).addClass("include");
        }
    });

    var aa = $(".depth1_a");
    var aaActive = $(".depth1_a.active").text();
    var aaClone = aa.clone();

    $(".sub-container:not(.myPage) .breadcrumb__tit:not(.is-active)").text(aaActive);
    $(".breadcrumb__tit:not(.is-active) ~ .breadcrumb__links").html(aaClone);
    $(".breadcrumb__links").children('a').wrap( '<li></li>' );

    if($('.breadcrumb__tit.is-active').length){
       
    }else{
        $(".breadcrumb-item:not(.next) .breadcrumb__tit").addClass("is-active");
    }


    $(".sub-container.coaching .breadcrumb__tit.is-active").html("접수하기");
}



