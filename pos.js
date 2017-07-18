var positivos = [
	/wonderful/,
	/congratulations/,
	/thanks/,
	/omg/,
	/kidding/,
	/please/,
	/yes/,
	/blast/,
	/marvelous/,
	/queen/,
	/beatiful/,
	/good/,
	/incredibly/
];

// Filtra no tweet os positivos
var cursor = db.posts.find({owner:"user5", tweet:{$in: positivos}});

// Conta positivos no tweet
var count = db.posts.find({owner:"user5", tweet:{$in: positivos}}).count();

cursor.forEach(printjson);
print(count);