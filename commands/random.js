module.exports.run = (client, message,arguments) => {

	if(!arguments[0]) return;
 
var type = arguments[0];

if(type == "dice"){
	var min = 1;
	var max = 6;
	var dice = Math.floor(Math.random() * (+max - +min)) + min;

	var response = 'Diceroll was ' + dice
}
else if (type == "coin"){
	var min = 1;
	var max = 2;
	var dice = Math.floor(Math.random() * (+max - +min)) + min;

	if(dice == 1){
		var response = "You flipped heads!" 
	}
	else{
		"You flipped tails!"
	}
}

message.channel.send(response);

};
