export default class BootScene extends Phaser.Scene {
    constructor() {
        super({ key: 'BootScene' });
    }

    preload() {
        // Display loading progress
        this.add.text(512, 350, 'Loading...', {
            fontSize: '32px',
            fill: '#8b7355',
            fontFamily: 'Arial',
        }).setOrigin(0.5);

        // Load all game assets here
        this.load.image('apple', 'assets/images/apple.png');
        this.load.image('player', 'assets/images/idle.png');
    }

    create() {
        // Boot scene complete, transition to menu
        this.scene.start('MenuScene');
    }
}
