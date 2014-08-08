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
 
 //call R function
$("#submitbuttonbutton").click(function(){
    
    var req = ocpu.rpc("uploadcars",{
  
    
    });
	); 
});
 
}
);

