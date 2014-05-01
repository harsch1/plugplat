plugplat
========


A plug.dj bookmarklet for the modern user.
---------------------------------


Installation
============

For Users
---------

Drag the following to your bookmarks bar or save the text as a bookmark.
```
javascript:(function(){$.getScript('http://goo.gl/ov8RPo');}());
```

To use it, click the bookmark **only once** while in a plug.dj room


For Admins - Bot Plugin
----------

Do the same as above with the following text:
```
javascript:(function(){$.getScript('http://goo.gl/hZQ0Uu');}());
```
This bot will delete messages sent by the plugin between users.

Make sure the user running the bot has enough permission to delete messages.

Commands
========

Command | Result
--------|:------
**/pm @username -message** | <ul><li>Sends a private message to another user.</li><li>**Requires room bot.**</li><li> Note: Since code is public, message decryption is too. Don't sent credit cards and actual private junk.</li></ul>
**/mute** | <ul><li>Mutes the current song.</li><li>When the song is done, it will unmute back to previous volume.</li><li>Use **/mute -1** to mute for more than one song.</li><li>User **/unmute** to unmute</li></ul>
**/afkcheck** | <ul><li>Toggles automatic afk replies</li><li>If endabled, will send messages after a small delay when @mentioned saying you are busy. </li></ul>
**/autowoot** | <ul><li>Toggles Autowoot (on by default)</li><li>Autowoot activates after 5-20 seconds to be more realistic then other plugins.</li></ul>

More Features to Come!
---------------------
