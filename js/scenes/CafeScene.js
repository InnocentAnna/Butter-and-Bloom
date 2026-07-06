export default class CafeScene extends Phaser.Scene {
    constructor() {
        super({ key: 'CafeScene' });
    }

    create() {
        // Set camera background color
        this.cameras.main.setBackgroundColor('#f5e6d3');

        // Center text
        this.add.text(512, 300, 'Cafe Scene Working!', {
            fontSize: '48px',
            fill: '#8b6f47',
            fontFamily: 'Arial',
            fontStyle: 'bold',
        }).setOrigin(0.5);

        // Brown floor at bottom
        this.add.rectangle(512, 720, 1024, 48, 0x8b6f47).setOrigin(0.5);

        // Orange counter
        this.add.rectangle(512, 500, 300, 150, 0xd4a574).setOrigin(0.5);

        // Menu button to return
        const backButton = this.add.rectangle(50, 30, 80, 35, 0xd4a574)
            .setInteractive()
            .setOrigin(0.5);
        backButton.setStrokeStyle(2, 0x8b6f47);

        this.add.text(50, 30, 'Menu', {
            fontSize: '14px',
            fill: '#ffffff',
            fontFamily: 'Arial',
            fontStyle: 'bold',
        }).setOrigin(0.5);

        backButton.on('pointerover', () => {
            backButton.setFillStyle(0xe6b87d);
            this.input.setDefaultCursor('pointer');
        });

        backButton.on('pointerout', () => {
            backButton.setFillStyle(0xd4a574);
            this.input.setDefaultCursor('default');
        });

        backButton.on('pointerdown', () => {
            this.scene.start('MenuScene');
        });
    }
}
