export default class MenuScene extends Phaser.Scene {
    constructor() {
        super({ key: 'MenuScene' });
    }

    create() {
        // Background gradient effect
        const graphics = this.make.graphics({ x: 0, y: 0, add: false });
        graphics.fillStyle(0xf5e6d3, 1);
        graphics.fillRect(0, 0, 1024, 768);
        graphics.generateTexture('menuBackground', 1024, 768);
        graphics.destroy();

        this.add.image(512, 384, 'menuBackground').setOrigin(0.5);

        // Title
        this.add.text(512, 150, "Butter & Bloom", {
            fontSize: '72px',
            fill: '#8b6f47',
            fontFamily: 'Georgia, serif',
            fontStyle: 'bold',
        }).setOrigin(0.5);

        // Subtitle
        this.add.text(512, 240, "A Cozy Cooking Adventure", {
            fontSize: '28px',
            fill: '#a0826d',
            fontFamily: 'Georgia, serif',
            fontStyle: 'italic',
        }).setOrigin(0.5);

        // Play button
        const playButton = this.add.rectangle(512, 420, 200, 60, 0xd4a574)
            .setInteractive()
            .setStrokeStyle(3, 0x8b6f47);

        this.add.text(512, 420, 'Play', {
            fontSize: '32px',
            fill: '#ffffff',
            fontFamily: 'Arial',
            fontStyle: 'bold',
        }).setOrigin(0.5);

        // Button hover effects
        playButton.on('pointerover', () => {
            playButton.setFillStyle(0xe6b87d);
            this.input.setDefaultCursor('pointer');
        });

        playButton.on('pointerout', () => {
            playButton.setFillStyle(0xd4a574);
            this.input.setDefaultCursor('default');
        });

        // Button click - transition to CafeScene with fade
        playButton.on('pointerdown', () => {
            this.cameras.main.fade(500, 0, 0, 0, false, (camera, progress) => {
                if (progress === 1) {
                    this.scene.start('CafeScene');
                }
            });
        });

        // Optional: Add decorative elements
        this.add.text(512, 700, "Click Play to Start", {
            fontSize: '16px',
            fill: '#a0826d',
            fontFamily: 'Arial',
        }).setOrigin(0.5).setAlpha(0.7);
    }
}
