# mc-assets
- This is the repository that the Mine.craft launcher[currently in alpha testing] fetches from. 
- Do not try to copy these files, they will not run in a browser. 
## File Directory
### Folders
- Each folder holds a version.
- In each version, there is a modified version of the unpackaged game.
#### Version Directory
- Each version contains a main.js file. This is the file that runs everything.
- Each version contains an index.html file. This is the "container" file, as it holds the window for the game.
- Each version contains sound files. These are the soundtrack. Do not copy them.
- Each version contains a script.js file. This is the main game script. This usually includes:
  - The music scripts (if they load slower when separated)
  - Any packages that otherwise would load slow
  - The game renderer
  - The game generation
  - The game textures and block data
  - The game's block sound effects (block breaking and placing sounds, explosion sounds, etc)
  - Basically, everything other than mod loading.
- Most versions after 0.3 Pre-Beta contain a mods.js file. This is the mod loading script. It does the following:
  - Loads each mod file into a variable
  - Creates an ID for each mod
  - Checks the mod (checks to see if the version matches, and checks the mod script to make sure it doesn't break the game)
  - Then, if everything seems good, it sends the mod to script.js, where it runs the mod. 
### versions.js
- This is the "directory" script for the launcher.
- This includes the urls to fetch different versions from, all the filenames in each version folder, and how to save each version as.
- This script is fetched and saved every time the launcher is opened.
##### Last updated August 28, 2023
