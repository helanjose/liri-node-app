require("dotenv").config();
var key = require("./key.js");
//var spotify = new Spotify(keys.spotify);

var Spotify = require('node-spotify-api');
var moment = require("moment")
var axios = require("axios");
var command=process.argv[2];
var term1=process.argv.slice(3);
var term=term1.join('+');

//console.log(term);

if(command=='movie-this')

  {

    if(term===undefined)
      {
    
          console.log("If you haven't watched 'Mr. Nobody', then you should: http://www.imdb.com/title/tt0485947/"+
          "It's on Netflix!");
  
      }
    else{
        movie();
    }

 
}

else if (command=='concert-this')
{
  axios.get("https://rest.bandsintown.com/artists/" + term + "/events?app_id=codingbootcamp").then(
    function(response) {

   
    //console.log(`band: + ${JSON.stringify(response.data[0].datetime)}`);
  
    var venue_name=response.data[0].venue.name;
    var city=response.data[0].venue.city;
    var region=response.data[0].venue.region;
    var country=response.data[0].venue.country;
    var date=response.data[0].datetime;
    var date_converted=moment(date).format('MM/DD/YYYY');
    console.log("venue name:"+venue_name+'\n'+"location:"+city+","+region+","+country+'\n'+"Date:"+date_converted);

}
);

  
}
else if(command=='spotify-it')
{
  //console.log("spotify");
  var spotify = new Spotify(key.spotify);
  //console.log(spotify);
  var terms=term.split("+").join(" ");
  console.log(terms);
  spotify.search({ type: 'track', query: terms }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
   
    console.log("song name"+data.tracks.items[0].name);
    console.log("album name"+data.tracks.items[0].album.name);
  });

  

}

 










function movie()
{

  
      axios.get("http://www.omdbapi.com/?apikey=trilogy&t="+term).then(
      function(response) {

     
      //console.log(`Venue Name: + ${JSON.stringify(response.data)}`);
      var title=response.data.Title;
      var year=response.data.Year;
      var actors=response.data.Actors;
      var plot=response.data.Plot;
      var country=response.data.Country;
      var rotten_tomato_rating=response.data.Ratings[1].Value;
      var imbd_rating=response.data.imdbRating;
      var language=response.data.Language;
      console.log("Title of the movie:"+title+'\n'+"Year the movie came out:"+year+'\n'+
      "Actors in the movie:"+actors+'\n'+"plot:"+plot+'\n'+
      "country:"+country+'\n'+"Rotten Tomatoes Rating: "+rotten_tomato_rating+'\n'
      +"IMDB Rating:"+imbd_rating+'\n'+"Language of the movie:"+language);
    }
  );
  
}

