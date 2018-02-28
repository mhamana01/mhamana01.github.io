"[data-role=swatch-options]": {
            "swatchRenderer": {
                "jsonConfig": {"attributes":{"92":{"id":"92","code":"color","label":"Colour","options":[{"id":"178","label":"Black","products":["20865","20866","20867","20868","20870"]},{"id":"103","label":"Navy","products":["20871","20872","20873","20874","20875","20876"]}],"position":"0"},"142":{"id":"142","code":"product_size","label":"Size","options":[{"id":"198","label":"8","products":["20865","20871"]},{"id":"199","label":"10","products":["20866","20872"]},{"id":"200","label":"12","products":["20867","20873"]},{"id":"201","label":"14","products":["20868","20874"]},{"id":"202","label":"16","products":["20875"]},{"id":"203","label":"18","products":["20870","20876"]}],"position":"0"}},"template":"\u00a3<%- data.price %>","currencyFormat":"\u00a3%s","optionPrices":{"20865":{"oldPrice":{"amount":54.9},"basePrice":{"amount":54.9},"finalPrice":{"amount":54.9},"tierPrices":[]},"20866":{"oldPrice":{"amount":54.9},"basePrice":{"amount":54.9},"finalPrice":{"amount":54.9},"tierPrices":[]},"20867":{"oldPrice":{"amount":54.9},"basePrice":{"amount":54.9},"finalPrice":{"amount":54.9},"tierPrices":[]},"20868":{"oldPrice":{"amount":54.9},"basePrice":{"amount":54.9},"finalPrice":{"amount":54.9},"tierPrices":[]},"20869":{"oldPrice":{"amount":54.9},"basePrice":{"amount":54.9},"finalPrice":{"amount":54.9},"tierPrices":[]},"20870":{"oldPrice":{"amount":54.9},"basePrice":{"amount":54.9},"finalPrice":{"amount":54.9},"tierPrices":[]},"20871":{"oldPrice":{"amount":54.9},"basePrice":{"amount":54.9},"finalPrice":{"amount":54.9},"tierPrices":[]},"20872":{"oldPrice":{"amount":54.9},"basePrice":{"amount":54.9},"finalPrice":{"amount":54.9},"tierPrices":[]},"20873":{"oldPrice":{"amount":54.9},"basePrice":{"amount":54.9},"finalPrice":{"amount":54.9},"tierPrices":[]},"20874":{"oldPrice":{"amount":54.9},"basePrice":{"amount":54.9},"finalPrice":{"amount":54.9},"tierPrices":[]},"20875":{"oldPrice":{"amount":54.9},"basePrice":{"amount":54.9},"finalPrice":{"amount":54.9},"tierPrices":[]},"20876":{"oldPrice":{"amount":54.9},"basePrice":{"amount":54.9},"finalPrice":{"amount":54.9},"tierPrices":[]}},"priceFormat":{"pattern":"\u00a3%s","precision":2,"requiredPrecision":2,"decimalSymbol":".","groupSymbol":",","groupLength":3,"integerRequired":1},"prices":{"oldPrice":{"amount":54.9},"basePrice":{"amount":54.9},"finalPrice":{"amount":54.9}},"productId":"20877","chooseText":"Choose an Option...","images":[],"index":{"20865":{"92":"178","142":"198"},"20866":{"92":"178","142":"199"},"20867":{"92":"178","142":"200"},"20868":{"92":"178","142":"201"},"20870":{"92":"178","142":"203"},"20871":{"92":"103","142":"198"},"20872":{"92":"103","142":"199"},"20873":{"92":"103","142":"200"},"20874":{"92":"103","142":"201"},"20875":{"92":"103","142":"202"},"20876":{"92":"103","142":"203"}}},
                "jsonSwatchConfig": {"92":{"178":{"type":"2","value":"https:\/\/www.wearethought.com\/media\/attribute\/swatch\/swatch_image\/30x20\/b\/l\/black.jpg","thumb":"https:\/\/www.wearethought.com\/media\/attribute\/swatch\/swatch_thumb\/110x90\/b\/l\/black.jpg","label":"Black"},"103":{"type":"2","value":"https:\/\/www.wearethought.com\/media\/attribute\/swatch\/swatch_image\/30x20\/n\/a\/navy.jpg","thumb":"https:\/\/www.wearethought.com\/media\/attribute\/swatch\/swatch_thumb\/110x90\/n\/a\/navy.jpg","label":"Navy"}},"142":{"198":{"type":"0","value":"8","label":"8"},"199":{"type":"0","value":"10","label":"10"},"200":{"type":"0","value":"12","label":"12"},"201":{"type":"0","value":"14","label":"14"},"202":{"type":"0","value":"16","label":"16"},"203":{"type":"0","value":"18","label":"18"}}},
                "mediaCallback": "https://www.wearethought.com/swatches/ajax/media/",
                "gallerySwitchStrategy": "replace"
            }
        }
    }
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
