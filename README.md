# edX++
edX++ Chrome Extension

This script adds the following features to the edX lecture video player:
1. Adds four new playback speeds (2.0x, 2.5x, 3.0x, and 4.0x) in addition to the default speeds
1. Adds a download button above the video player that lets you save the video for offline viewing
1. Adds new keyboard shortcuts to let you control the video (note: this overrrides the default behavior for these shortcuts)
    1. Press SPACE to play/pause the video
    1. Pres LEFT/RIGHT to move the video 5 seconds backwards/forwards in time
    1. Press ALT+LEFT/RIGHT to move the video 15 seconds backwards/forwards in time


![edX++ Example](https://i.imgur.com/WVdjCrN.png)

## Installation

1. Open the [Chrome Web Store link https://chrome.google.com/webstore/detail/edx++](https://chrome.google.com/webstore/detail/edx%2B%2B/pdnbnbhhjagfdmcoedkgmneagicpmidp/related?hl=en)
1. Click "Add to Chrome"
1. Viola!

## Legacy Tampermonkey Script
I will continue to maintain the legacy tampermonkey script for those who don't want to install a chrome extension. The instructions remain the same as before:

1. Install [Tampermonkey](https://tampermonkey.net/)
1. (Easiest) [Click here to view the source file edX Super Speed.user.js](https://github.com/EricPryzant/edX-Super-Speed/raw/master/edX%20Super%20Speed.user.js) Tampermonkey should automatically recognize the userscript and give you the option to install it.
1. Alternatively, copy the source code from [edX Super Speed.user.js](https://github.com/EricPryzant/edX-Super-Speed/blob/master/edX%20Super%20Speed.user.js)
1. Open Tampermonkey in your browser and click the Add Script tab (icon with a plus symbol)
1. Paste the source into the script window and hit save
1. Viola!
