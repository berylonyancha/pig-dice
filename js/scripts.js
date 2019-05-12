$(document).ready(function() {
  $(".showing").click(function() {
    $(this).children(".instructions").toggle();
    $(this).children("").toggle();
  });
});
var randomNumber = Math.floor(Math.random()*6) + 1;
var diceImages = "images/dice"+randomNumber+".png";

document.querySelector('.image1').setAttribute('src', diceImages);

