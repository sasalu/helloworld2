$(function(){
  //optional, requires jquery-ui.
  $("#plotdiv").resizable()
  
  //button handler
  $("#plotbutton").on("click", function(e){
    e.preventDefault();
    $("#plotbutton").attr("disabled", "disabled")
    var req = $("#plotdiv").rplot("plotcars", {
      }).always(function(){
      $("#plotbutton").removeAttr("disabled");
    }).fail(function(){
      alert("HTTP error " + req.status + ": " + req.responseText);
    });
  });
  
  //plot the default values on page load
  $("#plotbutton").trigger("click")
 
 
 //button handler
  $("#insertbutton").on("click", function(){ var x=ocpu.rpc("uploadcars",{}, function(session){})};
  x.fail(function(){ alert("Server error: " + req.responseText); });
  x.always(function(){ $("#insertbutton").removeAttr("disabled") });   
});  



