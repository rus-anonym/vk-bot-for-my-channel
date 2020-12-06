const core = require(`./lib/core.js`);

(async function main() {
	await core.initialize();
	console.log(`Script start at ${new Date()}`);
})();
