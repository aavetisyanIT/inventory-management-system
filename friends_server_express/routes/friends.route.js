const express = require('express');

const {
	getFriends,
	getFriendById,
} = require('../controllers/friends.controller');

const friendsRoute = express.Router();

friendsRoute.get('/', getFriends);
friendsRoute.get('/:id', getFriendById);

module.exports = friendsRoute;
