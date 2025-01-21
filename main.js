function go(idName){
    var id = document.getElementById(idName).getAttribute('href');
        topSpace = 30;
    $('html, body').animate({
      scrollTop: $(id).offset().top - topSpace
    }, 800);
}

function gototop(){
  $('html, body').animate({ scrollTop: 0 }, 'slow');
}

