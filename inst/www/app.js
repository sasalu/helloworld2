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
 
 //because read.csv is in utils
ocpu.seturl("//public.opencpu.org/ocpu/library/utils/R")

//actual handler
$("#submitbutton").on("click", function(){

    //arguments
    var myheader = $("#header").val() == "true";
    var myfile = $("#csvfile")[0].files[0];
        
    if(!myfile){
        alert("No file selected.");
        return;
    }

    //disable the button during upload
    $("#submitbutton").attr("disabled", "disabled");

    //perform the request
    var req = ocpu.call("read.csv", {
        "file" : myfile,
        "header" : myheader
    }, function(session){
        session.getConsole(function(outtxt){
            $("#output").text(outtxt); 
        });
    });
        
    //if R returns an error, alert the error message
    req.fail(function(){
        alert("Server error: " + req.responseText);
    });
    
    //after request complete, re-enable the button 
    req.always(function(){
        $("#submitbutton").removeAttr("disabled")
    });        
});  
  
     
});  



