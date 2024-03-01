const { friends } = require('../models/friends.model');

function getFriends(_, res) {
	res.json(friends);
}

function getFriendById(req, res) {
	const friendId = Number(req.params.id);
	const friend = friends[friendId];
	if (!friend) {
		return res.status(404).send({
			error: 'Invalid friend id',
		});
	}
	res.json(friend);
}

module.exports = {
	getFriends,
	getFriendById,
};
