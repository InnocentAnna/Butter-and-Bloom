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

        // Large window frame (wooden) - 25% larger, moved higher
        this.add.rectangle(512, 160, 375, 250, 0x8b6f47).setOrigin(0.5); // Frame

        // Window glass (blue sky) - 25% larger
        this.add.rectangle(512, 160, 350, 225, 0x87ceeb).setOrigin(0.5); // Glass

        // Window dividers using graphics
        const dividerGraphics = this.make.graphics({ x: 0, y: 0, add: true });
        dividerGraphics.lineStyle(3, 0x8b6f47);
        // Vertical divider
        dividerGraphics.lineBetween(512, 47, 512, 273);
        // Horizontal divider
        dividerGraphics.lineBetween(349, 160, 675, 160);

        // Soft sunlight - diagonal from window to lower-left
        this.add.rectangle(300, 500, 500, 350, 0xfffff0, 0.15).setOrigin(0.5).setRotation(-0.3);
        
        // Café counter - main body (10% wider, moved lower)
        this.add.rectangle(512, 600, 550, 120, 0xc19a6b).setOrigin(0.5);
        this.add.rectangle(512, 600, 550, 120, 0x8b6f47, false).setOrigin(0.5).setStrokeStyle(3, 0x6b4f2f);

        // Counter top surface (darker for 3D effect)
        this.add.rectangle(512, 560, 550, 20, 0xa0826d).setOrigin(0.5);
        
        this.player = this.physics.add.sprite(512, 650, 'player');
        this.player.setScale(1.5);
        this.player.setCollideWorldBounds(true);
        
        // Apple on counter
        this.add.image(512, 515, 'apple').setScale(2).setOrigin(0.5);

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
        this.cursors = this.input.keyboard.createCursorKeys();
    }
    update() {
    this.player.setVelocity(0);

const speed = 200;

    if (this.cursors.left.isDown) {
        this.player.setVelocityX(-speed);
    }

    if (this.cursors.right.isDown) {
        this.player.setVelocityX(speed);
    }

    if (this.cursors.up.isDown) {
        this.player.setVelocityY(-speed);
    }

    if (this.cursors.down.isDown) {
        this.player.setVelocityY(speed);
    }
}
}
