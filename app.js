var TwitterPackage = require('twitter');
var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/test');
mongoose.connect('mongodb://user5:123456@ds139942.mlab.com:39942/kopteste');

var secret = {
  consumer_key: 'uedO2hKxmEqU5bCGKu7bxSOVd',
  consumer_secret: 'TKG390SMOdU4BQhdYt9usfVpmOfZFqco5oMsU07F5ooSjYQf7B',
  access_token_key: '72085746-1Fuoa6Ytraz6AF1UI46CMK40WlSgzbs55mVK51gnc',
  access_token_secret: '6EqSmhYiVZnBv2Q7wVbIo84hFiUCm7siKtNUX4R4AeOqq'
}
 var Post = mongoose.model('Post', {mensagem: String, name: String, location: String});

var Twitter = new TwitterPackage(secret);

Twitter.stream('statuses/filter', {track: '@katyperry'}, function(stream) {
  stream.on('data', function(tweet) {
    console.log(tweet.user.location, tweet.user.name);

    var postAtual = new Post({mensagem: tweet.text, name: tweet.user.name, location: tweet.user.location});

    postAtual.save(function(err){
      if(err){
        console.log(err);
      }else{
        console.log('Salvo com sucesso!');
      }
    });
  });
  // salvando no banco

  stream.on('error', function(error) {
    console.log(error);
  });
});
