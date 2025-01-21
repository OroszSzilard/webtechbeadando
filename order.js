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

function closeModal(givenId) {

  var id = "#" + givenId;
  $(id).fadeOut();
    
}

function openModal(foodname, img) {

  document.getElementById('food').innerHTML = foodname;
  document.getElementById('food_img').src= img;
  $("#pizzaModal").fadeIn();
    
}

function addToCart(){

  var sofar = +document.getElementById('cart').value;
  var value = parseInt(document.getElementById('increment').value, 10);
  value += sofar;
  value = isNaN(value) ? 0 : value;
  document.getElementById('cart').value = value;
  $("#pizzaModal").fadeOut();
  document.getElementById('increment').value = 1;
  document.getElementById('dec').disabled = true;
  document.getElementById('dec').style.cursor = 'default';

}

function incrementValue()
{
  var value = parseInt(document.getElementById('increment').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('increment').value = value;
  document.getElementById('dec').disabled = false;
  document.getElementById('dec').style.cursor = 'pointer';
}

function decreaseValue()
{
  var value = parseInt(document.getElementById('increment').value, 10);
  value = isNaN(value) ? 0 : value;
  value--;
  document.getElementById('increment').value = value;
  if(value == 1){
    document.getElementById('dec').disabled = true;
    document.getElementById('dec').style.cursor = 'default';
  }
}

