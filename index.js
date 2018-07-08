function hello_world(event, context, callback) {
	callback(null, {
		statusCode: 200,
		body: 'Hello, World!'
	});
}
exports.hello_world = hello_world;
