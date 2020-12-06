const mongoose = require(`mongoose`);
const config = require(`../DB/config.json`);

console.log(`DataBase module loaded`);

async function initialize() {
	await mongoose.connect(config.mongo, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});
}

const models = {
	message: mongoose.model("message", {
		id: Number,
		peerId: Number,
		text: String,
	}),
};

module.exports = {
	mongoose: mongoose,
	models: models,
	initialize: initialize,
};
