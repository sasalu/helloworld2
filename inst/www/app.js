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
  
$("#insertbutton").on("click", function(){
   
   var x = ocpu.call("uploadcars", {
		file : myfile,
		header : myheader,
		sep : selectedSep
      }).always(function(){
      $("#insertbutton").removeAttr("disabled");
    }).fail(function(){
      alert("HTTP error " + x.status + ": " + x.responseText);
    });
  });

}
 

$("#selectbutton").on("click", function(){
    
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


