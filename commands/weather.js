module.exports.run = (client, message,arguments) => {

var weather = 'https://www.theweathernetwork.com/ca/weather/british-columbia/vancouver'

message.channel.send("Here is the weather forecase for Vancouver " + message.author.toString() + ' ' + weather);

};
