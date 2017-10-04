
if (process.argv[2] === null) {
	console.log('this is loaded');
	console.log('')
	console.log("my-tweets to print latest tweets")
	console.log("spotify-this-song to print song information")
	console.log("movie-this for movie information")
	console.log("do-what-it-says for random functionality")
};
// Declare the object to be exported to Liri App
var exports = module.exports = {};

exports.twitterKeys = {
  consumer_key: 'sf9459gzP43aw4KLdh3mIsDPc',
  consumer_secret: 'S7t037tjJjNfoj6kS3KJsejd5kfqSwFp9e4xLsICfDJFlx6gV9',
  access_token_key: '905516641139732480-SHcAIp96PN9DM3Id4qer51P7AdMXrTP',
  access_token_secret: 'SXds727dWXPXqWkShi5M5KIWkREwj62mcLnJn9lcqy0Db'
};

exports.spotifyKeys = {
	clientId: '162b2fe3c7c944bd98596e33bbfe483b',
	clientSecret:'18a097e04115418bab4b0e29d69179b3'
};

exports.OmdbKey = "40e9cece";


//spotify client id = 162b2fe3c7c944bd98596e33bbfe483b
//spotify client secret = 18a097e04115418bab4b0e29d69179b3

//OMDB Key  = 40e9cece