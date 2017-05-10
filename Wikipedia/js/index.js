$(document).ready(function(){
  $('#find').keypress(function(e){
    if(e.keyCode==13)
    $('#search').click();
    });
  $("#search").click(function(){
    var searchTerm = $("#find").val();
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?";
    $.ajax({
      type: "GET",
      url: url,
      async: false,
      dataType: "json",
      success: function(data){
        $("#result").html("");
        for (var i = 0; i < data[1].length; i++) {
          $("#result").append("<a target=blank href =" + data[3][i] + ">" + data[1][i] + "</a><p>" + data[2][i] + "</p>");
        }
      },
      error: function(errorMessage){
        alert("Error");
      }
    });
  });
});