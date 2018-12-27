module.exports.run = (client, message,arguments) => {

	if(!arguments[0]) return;
 
var type = arguments[0];

if(type == "dice"){
	var min = 1;
	var max = 6;
	var dice = Math.floor(Math.random() * (+max - +min)) + min;
	console.log("dice command working")
}
else if (type == "coin"){
	var min = 1;
	var max = 2;
	var dice = Math.floor(Math.random() * (+max - +min)) + min;
	console.log("coin command working")
}


message.channel.send(dice);

};
