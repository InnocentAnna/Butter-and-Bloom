export default class CafeScene extends Phaser.Scene {
    constructor() {
        super({ key: 'CafeScene' });
    }

    create() {
        // Fade in on scene start
        this.cameras.main.setAlpha(0);
        this.cameras.main.fadeIn(500);

        // Sky/ceiling background
        this.add.rectangle(512, 100, 1024, 200, 0xe8d9c3).setOrigin(0.5);

        // Large window with outdoor view
        const windowX = 100;
        const windowY = 180;
        this.add.rectangle(windowX, windowY, 140, 160, 0x87ceeb).setOrigin(0.5); // Window glass
        this.add.rectangle(windowX, windowY, 140, 160, 0x8b7355, false, 3).setOrigin(0.5); // Window frame

        // Window panes
        this.add.line(windowX, windowY - 80, windowX, windowY + 80, 0x8b7355, 1.5);
        this.add.line(windowX - 70, windowY, windowX + 70, windowY, 0x8b7355, 1.5);

        // Wall background
        this.add.rectangle(512, 384, 1024, 536, 0xd4c5b9).setOrigin(0.5);

        // Wooden floor
        const floorGraphics = this.make.graphics({ x: 0, y: 600, add: false });
        floorGraphics.fillStyle(0x8b6f47, 1);
        floorGraphics.fillRect(0, 0, 1024, 168);

        // Add wood texture pattern
        for (let i = 0; i < 20; i++) {
            floorGraphics.lineStyle(1, 0x6b4f2f, 0.5);
            floorGraphics.lineBetween(0, 600 + i * 20, 1024, 600 + i * 20);
        }

        floorGraphics.generateTexture('floor', 1024, 168);
        floorGraphics.destroy();
        this.add.image(512, 684, 'floor').setOrigin(0.5);

        // Cooking Counter - Left side
        this.add.rectangle(250, 480, 160, 140, 0xb8956a).setOrigin(0.5);
        this.add.rectangle(250, 480, 160, 140, 0x8b6f47, false, 3).setOrigin(0.5);

        // Stovetop
        this.add.rectangle(250, 450, 80, 50, 0x696969).setOrigin(0.5);
        this.add.rectangle(230, 440, 12, 12, 0x404040).setOrigin(0.5);
        this.add.rectangle(270, 440, 12, 12, 0x404040).setOrigin(0.5);
        this.add.rectangle(230, 460, 12, 12, 0x404040).setOrigin(0.5);
        this.add.rectangle(270, 460, 12, 12, 0x404040).setOrigin(0.5);

        // Counter label
        this.add.text(250, 520, 'Cooking', {
            fontSize: '14px',
            fill: '#ffffff',
            fontFamily: 'Arial',
            fontStyle: 'bold',
        }).setOrigin(0.5);

        // Prep Table - Center
        this.add.rectangle(512, 480, 160, 140, 0xd2b48c).setOrigin(0.5);
        this.add.rectangle(512, 480, 160, 140, 0x8b6f47, false, 3).setOrigin(0.5);

        // Prep surface detail
        this.add.rectangle(512, 450, 140, 30, 0xc19a6b, 0.8).setOrigin(0.5);

        // Prep label
        this.add.text(512, 520, 'Prep', {
            fontSize: '14px',
            fill: '#ffffff',
            fontFamily: 'Arial',
            fontStyle: 'bold',
        }).setOrigin(0.5);

        // Display Case - Right side
        this.add.rectangle(774, 480, 160, 140, 0xb8956a).setOrigin(0.5);
        this.add.rectangle(774, 480, 160, 140, 0x8b6f47, false, 3).setOrigin(0.5);

        // Display glass
        this.add.rectangle(774, 450, 140, 80, 0x87ceeb, 0.3).setOrigin(0.5);
        this.add.rectangle(774, 450, 140, 80, 0xcccccc, false, 2).setOrigin(0.5);

        // Display label
        this.add.text(774, 520, 'Display', {
            fontSize: '14px',
            fill: '#ffffff',
            fontFamily: 'Arial',
            fontStyle: 'bold',
        }).setOrigin(0.5);

        // Welcome message
        this.add.text(512, 300, 'Welcome to Your Cozy Café!', {
            fontSize: '36px',
            fill: '#8b6f47',
            fontFamily: 'Georgia, serif',
            fontStyle: 'bold',
        }).setOrigin(0.5);

        this.add.text(512, 350, 'Placeholder for future gameplay', {
            fontSize: '16px',
            fill: '#a0826d',
            fontFamily: 'Arial',
            fontStyle: 'italic',
        }).setOrigin(0.5);

        // Back to menu button (subtle)
        const backButton = this.add.rectangle(50, 30, 100, 40, 0xd4a574)
            .setInteractive()
            .setStrokeStyle(2, 0x8b6f47);

        this.add.text(50, 30, 'Menu', {
            fontSize: '16px',
            fill: '#ffffff',
            fontFamily: 'Arial',
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
