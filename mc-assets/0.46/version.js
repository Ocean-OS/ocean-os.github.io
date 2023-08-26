const version = "0.46 Pre-Beta";
window.version = version;
/* Changelog 
The only versions archived do not include any Pre-Beta versions other than 0.3 and two variations of 0.46. 
Any sites or programs claiming to be a Pre-Beta version are fake and may be a malicious program. 
Pre-Beta
0.1-0.3 - Beginning
Adds world generation, placing and breaking blocks, and a basic menu
0.3
Adds fonts, music (30 minute soundtrack), adds tree variety (before there were only naturally spawning oak)
0.33 (Completed 7/05/2023)
Adds offline compatibility for fonts and 30 minute soundtrack, along with a couple keyboard shortcuts, including F3, adds splash text
0.4 (Completed 7/10/2023)
Adds hackPack(), fixes some bugs, restyles hotbar, replaces 30 minute soundtrack with 17 different songs that play randomly, adds several new blocks (starts after concrete), and organizes wool and concrete blocks by color, adds two biomes; desert, cherry
0.43 (Completed 7/25/2023)
Changes biome generation, changes default render distance from 4 chunks to 12, shows biome and version (and if mods are active) in F3 info, adds working TNT, adds village biome, adds ore radius (so more of the same ore spawn around one block) starts to create mod compatibility for creating new blocks and adding new textures, and adds a checker for mods to see if they seem safe. 
This update also added Error Screens, which give an error code between 0 and 5. 
Here's what each error code means:
0: EvalError (Probably an issue with mods)
1: RangeError (Array issue, could be chunk saving/loading, blockData, etc)
2: ReferenceError (Undefined variable/object/function being referenced)
3: SyntaxError (Probably an issue with mods)
4: TypeError (Most likely a texture loading issue)
5: URIError (It is most likely impossible to get this error.)
This version also added new parameters for blockData. These parameters are: 
redstoneType (can be activator or output)
alwaysOn (true or false)
outputType (explosion)
explosionStrength (integer)
0.46 (Current)
Adds explosion sounds to TNT, adds block placing and breaking sounds (using new blockSounds array), when block is placed on grass grass turns to dirt, fixed bug where villages wouldn't generate at negative coordinates, clears localStorage after mods are run and detected so it is harder to make it seem like your game isn't modded, adds version at corner of main menu, adds "not a service approved by mojang/microsoft" text to the other corner to follow new usage guidelines https://www.minecraft.net/en-us/usage-guidelines, changes name to Mine.craft to avoid strike from mojang/microsoft, adds obsidian and water, adds C418 - Ki to soundtrack, replaced cactus texture with full block version from 1.0.6, adds naturally generating lakes at y=32, adds sneaking, adds redstone lamps (can be activated using a redstone block), changes air texture from 0101100000000 to 0g0g1000, adds CPU and GPU info to debug, changes hideFace function to accommodate for water, changes block menu row amount from 13 to 20, stops audio error from showing in console, adds "Hold Up!" message when Devtools is opened, redoes inventory data from:
inventory = {
    hotbar: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    full: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    main: [],
    hotbarSlot: 0,
    size: 40,
    holding: 0
}
to:
inventory = {
    hotbar: [
        {
            id: 0, 
            amount: 1,
            data: {}
        },
        {
            id: 0, 
            amount: 1,
            data: {}
        },
        {
            id: 0, 
            amount: 1,
            data: {}
        },
        {
            id: 0, 
            amount: 1,
            data: {}
        },
        {
            id: 0, 
            amount: 1,
            data: {}
        },
        {
            id: 0, 
            amount: 1,
            data: {}
        },
        {
            id: 0, 
            amount: 1,
            data: {}
        },
        {
            id: 0, 
            amount: 1,
            data: {}
        },
        {
            id: 0, 
            amount: 1,
            data: {}
        },  
    ],
    full: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    main: [],
    hotbarSlot: 0,
    size: 40,
    holding: 0
};, shows block amounts in hotbar, 
This version also adds new parameters for blockData. These parameters are: 
placeSounds - Sounds played when block is placed.
breakSounds - Sounds played when block is broken.
unbreakableTNT - (boolean) if block is breakable or not by TNT.
inInventory - (boolean) whether block is accessible in the inventory.
collisions - (boolean) whether player collides with block or can go through it.
hitBox - (boolean) whether a player can break a certain block. 
*/