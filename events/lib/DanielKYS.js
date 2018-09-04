module.exports = async (bot, message) => {
	console.log("DanielKYS listener activated...");

    message.react(bot.emojis.find(val => val.name == "regional_indicator_k"));
    message.react(bot.emojis.find(val => val.name == "regional_indicator_y"));
    message.react(bot.emojis.find(val => val.name == "regional_indicator_s"));
    console.log("Event was triggered. Reacted to Daniel's message");
}
