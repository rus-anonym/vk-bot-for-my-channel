module.exports = {
	regexp: /profile|prof|проф|профиль/i,
	process: async function (message) {
		return message.send(`Ваш профиль:`);
	},
};
