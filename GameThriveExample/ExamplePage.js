/**
 * Modified MIT License
 * 
 * Copyright 2015 GameThrive
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * 1. The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * 2. All copies of substantial portions of the Software may only be used in connection
 * with services provided by GameThrive.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

var consoleStrValue = "";

function getIds() {  
  GameThrive.getIdsAvailable(function(ids) {
	console.log("GameThirve GetIdsAvailable");
	console.log(ids);
	consoleStrValue += "getIdsAvailable:"
					+ "\nPlayerID: " + ids.playerId
					+ "\nRegistration ID: " + ids.registrationId + "\n\n";
	document.getElementById("console").innerText = consoleStrValue;
  });
}

function getTags() {
	GameThrive.getTags(function(tags) {
		console.log("GameThrive GetTags:");
		console.log(tags);
		consoleStrValue += "getTags: " + JSON.stringify(tags) + "\n\n";
		document.getElementById("console").innerText = consoleStrValue;
	});
}

function sendTag() {
	// Use sendTags passing in a JSON object if you want to send more than one key value pair at a time.
	GameThrive.sendTag(document.getElementById("tagKey").value, document.getElementById("tagValue").value);
}

GameThrive.addListenerForNotificationOpened(function(data) {
	console.log("Received GT_NOTIFICATION_OPENED:");
	console.log(data);
});


window.onload = function() {
  document.getElementById("getIds").onclick = getIds;
  document.getElementById("sendTag").onclick = sendTag;
  document.getElementById("getTags").onclick = getTags;
}