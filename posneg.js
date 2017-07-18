var negativos = [
	/bitch/,
	/no way/,
	/fuck/,
	/fuck you/,
	/motherfucker/,
	/asshole/,
	/lol/,
	/no/,
	/dont/
];

// Filtra no tweet os negativos
var cursor = db.posts.find({owner:"user5", tweet:{$in: negativos}});

// Conta negativos no tweet
var count = db.posts.find({owner:"user5", tweet:{$in: negativos}}).count();

cursor.forEach(printjson);
print(count);