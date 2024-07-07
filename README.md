Little quick&dirty project I made for Elden-Ring.

## What this is about
Have at least 2 monitors.  
Open [Interactive map](https://eldenring.wiki.fextralife.com/Interactive+Map) in your browser and put it to fullscreen on your second monitor.  
Start the autohotkey-script found in ./autohotkey.  
Open Elden Ring on your primary monitor.  
Have fun playing & enjoy having a fully controllable map on the side.

## Numpad Controls
Switch map overground <=> underground: __/__  
Move map: __up/down/left/right__  
Checkboxes up/down: __7 and 1__  
Check/Uncheck: __9__

## Prerequisites / Support
  - [Brave browser](https://brave.com/download/)
    - The autohotkey script depends on it to find the correct process/window/tab.
  - [Autohotkey V2](https://www.autohotkey.com/)

## Setup
  - Clone the repo
  - Go to [brave://extensions](brave://extensions)
  - Click on _Load unpacked_ on the top left and select the repo root folder.
  - Click on the addon, and then _Open Elden Ring Map_ in the menu
    - Wait till the website is fully loaded. The map should go into fullscreen.
  - Click once on the map to set the focus (buggs sometimes)
  - Navigate to the ./autohotkey folder and execute __map_control.ahk__.
  - __Turn off__ numpad-lock as the hotkeys are not tied to the numbers, but the arrows, pos1, end, pageup etc.

Thats it.  
Place your browser where ever you want.  
If you unfocus the browser, autohotkey will continue passing your numpad-keys to the browser.  
The addon will listen to keydown events and handle the map interaction.

## Known issues
### Keys not working:
 - Turn off numpad-lock
 - Click the map once to set the focus correctly
 - Close any other instance of your browser.


Contribution is appreciated.  
I don't actively plan to continue from this point on as _it works on my machine_ lol.