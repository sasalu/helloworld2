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
  $("#uploadbutton").on("click", function(e){
    e.preventDefault();
    $("#uploadbutton").attr("disabled", "disabled")
    var req = $("#plotdiv").rplot("uploadcars", {
      }).always(function(){
      $("#uploadbutton").removeAttr("disabled");
    }).fail(function(){
      alert("HTTP error " + req.status + ": " + req.responseText);
    });
  });
  
});


