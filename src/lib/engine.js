var message = '';

var Class = function(msg) {
	message = msg;
	console.log(message);
}

Class.prototype = {
	forward: function() {
		console.log("The car is movie forward" + message);
	}
}

// var Class = {
// 	forward: function() {
// 		console.log("THe car is movie forward");
// 	}
// };

module.exports = Class;

// exports.forward = function() {
// 	console.log("THe car is movie forward");
// }