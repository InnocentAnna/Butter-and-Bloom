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
        // this.load.image('key', 'assets/images/filename.png');
        // this.load.audio('key', 'assets/audio/filename.mp3');
    }

    create() {
        // Boot scene complete, transition to menu
        this.scene.start('MenuScene');
    }
}
