const { VK } = require(`vk-io`);
const config = require(`../DB/config.json`);
const mongo = require(`./database.js`);

console.log(`Module VK loaded`);

const vk = new VK({
	token: config.token,
	apiVersion: "5.126",
});

vk.updates.on("message", async function (message) {
	if (message.isOutbox) {
		return;
	} else {
		let messageElement = new mongo.models.message({
			id: message.id,
			peerId: message.peerId,
			text: message.text,
		});
		await messageElement.save();
		message.send(`Hello`);
	}
});

async function initialize() {
	await vk.updates.startPolling();
}

module.exports = {
	vk: vk,
	initialize: initialize,
};
