var TwitterPackage = require('twitter');

var secret = {
  consumer_key: 'uedO2hKxmEqU5bCGKu7bxSOVd',
  consumer_secret: 'TKG390SMOdU4BQhdYt9usfVpmOfZFqco5oMsU07F5ooSjYQf7B',
  access_token_key: '72085746-1Fuoa6Ytraz6AF1UI46CMK40WlSgzbs55mVK51gnc',
  access_token_secret: '6EqSmhYiVZnBv2Q7wVbIo84hFiUCm7siKtNUX4R4AeOqq'
}

var Twitter = new TwitterPackage(secret);

Twitter.stream('statuses/filter', {track: '@donald'}, function(stream) {
  stream.on('data', function(tweet) {
    console.log(tweet.text);
  });

  stream.on('error', function(error) {
    console.log(error);
  });
});
