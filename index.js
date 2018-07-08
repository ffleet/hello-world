const shim = require('@ffleet/shim');

function hello_world(req, res) {
	res.end('Hello, World!');
}
exports.hello_world = shim.http(hello_world);
