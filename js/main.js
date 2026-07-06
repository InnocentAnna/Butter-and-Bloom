import BootScene from './scenes/BootScene.js';
import MenuScene from './scenes/MenuScene.js';
import CafeScene from './scenes/CafeScene.js';

const config = {
    type: Phaser.AUTO,
    width: 1024,
    height: 768,
    parent: 'game-container',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false,
        },
    },
    scene: [BootScene, MenuScene, CafeScene],
    render: {
        pixelArt: false,
        antialias: true,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        expandParent: true,
    },
};

const game = new Phaser.Game(config);
