$(".openBtn").click(function(){
    
    document.getElementById("slideBar").style.width = "250px";
    document.getElementById("homeContent").style.marginLeft = "250px";
})


$(".closeBtn").click(function(){
    
    document.getElementById("slideBar").style.width = "0";
    document.getElementById("homeContent").style.marginLeft = "0";
})


    
$("#singers h3").click(function()
{
    $("#singerItem div").css("display","block");
     $(this).next().slideToggle(500);
       
})

    var max =100;   
    $("textarea").keyup(function(){
        
        var length=$(this).val().length;
        var char = max - length;
       
        
        if(char<=0)
            {
                 $("#characters").text("your characters is finished");
                
            }
        else{
        
        $("#characters").text(char);
        }
        
    });

    


var countDownDate = new Date("Dec 20, 2018 15:37:25").getTime();


var x = setInterval(function() {


  var now = new Date().getTime();
    
 
  var distance = countDownDate - now;
    
 
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
 
  document.getElementById("days").innerHTML = days + " D" ;  
  document.getElementById("hours").innerHTML= hours + " H";
  document.getElementById("minutes").innerHTML= minutes + " M";
  document.getElementById("seconds").innerHTML=seconds + " S";
    
  
}, 200);