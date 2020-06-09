import Discord from "discord.js";
import logger from "./logger";

export let client = null;

export const setupClient = () => {
  client = new Discord.Client();

  client.on("ready", () => {
    logger.info(`Zalogowano jako ${client.user.tag}!`);
  });


  client.on("message", async (msg) => {
    if (msg.content === "mati") {
      msg.reply("To ja <3");
    }

    if (msg.content === "mati chodź") {
      if (msg.member.voice.channel) {
        const connection = await msg.member.voice.channel.join();
        const dispatcher = connection.play('./src/assets/sound/Dobry_Wieczor_Mati.mp3', {volume: 0.3});

        dispatcher.on('finish', () => {
          connection.disconnect()
        });
        
      } else {
        msg.reply('Nie ma Cię na kanale :c');
      }
    }
  });

  client.login(process.env.TOKEN);

};