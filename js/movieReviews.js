var movieReviews = {
  "movies": [
    /* movie review template
    { 
      "reviewNumber": " ",
      "title" : " ",
      "dicteror" : " ",
      "rating" : " ",
      "review" : " ",
      "src" : " ",
      "date" : " "
    }
    */    
    {
      "reviewNumber" : "#1",
      "title": "Ready Player One",
      "dicteror" : "Steven Spielberg",
      "rating" : "Worth watching in the threater",
      "review" : "If you coming to see <b>Ready Player One</b> to see what story is has, you gonna be fairly dissapointed. Come to see Ready player one for the action and see the <i>OASIS</i> and all the pop culture icons you can spot. I would recommend this movie, gamers and old-heads will too. Since it bring backs those memories of you and your get-along gang playing halo at someones house. Or trying to solve the easter egg on your own.",
      "src" : "https://www.youtube.com/watch?v=cSp1dM2Vj48",
      "date" : "4/3/18"
    }
  ]
}

$(document).ready(function(){
  var movieTemplate = $("#movie-template").html();

  var compiledMovieTemplate = Handlebars.compile(movieTemplate);
  $("#movie-list-container").html(compiledMovieTemplate(movieReviews));
});