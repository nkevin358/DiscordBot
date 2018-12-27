module.exports.run = (client, message,arguments) => {
 
console.log("hello command working")

message.channel.send("hello world" + message.author.toString());

};
