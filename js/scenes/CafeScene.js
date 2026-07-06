export default class CafeScene extends Phaser.Scene {
    constructor() {
        super({ key: 'CafeScene' });
    }

    create() {
        // Set camera background color
        this.cameras.main.setBackgroundColor('#f5e6d3');

        // Wooden floor at bottom
        this.add.rectangle(512, 720, 1024, 48, 0x8b6f47).setOrigin(0.5);

        // Wooden wall trim (just above floor)
        this.add.rectangle(512, 700, 1000, 20, 0x9b7d5f).setOrigin(0.5);

        // Large window frame (wooden)
        this.add.rectangle(512, 200, 300, 200, 0x8b6f47).setOrigin(0.5); // Frame

        // Window glass (blue sky)
        this.add.rectangle(512, 200, 280, 180, 0x87ceeb).setOrigin(0.5); // Glass

        // Window dividers using graphics
        const dividerGraphics = this.make.graphics({ x: 0, y: 0, add: true });
        dividerGraphics.lineStyle(3, 0x8b6f47);
        // Vertical divider
        dividerGraphics.lineBetween(512, 110, 512, 290);
        // Horizontal divider
        dividerGraphics.lineBetween(372, 200, 652, 200);

        // Soft sunlight - semi-transparent pale yellow rectangle
        this.add.rectangle(400, 450, 400, 300, 0xfffff0, 0.15).setOrigin(0.5);

        // Café counter - main body
        this.add.rectangle(512, 580, 500, 120, 0xc19a6b).setOrigin(0.5);
        this.add.rectangle(512, 580, 500, 120, 0x8b6f47, false).setOrigin(0.5).setStrokeStyle(3, 0x6b4f2f);

        // Counter top surface (darker for 3D effect)
        this.add.rectangle(512, 540, 500, 20, 0xa0826d).setOrigin(0.5);

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
