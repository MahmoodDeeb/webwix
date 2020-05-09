 new WOW().init();


var modal = document.getElementById('id01');
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
    
}




$("#Templates").click(function(){
    
    $(".modal3").css("display", "block");
});


$("#up-cont").click(function(){
    
    $("body").animate({scrollTop:'0'} , 1500)
});

 var fourthSection =$('#fourth-section');
$('#FeaturesBtn').click(function () {

            $('html, body').animate({
                scrollTop: fourthSection.offset().top - 210 }, 1500);

        })


$(".open").click(function(){
    
    $(".modal3").css("display", "block");
});