const vk = require(`./lib/vk.js`);
const mongo = require(`./lib/database.js`);

(async function main() {
	await vk.initialize();
	console.log(`Polling started at ${new Date()}`);
	await mongo.initialize();
	console.log(`DataBase connect succesfully`);
})();
