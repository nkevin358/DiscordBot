const Discord = require('discord.js')
const client = new Discord.Client()

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
    var mainchannel = client.channels.get("500843591170654213")
    mainchannel.send("Hello World, CCS Bot is Online!")

    const Logo = new Discord.Attachment('https://www.coastcapitalsavings.com/media/1216/logo_380x225.jpg')
    mainchannel.send(Logo)
})

client.on('message', (request) => {
    if (request.author == client.user){
        return
    }

    request.channel.send("Message received from " + request.author.toString() + ": " + request.content)
})


var bot_token = 'NTExNTY4NjEzOTQ2Mjk0Mjcy.Dssy-Q.Y2F8aQHRQ8h1TFhVBE3_o0f2eFw'

client.login(bot_token)




