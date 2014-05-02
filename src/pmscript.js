//If you steal this code, you're a jerk.

API.chatLog("plugplat now online!");

API.on(API.HISTORY_UPDATE, nextSong);
API.on(API.CHAT, parseMsg);
API.on(API.CHAT_COMMAND, parseCmd);

var tempVol = 50;
var afkCheck = false;
var autowoot = true;
var tempmuted = false
var fastAuto = false;

function parseMsg(data) {//Parses incoming messages
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

function sendAFKMessage(toUser){//Sends afk messages when afkcheck is enabled
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
		API.sendChat("Sorry I'm busy with something I'll be back in a sec");
	}
}

function nextSong(){//Called when the next song is played
	if(tempmuted){
		if(API.getVolume() === 0){
			API.chatLog("Resuming volume");
			window.setTimeout(function(){API.setVolume(tempVol)},100);
			tempmuted = false;	
		}
		else tempmuted = false;
	}
	if(autowoot){
		var rand = Math.random();
		rand= rand *3;
		rand++;
		if(fastAuto) rand = 0;
		window.setTimeout(function(){$("#woot").click();},(rand* 5000)); 
	}
}

function parseCmd(value) {//Parse commands

//Private Message	
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

//Mute
	if(value.indexOf("/mute")===0){
		if(value.indexOf("/mute -f")!=0){
			if(API.getVolume() === 0){
				API.chatLog("Unmuting");
				API.setVolume(tempVol);
				if(tempmuted) tempmuted = false;
			}
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
			API.chatLog("Unmuting");
			API.setVolume(tempVol);
			if(tempmuted) tempmuted = false;
		}
		else tempmuted = false
	}

//AFK Check	
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

//Autowoot
	if(value.indexOf("/autowoot")===0){
		if(value.indexOf("/autowoot -f")===0) fastAuto = true;
		autowoot = !autowoot;
		if(autowoot) API.chatLog("Autowoot enabled");
		else API.chatLog("Autowoot disabled");
	}

//Announce
	if(value.indexOf("/announce ")===0){
		if(API.hasPermission(null, API.ROLE.BOUNCER)){
			var userlist = API.getUsers();
			var output = "!an";
			for (var u = 0; u < userlist.length; u++){
				var name = " @" + userlist[u].username;
				if ((name.length + output) > 255){
					API.sendChat(output);
					output = "!an";
				}
				output = output.concat(name);
			}
			API.sendChat(output);
			var msg = "";
			msg = msg.concat("*** ");
			msg = msg.concat(value.substring(10));
			msg = msg.concat(" ***");
			API.sendChat(msg);
		}
	}
}
