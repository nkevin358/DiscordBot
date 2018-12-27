module.exports.run = (client, message,arguments) => {

var newslink;
var newstype = arguments[0];

switch(newstype){
	case "tech":
		newslink = "https://www.itworldcanada.com/category/tech-news"
		break;
	case "local":
		newslink = "https://bc.ctvnews.ca/"
		break;
	case "sport":
		newslink = "https://www.sportsnet.ca/"
		break;
	default:
		newslink = "https://www.cbc.ca/news"
		newstype = "general"
}

message.channel.send("Check out todays " + newstype + " news: "  + newslink);

};