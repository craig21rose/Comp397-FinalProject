/// <reference path="constants.ts" />
/// <reference path="managers/asset.ts" />
/// <reference path="objects/asteroid.ts" />
/// <reference path="objects/star.ts" />
/// <reference path="objects/boss.ts" />
/// <reference path="objects/space.ts" />
/// <reference path="objects/ship.ts" />
/// <reference path="objects/scoreboard.ts" />
/// <reference path="objects/label.ts" />
/// <reference path="objects/button.ts" />
/// <reference path="managers/collision.ts" />
/// <reference path="states/play.ts" />
/// <reference path="states/menu.ts" />
/// <reference path="states/instructions.ts" />
/// <reference path="states/gameover.ts" />
/// <reference path="states/difficulty.ts" />
/// <reference path="states/normal.ts" />
/// <reference path="states/hard.ts" />
// Mail Pilot Version 11 - 
// AUTHOR NAME:  Tom Tsiliopoulos
// Last Modified: October 30th
// Mail Pilot Version 11 Description - Game Template
//VARIABLES
var stage;
var game;
var space;
var ship;
var star;
//var boss: objects.Boss;
var boss = [];
var asteroids = []; // Clouds array;
var scoreboard;
var collision;
var tryAgain;
var playButton;
var instructionsButton;
var menuButton;
var easyButton;
var normalButton;
var hardButton;
var currentState;
var currentStateFunction;
// Preload function - Loads Assets and initializes game;
function preload() {
    managers.Assets.init();
    managers.Assets.loader.addEventListener("complete", init);
}
// init called after Assets have been loaded.
function init() {
    stage = new createjs.Stage(document.getElementById("canvas"));
    stage.enableMouseOver(30);
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", gameLoop);
    optimizeForMobile();
    currentState = constants.MENU_STATE;
    changeState(currentState);
}
// Add touch support for mobile devices
function optimizeForMobile() {
    if (createjs.Touch.isSupported()) {
        createjs.Touch.enable(stage);
    }
}
// Game Loop
function gameLoop(event) {
    currentStateFunction();
    stage.update();
}
//State Change Function 
function changeState(state) {
    switch (state) {
        case constants.MENU_STATE:
            // instantiate menu screen
            currentStateFunction = states.menuState;
            states.menu();
            break;
        case constants.PLAY_STATE:
            // instantiate play screen
            currentStateFunction = states.playState;
            states.play();
            break;
        case constants.NORMAL_STATE:
            // instantiate play screen
            currentStateFunction = states.normalState;
            states.normalPlay();
            break;
        case constants.HARD_STATE:
            // instantiate play screen
            currentStateFunction = states.hardState;
            states.hardPlay();
            break;
        case constants.INSTRUCTION_STATE:
            // instantiate play screen
            currentStateFunction = states.instructionState;
            states.instructions();
            break;
        case constants.DIFFICULTY_STATE:
            // instantiate play screen
            currentStateFunction = states.difficultyState;
            states.difficulty();
            break;
        case constants.GAME_OVER_STATE:
            currentStateFunction = states.gameOverState;
            // instantiate game over screen
            states.gameOver();
            break;
    }
}
//# sourceMappingURL=game.js.map