//-----------------------------------------------------
//数量の選択
//------------------------------------------------------
$('#minus').on('click', function() {
  $('#output').html(function(i, val) { return val*1-1 });
});

$('#output').on({
  'click': function(){...},
  'click': function(){...}
});

//-----------------------------------------------------
//サイズを選択
//------------------------------------------------------
$(function() {

  //ボタンをクリックしたら発動
  $('button').click(function() {

    //div要素にテキストボックスを追加
    $('div').append('<input type="radio" name="text_box">');

  });
  //上で生成した要素に普通のchange()を発動
  $('input[type="radio"]').change(function() {

    //選択したvalue値を変数に格納
    var val = $(this).val();

    //選択したvalue値をp要素に出力
    $('.size').text(val);
  });
});



//-----------------------------------------------------
//カラーを選択
//------------------------------------------------------

$(function() {

  //ボタンをクリックしたら発動
  $('button').click(function() {

    //div要素にテキストボックスを追加
    $('div').append('<input type="radio" name="text_box">');

  });
  //上で生成した要素に普通のchange()を発動
  $('input[type="radio"]').change(function() {

    //選択したvalue値を変数に格納
    var val = $(this).val();

    //選択したvalue値をp要素に出力
    $('.h5').text(val);
  });
});
*/
//-----------------------------------------------------
//Productカルーセル
//------------------------------------------------------

$('.slider-for').slick({
    arrows:false,
    fade:true,
    speed: 500,
    infinite: true,

    afterChange: function (slickSlider, i) {
        //remove all active class
        $('.slider-nav .slick-slide').removeClass('slick-active');
        //set active class for current slide
        $('.slider-nav .slick-slide').eq(i).addClass('slick-active');
    }
});
$('.slider-nav .slick-slide').eq(0).addClass('slick-active');

$('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    autoplay: false,
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    vertical: true

});
$('.slider-nav').on('mouseenter', '.slick-slide', function (e) {
	var $currTarget = $(e.currentTarget),
    	index = $currTarget.data('slick-index'),
        slickObj = $('.slider-for').slick('getSlick');

    slickObj.slickGoTo(index);

});


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

/*
//スクロールイベント
  $(window).on('scroll', function(){

    //上からのスクロール値
      var dy = $(this).scrollTop();
      console.log('dy:' + dy);
    });
*/
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


	// fade-up
    $(window).scroll(function (){
      var scrollNum = $(this).scrollTop();
      console.log(scrollNum);

            if (scrollNum > 200){
              $('.shopsection').css({

                      'opacity':'1',
                      'transform':'translateY(0)',
                      '-webkit-transform':'translateY(0)',
                      '-moz-transform':'translateY(0)',
                      '-ms-transform':'translateY(0)'
                });
            } else if (scrollNum < 200) {
              $('.shopsection').css({
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
        console.log(scrollNum);

              if (scrollNum > 513){
                  $('.shop-category').css({
                          'opacity':'1',
                          'transform':'translateY(0)',
                          '-webkit-transform':'translateY(0)',
                          '-moz-transform':'translateY(0)',
                          '-ms-transform':'translateY(0)'
                  });
              } else if (scrollNum < 513) {
                  $('.shop-category').css({
                          'opacity':'0',
                          'transform':'translateY(100px)',
                          '-webkit-transform':'translateY(100px)',
                          '-moz-transform':'translateY(100px)',
                          '-ms-transform':'translateY(100px)'
                  });
              }
          });
