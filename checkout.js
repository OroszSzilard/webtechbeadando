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

$(document).on("keyup", "input.error", function(){
  
    $(this).removeClass("error");
  
})

$(document).ready(function () {

    $("#contact_info").hide();
    $("#payment").hide();
    $("#review").hide();

    $("#checkout_done").hide();
    $("#contact_done").hide();
    $("#payment_done").hide();
  
})

function getTime() {

    var time = document.getElementById("timeValue").value;
    document.getElementById("pickup_time").innerHTML = "Pickup time: " + time;

}

function getContact() {

    let lname = document.forms["ordering"]["lastname"].value;
    let fname = document.forms["ordering"]["firstname"].value;
    let phone = document.forms["ordering"]["phone"].value;
    let email = document.forms["ordering"]["email"].value;

    document.getElementById("fullname").innerHTML = fname + " " + lname;
    document.getElementById("number").innerHTML = phone;

    if(email!=null){
        document.getElementById("email").innerHTML = email;
        document.getElementById("email").style.marginBottom = "2%";
    } else
        document.getElementById("number").style.marginBottom = "2%";

}

function getPayment() {

    var paying = $("input[type='radio'][name='pay']:checked").val();
    if(!(paying==null)){
        document.getElementById("pay").innerHTML = paying;
        return true;
    }
    else{
        alert("Please select payment type!");
        return false;
    }

}

function revealHide(hideID, revealID, showInstead, hideInstead){

    hideID = "#" + hideID;
    revealID = "#" + revealID;
    showInstead = "#" + showInstead;
    hideInstead = "#" + hideInstead;

    $(hideID).hide();
    $(showInstead).show();
    $(hideInstead).hide();
    $(revealID).show();

}

const form = document.getElementById("ordering");
const radio = document.getElementById("radio");

function validateForm(form){

    let lname = document.forms["ordering"]["lastname"].value;
    let fname = document.forms["ordering"]["firstname"].value;
    let phone = document.forms["ordering"]["phone"].value;
    let email = document.forms["ordering"]["email"].value;
  
    if (lname == "" || fname=="" || phone == "") {
      alert("Something went wrong with the form.");
      return false;
    }
  
    let tel = phone.split("+");
    let long = tel[0].length;
  
    if(tel!=null){
    if(tel[0]==""){
  
      if(tel[1].includes("36")){
        let long = tel[1].length
        if(long != 11){
          document.forms["ordering"]["phone"].classList.add("error");
          alert("A phone number contains 11 numbers!");
          return false;
        }
      } else{
          document.forms["ordering"]["phone"].classList.add("error");
          alert("If you start with + it should continue with 36!");
          return false;
      }
  
    } else if(long != 11){
        document.forms["ordering"]["phone"].classList.add("error");
        alert("A phone number contains 11 numbers!");
        return false;
    }}

    if(email != ""){
    if(email.includes("@")){
  
        let kukac = email.split("@");
    
        if(kukac[1]!="gmail.com" && kukac[1]!="freemail.hu" && kukac[1] !="gmail.hu" && kukac[1]!="student.uni-miskolc.hu" && kukac[1]!="outlook.hu" && kukac[1]!="hotmail.hu"){
    
          alert("We can not accept email like this.");
          document.forms["ordering"]["email"].classList.add("error");
    
          return false;
    
        }
    
      } else{
          return false;
      }}

      return true;
  
}

form.addEventListener("submit", function(ev) {

    ev.preventDefault();
  
    if (!validateForm(form)) {
      return;
    }

    revealHide('contact_info','payment', 'contact_done', 'payment_before');
  
})

radio.addEventListener("submit", function(ev) {

    ev.preventDefault();
  
    if (!getPayment()) {
      return;
    }

    revealHide('payment', 'review', 'payment_done', 'review_before');
  
})

  


  