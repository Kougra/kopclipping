var TwitterPackage = require('twitter');
var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/test');
mongoose.connect('mongodb://user5:123456@ds139942.mlab.com:39942/kopteste');

// Twitter Develop. keys
var secret = {
  consumer_key: 'uedO2hKxmEqU5bCGKu7bxSOVd',
  consumer_secret: 'TKG390SMOdU4BQhdYt9usfVpmOfZFqco5oMsU07F5ooSjYQf7B',
  access_token_key: '72085746-1Fuoa6Ytraz6AF1UI46CMK40WlSgzbs55mVK51gnc',
  access_token_secret: '6EqSmhYiVZnBv2Q7wVbIo84hFiUCm7siKtNUX4R4AeOqq'
}
 var Post = mongoose.model('Post', {mensagem: String, nome: String, localizaçao: String, seguidores: Number, amigos: Number, owner: {type: String, index: true}});

var Twitter = new TwitterPackage(secret);

Twitter.stream('statuses/filter', {track: '@katyperry'}, function(stream) {
  stream.on('data', function(tweet) {
    //console.log(tweet.user.location, tweet.user.name, tweet.text, tweet.user.followers_count, tweet.user.friends_count , tweet.id);

    var Person = mongoose.model('Person', yourSchema);

    Person.findOne({ "name" : { $regex: /Ghost/, $options: 'i' } },
          function (err, person) {
                 if (err) return handleError(err);
                 console.log('%s %s is a %s.', person.name.first, person.name.last, person.occupation);

   });

    // Coincide com model Post (var)
    var postAtual = new Post({
      mensagem: tweet.text, 
      nome: tweet.user.name, 
      locazaçao: tweet.user.location, 
      seguidores: tweet.user.followers_count, 
      amigos: tweet.user.friends_count, 
      id: tweet.id,
      owner: "user5"});
      console.log(postAtual);
    
    // Salvando no banco com trat. de erro
    postAtual.save(function(err){
      if(err){
        console.log(err);
      }else{
        console.log('Salvo com sucesso!');
      }
    });
  });
  

  stream.on('error', function(error) {
    console.log(error);
  });
});



//"C:\Program Files\MongoDB\Server\3.4\bin\mongo.exe" ds139942.mlab.com:39942/kopteste -u user5 -p 123456
