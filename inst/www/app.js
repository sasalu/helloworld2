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

$("#insertbutton").on("click", function(d){
    d.preventDefault();
    $("#insertbutton").attr("disabled", "disabled")
    var x = ocpu.call("uploadcars", {
      }).always(function(){
      $("#insertbutton").removeAttr("disabled");
    }).fail(function(){
      alert("HTTP error " + x.status + ": " + x.responseText);
    });
  });
  
});  


