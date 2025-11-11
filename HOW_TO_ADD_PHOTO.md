# 📸 How to Add Your Photo

## Quick Steps

### 1. **Add your photo to the project**
   - Create a folder: `public/images/` (if it doesn't exist)
   - Put your photo there, e.g., `public/images/profile.jpg`

### 2. **Update Index.tsx**
   
Find this section (around line 73):
```tsx
{/* Put your image here: <img src="/your-photo.jpg" alt="Shlok Patel" className="w-full h-full object-cover" /> */}
<div className="w-24 h-24 bg-primary/10 rounded-full"></div>
```

Replace it with:
```tsx
<img src="/images/profile.jpg" alt="Shlok Patel" className="w-full h-full object-cover" />
```

### 3. **That's it!**
   Your photo will appear in the circular frame on the home page.

---

## Photo Tips

- **Size**: Recommended 500x500px or larger (square format)
- **Format**: JPG, PNG, or WebP
- **File size**: Keep under 500KB for fast loading
- **Style**: Professional headshot or portrait

---

## Alternative: Full Square Frame

If you want the photo to fill the entire square frame instead of just the circle:

Find this line (around line 65):
```tsx
<div className="folded-note aspect-square flex items-center justify-center overflow-hidden p-8 paper-corner">
```

Replace the entire inner content with:
```tsx
<div className="folded-note aspect-square flex items-center justify-center overflow-hidden p-0 paper-corner">
  <img 
    src="/images/profile.jpg" 
    alt="Shlok Patel" 
    className="w-full h-full object-cover"
  />
</div>
```

This will make your photo fill the entire folded paper frame!
