$( function() {
    $( "#resizable" ).resizable();
  } );
$(init);
function init()
{
            var diagram = [] ;
            var canvas = $(".canvas") ; 
            var tools =  $(".tools") ; 
        
            $(".tool").draggable({helper:"clone"});
              
            canvas.droppable({
            drop: function( event, ui )
                {
                    var node = 
                    {
                        _id : (new Date).getTime(),
                        position : ui.helper.position()
                    };
                    node.position.left -= tools.width();
                  if(ui.helper.hasClass("tool-1"))
                      {
                          node.type = "TOOL-1" ;
                      }
                   else if(ui.helper.hasClass("tool-2"))
                      {
                          node.type = "TOOL-2" ;
                      }
                    else if(ui.helper.hasClass("tool-3"))
                      {
                          node.type = "TOOL-3" ;
                      } 
                   /*  else if(ui.helper.hasClass("tool-4"))
                      {
                          node.type = "TOOL-4" ;
                      }
                   */
                    else{
                        return;
                    }
                    diagram.push(node);
                    renderDiagram(diagram);
    
                }
    });
            
            function renderDiagram(diagram)
            {
                //canvas.empty();
                for (var d in diagram )
                    {
                        var html = "";
                      
                var node = diagram[d];

                        if(node.type === "TOOL-1")
                            {html = "<p class='border-color text-white' contenteditable = 'true'> Text </p>"}
                        
                         else if(node.type === "TOOL-2")
                            {html = "<div class='border-color text-white btn btn-primary'  contenteditable = 'true'> Button </div>"}
                                                        
                         else if(node.type === "TOOL-3")
                            { html = "<h1 class='border-color text-white' contenteditable = 'true'> h1 </h1>"}
                                 
                            
                          var dom = $(html).css({
                          "position" : "absolute" , 
                          "top" : node.position.top ,
                          "left" : node.position.left 
                       
                            
                        }).draggable({
                          
                            stop: function(event , ui)
                            {
                                var id = ui.helper.attr("id");
                                for(var i in diagram)
                                    {
                                    if(diagram[i]._id == id)
                                    {
                                      diagram[i].position.top = ui.position.top ;
                                      diagram[i].position.left = ui.position.left ;        
                                    }
                                    }
                            }
                        }).attr("id" , node._id);
                      
                    }
                        canvas.append(dom);

            }
            
            
            
        }
    

$("#up-cont").click(function(){
    
    $("body").animate({scrollTop:'0'} , 1500)
});


$(".add").click(function()
{
    $(".addContainer").toggle();
})    
  
$(".colorPage").click(function()
{
    $(".colorContainer").toggle();  
})

  
$(".imgPage").click(function()
{
    $(".imageContainer").toggle();
})

function changecolor(id)
{ 
    
     $(".topHeader").css('backgroundColor' , document.getElementById(id).innerHTML);
     $(".bottomFooter").css('backgroundColor' , document.getElementById(id).innerHTML);
   // $(".canvas").css('backgroundColor' , document.getElementById(id).innerHTML);
}

function changeimg1()
{
     $(".canvas").css('background-image','url(assets/images/project-counter.jpg)');              
}
/*function changeimg2()
{
    $(".canvas").css('background-image','url(assets/images/spot-light.jpg)');
}*/
function changeimg3()
{
    $(".canvas").css('background-image','url(assets/images/girl.jpg)');
}
function changeimg4()
{
    $(".canvas").css('background-image','url(assets/images/client-testimonial.jpg)');
}


function deleteBtn()
{
    var elem = document.getElementById("contentedit");
 elem.parentNode.removeChild(elem);
}
function copyBtn()
{
     var elem = document.getElementById("contentedit");
    var p_prime = elem.cloneNode(true);
}


