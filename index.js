import { Client, Events, GatewayIntentBits } from 'discord.js';
import dotenv from 'dotenv';

dotenv.config();


const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.on(Events.InteractionCreate, async interaction => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'ping') {
        await interaction.reply('codebhiya pong!🌴');
    }
    else if (interaction.commandName === 'whoami') {
        await interaction.reply("I am codebhaiya bot 👀");
    }
});

client.on(Events.MessageCreate, async msg => {
    if (msg.author.bot) return;
    if (msg.channelId === "1193921757468434524") { // welcome channel
        msg.reply("Welcome to the server 👋");
        return;
    }
});

client.login(process.env.DISCORD_BOT_TOKEN);
