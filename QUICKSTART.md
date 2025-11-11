# 🚀 Quick Start Guide - Origami Portfolio

## Start the Dev Server

```bash
npm run dev
```

Then open: **http://localhost:8080**

---

## 🎨 Pages Implemented

### ✅ Home (`/`)
- Hero with stats cards
- Folded paper aesthetic throughout
- Floating origami elements

### ✅ About (`/about`)
- Handwritten letter on parchment
- Origami bird and plane decorations
- Core values in folded notes

### ✅ Skills (`/skills`)
- Sticky note tags with pastel colors
- Hover to reveal descriptions
- Rotated for organic feel

### ✅ Projects (`/projects`)
- Envelope/postcard cards
- Unfold animation on hover
- Tape strip effects

### ✅ Contact (`/contact`) **NEW!**
- Envelope form container
- Lined notepaper inputs
- Wax seal and watermarks

---

## 🎯 Design Elements at a Glance

### Navigation
```tsx
// Origami swan logo with rotation
🦢 + "Shlok Patel"

// Paper tabs that tilt on hover
Home | Contents | About | Resume | Projects | Skills | Contact
```

### Typography Stack
```
Headings → Caveat (handwritten)
Body → Crimson Text (elegant serif)
Forms/Code → Courier Prime (typewriter)
```

### Color Palette
```
Cream background: hsl(45 25% 96%)
Dark gray ink: hsl(25 20% 25%)
Warm amber: hsl(35 70% 50%)
Coral red: hsl(15 85% 60%)
```

### Key Animations
- **Hover**: Cards lift with shadow depth
- **Scroll**: Elements unfold into view
- **Click**: Buttons fold inward
- **Float**: Gentle vertical oscillation

---

## 📦 Essential CSS Classes

### Components
```css
.folded-note         /* 3D paper card */
.paper-button        /* Primary button */
.skill-tag           /* Sticky note */
.project-envelope    /* Postcard card */
.letter-container    /* Handwritten letter */
```

### Effects
```css
.paper-texture       /* Paper grain overlay */
.fine-stroke         /* Ink-like text shadow */
.paper-corner        /* Folded corner reveal */
.gentle-float        /* Animation */
```

### Layout
```css
.portfolio-container /* Max-width wrapper */
.section-padding     /* Vertical spacing */
```

---

## 🎨 Common Patterns

### Paper Card
```tsx
<div className="folded-note p-6 hover:fold-shadow-2 paper-corner paper-texture">
  <h3 className="font-bold fine-stroke">Title</h3>
  <p className="font-medium">Content</p>
</div>
```

### Button Group
```tsx
<div className="flex gap-4">
  <button className="paper-button">Primary</button>
  <button className="paper-button-outline">Secondary</button>
</div>
```

### Skill Tag
```tsx
<div className="skill-tag skill-mint paper-texture">
  <h3 className="font-bold uppercase text-sm fine-stroke">HTML</h3>
  <p className="text-xs font-medium">Description</p>
</div>
```

### Origami Mark
```tsx
<div className="origami-mark bird">🕊️</div>
```

---

## 🔧 Customization

### Change Primary Color
Edit `client/global.css`:
```css
:root {
  --primary: 35 70% 50%;  /* Your HSL values */
}
```

### Add New Pastel Color
```css
.skill-orange {
  background: hsl(25 75% 70%);
  color: hsl(25 40% 30%);
}
```

### Adjust Paper Texture Intensity
```css
body::before {
  opacity: 0.7;  /* 0 = none, 1 = full */
}
```

---

## 📱 Responsive Behavior

- **Desktop**: Full 3D transforms and animations
- **Tablet**: Simplified grid layouts
- **Mobile**: 
  - Nav becomes hamburger menu
  - Cards stack vertically
  - Reduced animation complexity

---

## 🎯 SEO & Performance

### Optimizations Applied
- ✅ Semantic HTML structure
- ✅ Proper heading hierarchy
- ✅ Fast CSS animations (transform/opacity)
- ✅ Lazy-loaded components
- ✅ Optimized fonts (Google Fonts)

### Lighthouse Tips
1. Add alt text to images
2. Optimize images (WebP format)
3. Add meta descriptions
4. Implement code splitting

---

## 🐛 Troubleshooting

### Styles Not Loading?
```bash
# Clear cache and restart
rm -rf node_modules/.vite
npm run dev
```

### Fonts Not Appearing?
Check internet connection (Google Fonts CDN required)

### Animations Janky?
- Reduce `will-change` usage
- Use `transform` instead of `top/left`
- Check browser DevTools performance tab

---

## 📚 Documentation

- **Full Design System**: `DESIGN_SYSTEM.md`
- **Implementation Details**: `IMPLEMENTATION_SUMMARY.md`
- **Project Structure**: `AGENTS.md`

---

## 🎉 You're Ready!

Your origami-inspired portfolio is complete with:
- ✅ Beautiful paper-fold aesthetics
- ✅ Handwritten typography
- ✅ Tactile interactions
- ✅ Delicate animations
- ✅ Fully responsive design

**Start the dev server and explore your new portfolio!** 🎨📄✨

```bash
npm run dev
```

Open http://localhost:8080 and enjoy! 🚀
