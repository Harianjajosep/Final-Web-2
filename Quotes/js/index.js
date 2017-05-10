$(document).ready(function(){
  var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
  function getRandomColor() {
    var color =  Math.floor(Math.random() * colors.length);
    
     $("body").css({
        background: colors[color],
       });
}
  $('#newQuote').on('click', function(){
    getRandomColor();
  });
  var currentQuote;
  getNewQuote();
      
  
  function getNewQuote(){
    $.ajaxSetup ({cache:false});
     $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(data) {
          var newQuote= (data[0].content);
          $("#quote").html(newQuote);
           $("#author").html('-'+data[0].title);
       currentQuote=newQuote;
    });
    

        $("#twit").on("click", function(){
        window.open("https://twitter.com/intent/tweet?hashtags=quotes&text="+currentQuote);
       }); 
}
 
  $('#newQuote').on('click', function(){
    getNewQuote();
  });
 });