const { VK } = require(`vk-io`);
const config = require(`../DB/config.json`);
const mongo = require(`./database.js`);

console.log(`Module VK loaded`);

const commands = [];

const vk = new VK({
	token: config.token,
	apiVersion: "5.126",
});

vk.updates.on("message", async function (message) {
	if (message.isOutbox || !message.text || message.isGroup || message.isChat) {
		return;
	} else {
		const command = commands.find((x) => x.regexp.test(message.text));
		if (!command) {
			return;
		} else {
			return await command.process(message);
		}
	}
});

async function initialize() {
	await vk.updates.startPolling();
}

module.exports = {
	vk: vk,
	initialize: initialize,
	commands: commands,
};
