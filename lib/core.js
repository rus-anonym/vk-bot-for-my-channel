const fs = require(`fs`);
const vk = require(`./vk.js`);
const DB = require(`./database.js`);

function commandsLoader() {
	let commandsList = fs.readdirSync(`./commands`);
	commandsList.map((command) => {
		const commandScript = require(`../commands/${command}`);
		vk.commands.push({
			regexp: commandScript.regexp,
			process: commandScript.process,
		});
	});
}

async function initialize() {
	await DB.initialize();
	commandsLoader();
	await vk.initialize();
}

module.exports = {
	initialize,
};
