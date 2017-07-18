var tags = [
	/@GretchenCantora/,
	/@katyperry/,
	/thepopflash/,
	/@KatyPerry/
];

var count = db.posts.find({owner:"user5", mensagem:{$in: tags}}).count();

print(count);