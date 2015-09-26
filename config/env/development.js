var port = 1337;

module.exports = {
	port: port,
	db: 'mongodb://localhost/todos',
	facebook: {
		clientID: '880137145386312',
		clientSecret: '0d6c91883fa1f373466b9ebe3f589cd7',
		callbackURL: 'http://localhost:' + port + '/oauth/facebook/callback'
	},
	twitter: {
		clientID: '6K83gKU2oUCqJ5QKaFWp6cylV',
		clientSecret: 'iwAAgUoqYzZyjQxfLcm7bUooNlu82NHBL8qedIFl1yxQkPol6E',
		callbackURL: 'http://localhost:1337/oauth/twitter/callback'
	}
};