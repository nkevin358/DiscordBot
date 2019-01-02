module.exports.run = (client, message,arguments) => {

var weather = 'https://www.theweathernetwork.com/ca/weather/british-columbia/vancouver'

message.channel.send("Here is the weather forecast for Vancouver " + message.author.toString() + ' ' + weather);

};
