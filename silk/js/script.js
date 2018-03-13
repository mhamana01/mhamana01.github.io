
$('.instagram-line-up').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  variableWidth: true
});

//-----------------------------------------------------
//数量の選択
//------------------------------------------------------
$(function(){

    var valueElement = $('#value');
    function incrementValue(e){
        valueElement.text(Math.max(parseInt(valueElement.text()) + e.data.increment, 0));
        return false;
    }

    $('#plus').bind('click', {increment: 1}, incrementValue);

    $('#minus').bind('click', {increment: -1}, incrementValue);

});

//-----------------------------------------------------
//サイズを選択
//------------------------------------------------------


function myFunction(name)
{
document.getElementById("peep").innerHTML = "サイズを選択：" + name;
}


//-----------------------------------------------------
//カラーを選択
//------------------------------------------------------
function myColor(name)
{
document.getElementById("colorselect").innerHTML = "カラーを選択：" + name;
}


//-----------------------------------------------------
//Productカルーセル
//------------------------------------------------------



//-----------------------------------------------------
//Slide show
//------------------------------------------------------
  var slideShow = $('#slide-show');
  var slideLength = slideShow.find('li').length; //liの数
  var slidePaging = $('#slide-paging');

  //現状の番号
  var currentIndex = -1;

  var timer;

  changeSlide(0);

//画像を切り替える関数
function changeSlide(newIndex){

  //現在の番号を飛ばす
  if(currentIndex === newIndex){
    return;
  }

  //一旦タイマー停止
  if(timer){
    clearTimeout(timer);
    timer = null; //timerの値を空にする
  }

  if(currentIndex >= 0){
    //現在表示している写真を1秒でopacity0にする
    slideShow.find('li:eq('+currentIndex+')').animate({opacity:0},1000);
  }
    //次の写真を1秒でopacity１にする
    slideShow.find('li:eq('+newIndex+')').animate({opacity:1},1000);
    currentIndex = newIndex; //自分の番号を次の番号に更新

    //ページングの指定
    slidePaging.find('li').each(function(index){
        $(this).removeClass('selected');
        if(index ==currentIndex){
          $(this).addClass('selected');
        }

    });
    //タイマー
    timer = setTimeout(nextIndex,4000);
}

//番号を進める関数
function nextIndex(){
    var newIndex = currentIndex + 1;//次の番号
    if(newIndex >= slideLength){
      newIndex = 0;
    }
    changeSlide(newIndex);
}

//クリックイベント
slidePaging.find('li').each(function(index){
    $(this).on('click',function(){
      changeSlide(index);
    });
});

//-----------------------------------------------------
//Nav固定
//------------------------------------------------------

$(function() {
  var menu = $('header'),
  offset = menu.offset();
  $(window).scroll(function () {
    if($(window).scrollTop() > offset.top) {
      menu.addClass('fixed');
    } else {
      menu.removeClass('fixed');
    }
  });
});

//-----------------------------------------------------
//スクロール
//------------------------------------------------------
/*fade-up*/
    $(window).scroll(function (){
      var scrollNum = $(this).scrollTop();
      /*console.log(scrollNum);*/

            if (scrollNum > 300){
              $('.Product-feature').css({

                      'opacity':'1',
                      'transform':'translateY(0)',
                      '-webkit-transform':'translateY(0)',
                      '-moz-transform':'translateY(0)',
                      '-ms-transform':'translateY(0)'
                });
            } else if (scrollNum < 300) {
              $('.Product-feature').css({
                      'opacity':'0',
                      'transform':'translateY(100px)',
                      '-webkit-transform':'translateY(100px)',
                      '-moz-transform':'translateY(100px)',
                      '-ms-transform':'translateY(100px)'
                });
            }
        });

    // fade-up
      $(window).scroll(function (){
        var scrollNum = $(this).scrollTop();


              if (scrollNum > 600){
                  $('.new-arrivals').css({
                          'opacity':'1',
                          'transform':'translateY(0)',
                          '-webkit-transform':'translateY(0)',
                          '-moz-transform':'translateY(0)',
                          '-ms-transform':'translateY(0)'
                  });
              } else if (scrollNum < 600) {
                  $('.new-arrivals').css({
                          'opacity':'0',
                          'transform':'translateY(100px)',
                          '-webkit-transform':'translateY(100px)',
                          '-moz-transform':'translateY(100px)',
                          '-ms-transform':'translateY(100px)'
                  });
              }
          });
  // fade-up
    $(window).scroll(function (){
      var scrollNum = $(this).scrollTop();


            if (scrollNum > 1200){
                $('.content-inner').css({
                        'opacity':'1',
                        'transform':'translateY(0)',
                        '-webkit-transform':'translateY(0)',
                        '-moz-transform':'translateY(0)',
                        '-ms-transform':'translateY(0)'
                });
            } else if (scrollNum < 1200) {
                $('.content-inner').css({
                        'opacity':'0',
                        'transform':'translateY(100px)',
                        '-webkit-transform':'translateY(100px)',
                        '-moz-transform':'translateY(100px)',
                        '-ms-transform':'translateY(100px)'
                });
            }
        });
        // fade-up
          $(window).scroll(function (){
            var scrollNum = $(this).scrollTop();


                  if (scrollNum > 1200){
                      $('.silkimage').css({
                              'opacity':'1',
                              'transform':'translateY(0)',
                              '-webkit-transform':'translateY(0)',
                              '-moz-transform':'translateY(0)',
                              '-ms-transform':'translateY(0)'
                      });
                  } else if (scrollNum < 1200) {
                      $('.silkimage').css({
                              'opacity':'0',
                              'transform':'translateY(100px)',
                              '-webkit-transform':'translateY(100px)',
                              '-moz-transform':'translateY(100px)',
                              '-ms-transform':'translateY(100px)'
                      });
                  }
              });
    // fade-up
      $(window).scroll(function (){
        var scrollNum = $(this).scrollTop();


              if (scrollNum > 1700){
                  $('.instagram').css({
                          'opacity':'1',
                          'transform':'translateY(0)',
                          '-webkit-transform':'translateY(0)',
                          '-moz-transform':'translateY(0)',
                          '-ms-transform':'translateY(0)'
                  });
              } else if (scrollNum < 1700) {
                  $('.instagram').css({
                          'opacity':'0',
                          'transform':'translateY(100px)',
                          '-webkit-transform':'translateY(100px)',
                          '-moz-transform':'translateY(100px)',
                          '-ms-transform':'translateY(100px)'
                  });
              }
          });
