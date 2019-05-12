$(document).ready(function() {
  $(".showing").click(function() {
    $(this).children(".instructions").toggle();
    $(this).children("#ins").toggle();
  });
});

function myFunction(){
  var die1 = document.getElementById("die1");
  var d1 = Math.floor(Math.random() * 6) +1;
  die1.innerHTML = d1;
};
 function myFunction2(){
  var die2 = document.getElementById("die2");
  var d2 = Math.floor(Math.random() * 6) +1;
  die2.innerHTML = d2;
 };