var data = require("../data.json");

exports.addFriend = function(request, response) {   
	var name = request.query.name;
	var description = request.query.description;

	var newItem = {
		name,
		description,
		imageURL: "https://picsum.photos/400/400"
	};

	console.log(newItem);
	data.friends.push(newItem);
	response.render('index', data);
};