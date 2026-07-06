export default class CafeScene extends Phaser.Scene {
    constructor() {
        super({ key: 'CafeScene' });
    }

    create() {
        // Fade in on scene start
        this.cameras.main.setAlpha(0);
        this.cameras.main.fadeIn(500);

        // Wall background (cream color)
        this.add.rectangle(512, 300, 1024, 500, 0xf5e6d3).setOrigin(0.5);

        // Wooden floor
        this.add.rectangle(512, 650, 1024, 118, 0x8b6f47).setOrigin(0.5);

        // Add floor texture lines using graphics
        const floorGraphics = this.make.graphics({ x: 0, y: 0, add: true });
        floorGraphics.lineStyle(1, 0x6b4f2f, 0.6);
        for (let i = 0; i < 8; i++) {
            floorGraphics.lineBetween(0, 600 + i * 20, 1024, 600 + i * 20);
        }

        // Window on the left side
        this.add.rectangle(120, 220, 120, 140, 0xa8d8ea).setOrigin(0.5); // Sky/glass
        this.add.rectangle(120, 220, 120, 140, 0x8b6f47, false).setOrigin(0.5).setStrokeStyle(3, 0x6b4f2f);

        // Window panes
        const windowGraphics = this.make.graphics({ x: 0, y: 0, add: true });
        windowGraphics.lineStyle(2, 0x8b6f47);
        windowGraphics.lineBetween(120, 150, 120, 290); // Vertical pane
        windowGraphics.lineBetween(60, 220, 180, 220); // Horizontal pane

        // Cooking Counter - Left side
        this.add.rectangle(250, 420, 140, 120, 0xd4a574).setOrigin(0.5);
        this.add.rectangle(250, 420, 140, 120, 0x8b6f47, false).setOrigin(0.5).setStrokeStyle(2, 0x6b4f2f);

        // Stovetop on counter
        this.add.rectangle(250, 390, 70, 40, 0x404040).setOrigin(0.5);

        // Burners
        const burnerGraphics = this.make.graphics({ x: 0, y: 0, add: true });
        burnerGraphics.fillStyle(0x2a2a2a, 1);
        burnerGraphics.fillCircle(230, 380, 6);
        burnerGraphics.fillCircle(270, 380, 6);
        burnerGraphics.fillCircle(230, 400, 6);
        burnerGraphics.fillCircle(270, 400, 6);

        // Counter label
        this.add.text(250, 455, 'Cooking', {
            fontSize: '12px',
            fill: '#6b4f2f',
            fontFamily: 'Arial',
            fontStyle: 'bold',
        }).setOrigin(0.5);

        // Prep Table - Center
        this.add.rectangle(512, 420, 140, 120, 0xc9a961).setOrigin(0.5);
        this.add.rectangle(512, 420, 140, 120, 0x8b6f47, false).setOrigin(0.5).setStrokeStyle(2, 0x6b4f2f);

        // Prep surface highlight
        this.add.rectangle(512, 390, 120, 25, 0xd4b896, 0.7).setOrigin(0.5);

        // Bowl on prep table
        this.add.ellipse(485, 420, 35, 20, 0xf4a460).setOrigin(0.5);
        this.add.ellipse(485, 420, 35, 20, 0xd4845c, false).setOrigin(0.5).setStrokeStyle(1, 0x8b6f47);

        // Prep label
        this.add.text(512, 455, 'Prep', {
            fontSize: '12px',
            fill: '#6b4f2f',
            fontFamily: 'Arial',
            fontStyle: 'bold',
        }).setOrigin(0.5);

        // Display Case - Right side
        this.add.rectangle(774, 420, 140, 120, 0xd4a574).setOrigin(0.5);
        this.add.rectangle(774, 420, 140, 120, 0x8b6f47, false).setOrigin(0.5).setStrokeStyle(2, 0x6b4f2f);

        // Display glass/window
        this.add.rectangle(774, 385, 110, 70, 0xb0e0e6, 0.4).setOrigin(0.5);
        this.add.rectangle(774, 385, 110, 70, 0x87ceeb, false).setOrigin(0.5).setStrokeStyle(1, 0x6b8e99);

        // Plate in display case
        this.add.ellipse(774, 410, 40, 30, 0xf0e68c).setOrigin(0.5);
        this.add.ellipse(774, 410, 40, 30, 0xdaa520, false).setOrigin(0.5).setStrokeStyle(1, 0xb8860b);

        // Display label
        this.add.text(774, 455, 'Display', {
            fontSize: '12px',
            fill: '#6b4f2f',
            fontFamily: 'Arial',
            fontStyle: 'bold',
        }).setOrigin(0.5);

        // Sleeping cat placeholder - bottom right
        const catGraphics = this.make.graphics({ x: 0, y: 0, add: true });
        catGraphics.fillStyle(0xffb347, 1);
        catGraphics.fillCircle(900, 600, 25); // Body
        catGraphics.fillCircle(920, 590, 15); // Head
        catGraphics.fillStyle(0xff8c42, 1);
        catGraphics.fillCircle(915, 585, 4); // Ear
        catGraphics.fillCircle(925, 585, 4); // Ear

        this.add.text(900, 630, '💤 Napping', {
            fontSize: '10px',
            fill: '#8b6f47',
            fontFamily: 'Arial',
            fontStyle: 'italic',
        }).setOrigin(0.5);

        // Welcome message
        this.add.text(512, 100, "Welcome to Your Cozy Café!", {
            fontSize: '32px',
            fill: '#8b6f47',
            fontFamily: 'Georgia, serif',
            fontStyle: 'bold',
        }).setOrigin(0.5);

        this.add.text(512, 145, 'A place for cooking and creativity', {
            fontSize: '14px',
            fill: '#a0826d',
            fontFamily: 'Arial',
            fontStyle: 'italic',
        }).setOrigin(0.5);

        // Back to menu button (top-left)
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
