API.chatLog("PMBot now online!");

API.on(API.CHAT, parseMsg);
function parseMsg(data) {
	var message = data.message;
	if (message.indexOf("!")==0){
	window.setTimeout(function(){delMsg(data.chatID)},1500); 
	}
}

function delMsg(ID){
	API.moderateDeleteChat(ID);
}