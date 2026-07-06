# Butter & Bloom 🧈🌼

A cozy indie cooking game built with Phaser 3.

## Project Overview

Butter & Bloom is a relaxing cooking game where players manage their own cozy café. Create delicious dishes, serve customers, and grow your culinary empire in a warm, welcoming atmosphere.

## Technology Stack

- **Framework:** Phaser 3
- **Language:** JavaScript (ES Modules)
- **Markup:** HTML5
- **Styling:** CSS3
- **CDN:** Phaser loaded from jsDelivr

## Project Structure

```
Butter-and-Bloom/
├── index.html              # Main HTML file
├── style.css              # Global styles
├── js/
│   ├── main.js            # Game configuration and entry point
│   └── scenes/
│       ├── BootScene.js   # Asset loading and initialization
│       ├── MenuScene.js   # Title screen with play button
│       └── CafeScene.js   # Main café gameplay area
├── assets/
│   ├── images/            # Game sprites and backgrounds
│   ├── audio/             # Sound effects and music
│   └── fonts/             # Custom fonts
└── README.md              # Project documentation
```

## Features

### Current
- ✅ Responsive canvas that scales to screen size
- ✅ Polished title screen (MenuScene)
- ✅ Smooth fade transition to gameplay
- ✅ Cozy café placeholder with:
  - Wooden floor with texture
  - Large window detail
  - Cooking counter with stovetop
  - Prep table
  - Display case for finished items
- ✅ Menu button to return to title screen
- ✅ Warm, cohesive visual design

### Planned Features
- 🔄 Recipe system
- 🔄 Customer management
- 🔄 Cooking mechanics
- 🔄 Progression system
- 🔄 Ambient sound effects and music

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools or dependencies required (Phaser loaded from CDN)

### Running the Game

1. Open `index.html` in your web browser
2. Click "Play" on the title screen
3. Explore the café!

### Development

To add new assets or scenes:

1. **Adding Images:**
   - Place images in `assets/images/`
   - Preload in `BootScene.js` using `this.load.image()`

2. **Adding Audio:**
   - Place audio files in `assets/audio/`
   - Preload in `BootScene.js` using `this.load.audio()`

3. **Creating New Scenes:**
   - Create a new file in `js/scenes/`
   - Extend `Phaser.Scene`
   - Add to the scene list in `main.js`

## Color Palette

- **Primary:** `#8b6f47` (Warm Brown)
- **Secondary:** `#d4a574` (Light Tan)
- **Accent:** `#f5e6d3` (Cream)
- **Dark:** `#6b4f2f` (Deep Brown)
- **Highlight:** `#e6b87d` (Golden Tan)

## License

TBD

## Author

InnocentAnna

---

Happy cooking! 🍳✨
