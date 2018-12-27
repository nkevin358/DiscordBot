const Discord = require("discord.js");
const config = require("./auth.json");
const fs = require("fs");
const client = new Discord.Client();
client.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

    if(err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
        console.log("Couldn't find commands.");
        return
    }

    jsfile.forEach((f,i) => {
        const command = require(`./commands/${f}`);
        let commandname = f.split(".")[0];
        console.log(commandname + " loaded!");
        client.commands.set(commandname, command);
    });
})

// Start
client.on('ready', () => {
    // List servers the bot is connected to
    console.log("Servers:")
    client.guilds.forEach((guild) => {
        console.log(" - " + guild.name)

        // List all channels
        guild.channels.forEach((channel) => {
            console.log(` -- ${channel.name} (${channel.type}) - ${channel.id}`)
        })
    })
    var mainchannel = client.channels.get(config.generalchatid)
    mainchannel.send("Hello World, CCS Bot is Online!")

    const Logo = new Discord.Attachment('https://www.coastcapitalsavings.com/media/1216/logo_380x225.jpg')
    mainchannel.send(Logo)

    console.log("Successful Bot login")
})

client.on('guildMemberAdd', member => {
  
  const channel = member.guild.channels.find(ch => ch.name === 'member-log');
 
  if (!channel) return;
  
  channel.send(`Welcome to the server. Have fun while you are here, ${member}`);
});

client.on('message', (receivedMessage) => {
    
    if (receivedMessage.author == client.user) {
        return
    }
    
    if (receivedMessage.content.startsWith(config.prefix)){
        
        var fullCommand = receivedMessage.content.substr(1) 
        var splitCommand = fullCommand.split(" ") 
        var primaryCommand = splitCommand[0] 
        var arguments = splitCommand.slice(1) 

        let commandfile = client.commands.get(primaryCommand)
        if (commandfile) commandfile.run(client,receivedMessage,arguments)    
    }
})

client.login(config.token)




