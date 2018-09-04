// Bot prefix
const prefix = ">";

// Listener event: runs whenever a message is received
module.exports = async (bot, message) => {

	// Command processing
	if (message.content.indexOf(prefix) == 0) {
		if (message.author.bot) return;
    	if (message.channel.type === "dm") return;

		// Messsage is a command

		let messageArray = message.content.toLowerCase().split(" ");
		// Cmd String
		let cmdStr = messageArray[0].slice(prefix.length);
		// Args String array
		let args = messageArray.slice(1);


		// Grab actual command from collection
		let cmd = bot.commands.get(cmdStr);

    	// Command handling
    	if (cmd) {
			cmd.run(bot, message, args);
			bot.printSpace();
		}
	}

	// KhangNeko RandomEvent
	if (message.author.id == bot.constants.KHANG_ID) {
		require("../lib/KhangNeko.js")(bot, message);
		bot.printSpace();
	}

	// DanielKYS RandomEvent
	if (message.author.id == bot.constants.DANIEL_ID) {
		require("../lib/DanielKYS.js")(bot, message);
		bot.printSpace();
	}

	// Brigette "op" listener
	if (require("../lib/OP_Parser")(bot,message)){
		//decide if you want to implement parse event handling here or elswhere, this example being elsewhere
		require("../lib/OP_Writer");
		bot.printSpace();
	}
};
