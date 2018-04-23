/*
  Music review data store in json
*/

//music json
var musicReviews = {
  "music": [
/*
  #
  {
  "reviewNumber": " ",
  "artist": " ",
  "album": " ",
  "rating": " ",
  "review": " ",
  "src": " ",
  "date": " "
  }
*/
  //#1
  {
    "reviewNumber": "#1",
    "artist": "$uicideboy$",
    "album":"My Live Will Handle What My Heart Can't",
    "favTracks": "fold, Tulane, T.R.U, ",
    "rating": "DAMN SON WHERE YOU FOUND THIS",
    "review": "I'm still waiting for that $uicideboy$ ($B$) and XXXTENTACION (x) collab - like boi! Anyways I love this album, it was my first introduction to these guys way back before the whole <B>soundcloud rapper</B> trend took off. They have really <b>unquie</b> sound that pleases hip-hop fans and to some degree the heavy-metal fans too. To give a idea of what the $B$ sound is like Nirvanna mets Lil Wanye and they just clicked. Sort of how people are with $B$ either love them or rather listen to something. Which is fine, considering the subject matter they rap about do dive in some dark and senstive areas , some people might find it offense or hard to listen to. But that's also what makes them so good. And they can stay out of trouble unlike some other rappers. They go over matters like addictions, self-hating, being suicidal all behind deathmetal-vibe vocals and lush ryhme schemes and their <strong>a m a z i n g</strong> instrumal and production. Mix all that together and its like ... <strong>DAMN SON WHERE YOU FOUND DISS</strong> ? It's so good in fact that have some tracks where the instrumal is upfront and $B$ are in the back like in <u>T.R.U, Whoa, I'm woeful</u>. Not too say they can't rap either but i'm also saying they ain't the next wu tang clan or anything. They have found what's working for them but also like to try new sounds once in awhile. These guys gave me bang for my buck just on their soundcloud. I highly recommand these guys to ... some people, not everyone LoL. Just because the song topic and how sometimes you can't understand them.",
    "src": "https://youtu.be/17e9ytCLMuc",
    "date": "4/10/18"
  }
  ]
}

//outputting the music json to handlebars
$(document).ready(function(){
  var musicTemplate = $("#music-template").html();

  var compiledMusicTemplate = Handlebars.compile(musicTemplate);
  $("#music-list-container").html(compiledMusicTemplate(musicReviews))
});
