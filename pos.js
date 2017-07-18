var positivos = [
	/wonderful/,
	/congratulations/,
	/thank/,
	/omg/,
	/kidding/,
	/please/,
	/yes/,
	/blast/,
	/marvelous/,
	/queen/,
	/beatiful/,
	/good/,
	/incredibly/,
	/clip/,
	/videoclipe/,
	/famosa/,
	/famoso/
];

// Filtra no tweet os positivos
//var cursor = db.posts.find({owner:"user5", mensagem:{$in: positivos}});

// Conta positivos no tweet
var count = db.posts.find({owner:"user5", mensagem:{$in: positivos}}).count();
//var count = db.posts.find({mensagem: {$regex: "@katyperry"} ,mensagem:{$in: positivos}}).count();


//cursor.forEach(printjson);
print(count);