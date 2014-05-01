$('#pmscript-js').remove();

API.chatLog("PMScript now online!");
API.chatLog("Type \"/pm @person -message\" " );

API.on(API.HISTORY_UPDATE, nextSong);

API.on(API.CHAT, parseMsg);
function parseMsg(data) {
	var message = data.message;
	if (message.indexOf("!pm ")==0){
		message = message.substring(4);
		if(message.substring(0, 24) == API.getUser().id){
			API.chatLog(data.from + ": " + message.substring(24), true);
		}
	}
	if (data.type == "mention"){
		if(afkCheck){
			var rand = Math.random();
			rand++;
			console.log(rand);
			window.setTimeout(function(){sendAFKMessage(data.from);},(rand* 5000)); 
		}
	}
}
function sendAFKMessage(toUser){
var rand = Math.random();
	if(rand<0.10){
		API.sendChat("Ya sorry I'm gotta take a shit I'll be back in a sec");
	}
	else if(rand<0.275){
		API.sendChat("Hold on I'll be back in a sec");
	}
	else if(rand<0.5){
		API.sendChat("Hold on I'm in the middle of something I'll be back in a sec");
	}
	else if(rand<0.75){
		API.sendChat("Ya sorry I'm busy working I'll be back in a sec");
	}
	else{
		API.sendChat("Ya sorry I'm busy with something I'll be back in a sec");
	}
}

var tempVol = 50;
var afkCheck = false;
var autowoot = true;
var tempmuted = false;
API.on(API.CHAT_COMMAND, sendMsg);
function sendMsg(value) {
	if(value.indexOf("/pm ")==0){
		var secret = value.substring(4);
		var name = secret.substring(1, (secret.indexOf("-")-1));
		var msg = secret.substring(secret.indexOf("-")+1);
		var userlist = API.getUsers();
		for (var u = 0; u < userlist.length; u++) {
			if(userlist[u].username === name){
				var toSend = "!pm ";
				toSend = toSend.concat(userlist[u].id);
				toSend = toSend.concat(msg);
				API.sendChat(toSend);
				break;
			}
		}
	}
	if(value.indexOf("/mute")===0){
		if(value.indexOf("/mute 1")!=0){
			API.chatLog("Muting volume for one song");
			tempVol = API.getVolume();
			API.setVolume(0);
			tempmuted = true;
		}
		else{
			API.chatLog("Muting volume until /unmute");
			tempVol = API.getVolume();
			API.setVolume(0);		
		}
	}
	if(value.indexOf("/unmute")===0){
		if(API.getVolume() === 0){
				API.setVolume(tempVol);
				if(tempmuted) tempmuted = false;
		}
		else tempmuted = false
	}
	if(value.indexOf("/afkcheck")===0){
		afkCheck = !afkCheck;
		if(afkCheck){
			API.chatLog("AFK replies enabled");
		}
		else{
			API.chatLog("AFK replies disabled");
		}
	}
	if(value.indexOf("/donger")===0){
		API.chatLog("ヽ༼ຈل͜ຈ༽ﾉ Raise those dongers ヽ༼ຈل͜ຈ༽ﾉ ");
	}
	if(value.indexOf("/autowoot")===0){
	autowoot = !autowoot;
		if(autowoot) API.chatLog("Autowoot enabled");
		else API.chatLog("Autowoot disabled");
	}
}

function nextSong(){
	if(tempmuted){
		if(API.getVolume() === 0){
			API.chatLog("Resuming volume");
			window.setTimeout(function(){API.setVolume(tempVol)},100);
			tempmuted = false;	
		}
		else tempmuted = false
	}
	if(autowoot){
		var rand = Math.random();
		rand= rand *3;
		rand++;
		window.setTimeout(function(){$("#woot").click();},(rand* 5000)); 
	}
}