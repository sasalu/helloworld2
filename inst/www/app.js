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
    
	var myheader = $("#header").val() == "true";
	var mysep = $("#sep:checked").val();
	var myfile = $("#csvfile")[0].files[0];
    if(!myfile){ alert("No file selected."); return; }
	
	$("#insertbutton").attr("disabled", "disabled");
	
    var x = ocpu.call("uploadcars", {
		file : myfile,
		header : myheader
		sep : mysep
      }).always(function(){
      $("#insertbutton").removeAttr("disabled");
    }).fail(function(){
      alert("HTTP error " + x.status + ": " + x.responseText);
    });
  });
 
 
 
});  


