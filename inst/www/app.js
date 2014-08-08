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
  
  //CSV file 
  $("#csvfile").on("change", function loadfile(e){
if(!$("#csvfile").val()) return;
$("#outputcsv").addClass("hide").attr("href", "");

var req = ocpu.call("tv", {
input : $("#csvfile")[0].files[0]
}, function(tmp){
$("#outputcsv").removeClass("hide").attr("href", tmp.getLoc() + "R/.val/csv")
}).fail(function(){
alert(req.responseText)
}).always(function(){});
});
  
}
);