# 📄 Origami Portfolio - Design System

A beautiful origami-inspired portfolio with paper-fold aesthetics, handwritten typography, and tactile interactions.

## 🎨 Design Philosophy

This portfolio embodies the delicate art of paper folding, creating a digital experience that feels handcrafted, personal, and tactile.

### Core Aesthetic Elements

- **Paper Textures**: Soft cream backgrounds with subtle grain patterns
- **Folded Effects**: 3D shadows and perspective transforms mimicking real paper
- **Handwritten Typography**: Elegant Caveat font for headings, Crimson Text for body
- **Pastel Colors**: Mint, pink, yellow, blue, lavender - all with paper texture
- **Origami Accents**: Cranes, planes, and geometric marks as decorative elements

## 🖼️ Component Showcase

### Navigation Bar
A folded paper strip across the top with hand-cut label tabs that tilt on hover:
- **Origami logo mark**: Small folded crane/wax seal on the left
- **Nav items**: Paper tabs that lift and fold when hovered
- **Color**: Cream background with dark gray "ink" text

### About Section
Styled as a handwritten letter on parchment:
- **Letter container**: Textured paper with subtle crease patterns
- **Ink doodles**: Origami birds and paper planes float around
- **Typography**: Pen-style for intro, serif for paragraphs
- **Animation**: Paper edge curl on scroll

### Skills Section
Sticky notes pinned to a corkboard:
- **Skill cards**: Folded rectangles with soft pastel colors
- **Hover effect**: Cards lift and flip to reveal descriptions
- **Connectors**: Hand-drawn dotted lines between related skills
- **Layout**: Organized chaos of an artist's workspace

### Projects Section
Origami envelopes and postcards spread on a table:
- **Project cards**: Closed paper folds that open on hover
- **Tape strips**: Small strips anchoring the titles
- **Colors**: Muted tones (cream, tan, gray-blue, pale blush)
- **Interaction**: Unfold animation revealing details

### Contact Section
Note slipped into an open envelope:
- **Form fields**: Lined notepaper with slight slant
- **Submit button**: Paper tab with curled edges that "folds in" on click
- **Background**: Soft textured paper with faint origami crane watermark
- **Animation**: Envelope seal effect on submit

## 🎭 Animation System

### Hover Animations
```css
/* Paper lift effect */
.folded-note:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 35px rgba(0, 0, 0, 0.12);
}

/* Nav tab tilt */
.nav-label:hover {
  transform: perspective(600px) rotateX(-8deg) translateY(-2px);
}

/* Project envelope unfold */
.project-envelope:hover {
  transform: perspective(1000px) rotateY(0deg) translateY(-12px);
}
```

### Scroll Animations
- **Paper unfold**: Elements fold in from perspective when scrolling into view
- **Gentle float**: Subtle vertical oscillation for origami marks
- **Staggered delays**: Sequential appearance of grouped elements

### Button Interactions
- **Paper button**: Lifts on hover, subtle gradient overlay appears
- **Fold-in effect**: Scales and tilts on click (envelope seal simulation)
- **Outline button**: Fills with soft color wash on hover

## 🎨 Color Palette

### Primary Colors
- **Background**: `hsl(45 25% 96%)` - Soft cream
- **Foreground**: `hsl(25 20% 25%)` - Dark gray "ink"
- **Primary**: `hsl(35 70% 50%)` - Warm amber
- **Accent**: `hsl(15 85% 60%)` - Coral red
- **Secondary**: `hsl(280 45% 65%)` - Soft purple

### Skill Tag Pastels
- **Mint**: `hsl(160 60% 75%)`
- **Pink**: `hsl(340 70% 75%)`
- **Yellow**: `hsl(45 80% 70%)`
- **Blue**: `hsl(220 60% 75%)`
- **Lavender**: `hsl(280 50% 75%)`

## 🔤 Typography

### Font Families
- **Headings**: Caveat (handwritten, 700 weight)
- **Body**: Crimson Text (elegant serif)
- **Code/Forms**: Courier Prime (typewriter aesthetic)

### Font Usage
```tsx
// Handwritten titles
<h1 className="fine-stroke">My Journey</h1>

// Elegant body text
<p className="leading-relaxed font-medium">
  Your paragraph text here...
</p>

// Code or technical content
<code className="font-mono">npm install</code>
```

## 🛠️ Key CSS Classes

### Layout & Structure
- `.portfolio-container` - Max-width container with padding
- `.section-padding` - Consistent vertical spacing
- `.paper-texture` - Subtle paper grain overlay

### Paper Effects
- `.paper-fold` - Basic folded paper with gradient
- `.folded-note` - 3D folded card with hover lift
- `.paper-corner` - Folded corner reveal on hover
- `.fold-shadow-1/2/deep` - Varying shadow depths

### Interactive Elements
- `.paper-button` - Primary button with lift effect
- `.paper-button-outline` - Ghost button variant
- `.skill-tag` - Sticky note styling with rotation
- `.project-envelope` - Envelope/postcard card

### Special Effects
- `.letter-container` - Handwritten letter styling
- `.lined-paper` - Lined notepaper for forms
- `.wax-seal` - Circular stamp/seal effect
- `.origami-mark` - Floating decorative elements

## 📐 Layout Patterns

### Hero Section
```tsx
<section className="relative py-20 md:py-32 overflow-hidden">
  <div className="portfolio-container">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      {/* Content + Visual */}
    </div>
  </div>
</section>
```

### Card Grid
```tsx
<div className="grid md:grid-cols-3 gap-8">
  {items.map(item => (
    <div className="folded-note p-6 hover:fold-shadow-2 paper-corner">
      {/* Card content */}
    </div>
  ))}
</div>
```

### Letter Layout (About)
```tsx
<div className="letter-container">
  <h2 className="letter-title">Title</h2>
  <div className="relative z-10 space-y-4">
    <p>Your handwritten-style content...</p>
  </div>
  <div className="origami-mark bird">🕊️</div>
</div>
```

## 🎯 Best Practices

### Visual Hierarchy
1. Use handwritten font (Caveat) for all headings
2. Body text in Crimson Text (serif) for readability
3. Maintain cream/beige backgrounds with dark gray text
4. Add subtle paper texture to all major sections

### Interaction Design
1. All clickable elements should have hover states
2. Buttons lift slightly (translateY) on hover
3. Cards should have 3D fold shadows
4. Use perspective transforms sparingly for depth

### Animation Timing
- **Hover transitions**: 0.3s ease
- **Lift animations**: 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)
- **Scroll reveals**: 0.6-0.8s with stagger delays
- **Button clicks**: 0.2s scale transform

### Accessibility
- Maintain sufficient color contrast (dark gray on cream)
- Provide focus states for keyboard navigation
- Use semantic HTML elements
- Add ARIA labels where needed

## 🚀 Quick Start

### Adding a New Page
1. Create page in `client/pages/YourPage.tsx`
2. Use `Navigation` component at the top
3. Wrap content in `<div className="min-h-screen bg-background paper-texture">`
4. Add route in `App.tsx`

### Creating a Card Component
```tsx
<div className="folded-note p-6 hover:fold-shadow-2 paper-corner paper-texture">
  <h3 className="font-bold text-foreground fine-stroke">Title</h3>
  <p className="text-foreground font-medium">Description</p>
</div>
```

### Adding Scroll Animations
```tsx
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

function Component() {
  const ref = useScrollAnimation();
  
  return (
    <div ref={ref} className="animate-on-scroll">
      {/* Content animates in on scroll */}
    </div>
  );
}
```

## 📝 Notes

- **Paper grain**: Applied via SVG noise filter in body::before
- **Shadows**: Multiple box-shadows create depth and fold illusion
- **Perspective**: Used sparingly (600-1000px) for 3D rotations
- **Watermarks**: Positioned absolute with low opacity (0.03-0.15)
- **Mobile**: Simplified animations, removed complex transforms

## 🎨 Customization

### Changing Colors
Edit the CSS custom properties in `global.css`:
```css
:root {
  --background: 45 25% 96%;  /* Your cream color */
  --primary: 35 70% 50%;     /* Your accent color */
  /* ... */
}
```

### Adjusting Paper Texture
Modify the noise filter in body::before or adjust opacity.

### Typography
Swap fonts in the @import statements and update font-family declarations.

---

Built with ❤️ using React, TypeScript, TailwindCSS, and origami-inspired design principles.
