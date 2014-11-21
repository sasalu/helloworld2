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
  
$("#selectbutton").on("click", function(){
    
	var z = ocpu.rpc("uploadcars", {}, function(output){});
   
    var elm = document.getElementById('attribute'),
        df = document.createDocumentFragment();
    for (var i = 1; i <= 6; i++) {
        var option = document.createElement('option');
        option.value = i;
        option.appendChild(document.createTextNode(p()));
        df.appendChild(option);
    }
    elm.appendChild(df);
}());
  
   
  
});  


