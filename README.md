PlugPlat
========


A plug.dj bookmarklet for the modern user.
---------------------------------


Installation
============

For Users
---------

Drag the following to your bookmarks bar or save the text as a bookmark.
```
javascript:(function(){$.getScript('http://goo.gl/UeyklL');}());
```

To use it, click the bookmark **only once** while in a plug.dj room


For Admins - PlatBot Plugin
----------
This bot deletes messages sent by the plugin between users.
One user in the room should be running it to ensure overall plugin functionality.
Make sure the user running the bot has enough permission to delete messages.

To install, do the same as above with the following text:
```
javascript:(function(){$.getScript('http://goo.gl/6IosFq');}());
```


Commands
========

Command                | Result
--------|:------
```/pm @username -message``` | <ul><li>Sends a private message to another user.</li><li>**Requires PlatBot.**</li><li> Note: Since code is public, message decryption is too. Don't sent credit cards and actual private junk.</li></ul>
```/mute``` | <ul><li>Mutes the current song.</li><li>When the song is done, it will unmute back to previous volume.</li><li>Use ```/mute -f``` to mute for more than one song.</li><li>User ```/unmute``` to unmute.</li></ul>
```/afkcheck``` | <ul><li>Toggles automatic afk replies.</li><li>If enabled, will send messages after a small delay when @mentioned saying you are busy. </li></ul>
```/autowoot``` | <ul><li>Toggles Autowoot (on by default).</li><li>Autowoot activates after 5-20 seconds to be more realistic then other plugins.</li><li>For instant autowoot use ```/autowoot -fast```</li></ul>
```/announce message``` | <ul><li>Mentions everyone in the room and sends the message surrounded by stars.</li>Ensures that mention message doesn't exceed message limit and splits names across multiple messages if needed.</li><li>If the PlatBot is running then the mention message will be deleted.</li></ul>

More Features to Come!
---------------------
