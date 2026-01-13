import { Client, Events, GatewayIntentBits } from 'discord.js';
import dotenv from 'dotenv';
import http from 'http';

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

// Minimal HTTP listener so Render (and other PaaS) detect an open port.
// If you prefer a background worker on Render, you can remove this and
// switch the service type to "Background Worker" in the Render dashboard.
const PORT = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('OK');
});

server.listen(PORT, () => {
    console.log(`HTTP server listening on port ${PORT}`);
});
