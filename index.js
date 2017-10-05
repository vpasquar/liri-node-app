//aquire various keys for api calls
var Keys = require ("./keys.js");
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require("request");	 

//LOGIC FLOW
//1. if process-argv[2] = my-tweets, display last 20 tweets and when they were created
if (process.argv[2] === "my-tweets") {

	
	var client = new Twitter({
	  consumer_key: Keys.twitterKeys.consumer_key,
	  consumer_secret: Keys.twitterKeys.consumer_secret,
	  access_token_key: Keys.twitterKeys.acesss_token_key,
	  access_token_secret:Keys.twitterKeys.acess_token_key
	});
	 
	var params = {screen_name: 'binglebop69'};
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
	  if (!error) {
	  	for (i = 0; i < tweets.length; i++) {
	  		console.log("---------------------------")
	  		console.log("Time Tweeted: " + tweets[i].created_at)
	  		console.log("Tweet Text:   " + tweets[i].text)	
	  		console.log("---------------------------")  	
	  	}
	  }
	});
}

//2. if  =spotify-this-song '<song name here' Display spotify info of that song
//       && if no song is provided default to "The sign" by Ace of Base
if (process.argv[2] === "spotify-this-song") {
	  var userQuery = process.argv[3];
	  
	  var spotify = new Spotify({
	     id: Keys.spotifyKeys.clientId,
	     secret: Keys.spotifyKeys.clientSecret
	  });
	 
	  spotify.search({ type: 'track', query: userQuery,limit:1 }, function(err, data) {
	     if (err) {
	        return console.log('Error occurred: ' + err);
	     }
	     //console.log(data)
	     //console.log(data.tracks.items);
	     var album = data.tracks.items[0].album.name;
	     var song  = data.tracks.items[0].name;
	     var artist = data.tracks.items[0].artists[0].name;
	     var link  = data.tracks.items[0].href;
	     console.log("---------------");
	     console.log("song: " + song);
	     console.log("artist: " + artist);
	     console.log("album: " + album);
	     console.log("spotify link: " + link);
	  });
};

//3. if = movie-this '<movie name here>' omdb the info and display to user, if no movie
//        is entered default to Mr. Nobody


if (process.argv[2] === "movie-this") {
	var movieName = ''
	if (process.argv[3] === '') {
       movieName = "Mr. Nobody"
	}
	else {
       movieName = process.argv.slice(3).join(" ");
       console.log(movieName);
    };

	request("http://www.omdbapi.com/?t=" + movieName +"&y=&plot=short&apikey=40e9cece", 
		function(error, response, body) {
        
           if (!error && response.statusCode === 200) {
           	  console.log(JSON.parse(body));
           	  var title         = JSON.parse(body).Title;
           	  var year          = JSON.parse(body).Year;
              var imdbRating    = JSON.parse(body).Ratings[0].Value;
           	  var rottenRating  = JSON.parse(body).Ratings[1].Value;
           	  var country       = JSON.parse(body).Country;
           	  var language      = JSON.parse(body).Language;
           	  var plot          = JSON.parse(body).Plot;
           	  var actors        = JSON.parse(body).Actors;

           	  console.log("\n" + "--------------");
           	  console.log(title);
           	  console.log(imdbRating);
           	  console.log(rottenRating);
           	  console.log(country);
           	  console.log(language);
           	  console.log(plot);
           	  console.log(actors);
           }
		});

};
//4. if = do-what-it-says run the command thats found in random.txt (using file system)
if (process.argv[2] === "do-what-it-says") {
	
	var fs = require("fs");

	fs.readFile("random.txt", "utf8", function(error,data) {

		  if (error) {
		  	return console.log(error);
		  }
		  else {
            console.log(data);
		  };
	});	  
};
