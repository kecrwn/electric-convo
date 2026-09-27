<div align="center">

# ⚡ Electric Convo 🎧

### *An Audiovisual Experiment with SVG Turbulence Shaders, OKLCH Dynamics & 3D Transitions*

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](#-how-it-works)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](#-how-it-works)
[![SVG Filters](https://img.shields.io/badge/SVG_Filters-FF9900?style=for-the-badge&logo=svg&logoColor=white)](#-how-it-works)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](#-how-it-works)

<p align="center">
  <a href="#-about">About</a> •
  <a href="#-features">Features</a> •
  <a href="#-how-it-works">How It Works</a> •
  <a href="#-quick-start">Quick Start</a> •
  <a href="#-license">License</a>
</p>

</div>

---

## 📖 About

**Electric Convo** is a mesmerizing front-end audiovisual experiment exploring organic liquid distortions through hardware-accelerated **SVG turbulence displacement filters** paired with next-generation **OKLCH color gradients**.

Users interact with a multi-state 3D flip card deck. Transitioning between states shifts electric frequencies, dynamic chromatic lighting, and triggers synchronized audio playback ("Together").

---

## ✨ Features

- 🌀 **Animated SVG Turbulence**: Real-time `<feTurbulence>`, `<feOffset>`, and `<feDisplacementMap>` noise shaders creating fluid ripple distortions.
- 🎨 **OKLCH Color Palette**: Utilizes the modern perceptual OKLCH color space for vivid, non-clipping electric neon hues.
- 🔄 **Perspective 3D Card Flips**: CSS 3D transforms (`rotateY`, `perspective`) creating physical card transitions.
- 🎵 **Synchronized Ambient Audio**: State-triggered audio playback that seamlessly hooks into card interactions.
- ⚡ **Zero External Dependencies**: Pure vanilla HTML5, CSS3, and JavaScript with 60 FPS hardware acceleration.

---

## 🔬 How It Works

The core visual effect is generated entirely through SVG filter mathematics:

```xml
<filter id="turbulent-displace" colorInterpolationFilters="sRGB">
  <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="10" result="noise1" seed="1" />
  <feOffset in="noise1" dx="0" dy="0" result="offsetNoise1">
    <animate attributeName="dy" values="700; 0" dur="6s" repeatCount="indefinite" />
  </feOffset>
  <feDisplacementMap in="SourceGraphic" in2="offsetNoise1" scale="35" xChannelSelector="R" yChannelSelector="G" />
</filter>
```

---

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/kecrwn/electric-convo.git
cd electric-convo

# Open in browser directly
open index.html
# or with any local server
npx serve .
```

---

## 📂 Project Structure

```
electric-convo/
├── index.html       # SVG filter definitions and 3D card deck markup
├── style.css        # OKLCH color variables and 3D perspective animations
├── script.js        # State-driven audio management
├── together.mp3     # Ambient soundtrack
└── together.png     # Visual texture artwork
```

---

## 📄 License

Distributed under the **MIT License**. See [`LICENSE`](LICENSE) for details.
