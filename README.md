# Berlin Cricket Academy Website (BCA_V2)

Official website for Berlin Cricket Academy - Berlin's first and only cricket club established specifically for kids and women, with strong participation from men.

## Overview

This is a modern, responsive website built with pure HTML, CSS, and JavaScript. The website showcases the academy's achievements, teams, fixtures, membership information, and provides contact details for prospective members.

## Technology Stack

- **HTML5** - Semantic markup for all pages
- **Tailwind CSS** (CDN) - Utility-first CSS framework for responsive design
- **Vanilla JavaScript** - No frameworks, pure JS for interactive features
- **Google Sheets Integration** - Dynamic announcements system

## Project Structure

```
BCA_Website/
├── index.html          # Homepage with hero section, achievements, initiatives
├── about.html          # About page with club history and information
├── teams.html          # Teams information and details
├── fixtures.html       # Match schedules and fixtures
├── memberships.html    # Membership plans and registration details
├── gallery.html        # Photo gallery
├── contact.html        # Contact information and form
├── .gitignore          # Git ignore file (excludes .claude folder)
└── README.md           # This file
```

## Design System

### Color Palette

The website uses a custom red color scheme representing Berlin Cricket Academy:

- **Primary Red (bca-red)**: `#DC143C` - Main brand color
- **Light Red (bca-light)**: `#EF4444` - Hover states and accents
- **Dark Red (bca-dark)**: `#991B1B` - Navigation and headers

### Custom Tailwind Configuration

```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                'bca-red': '#DC143C',
                'bca-light': '#EF4444',
                'bca-dark': '#991B1B'
            }
        }
    }
}
```

## Key Features

### 1. Responsive Navigation
- Sticky navigation bar with active state highlighting
- Mobile-responsive hamburger menu
- Social media links (Instagram, YouTube, Facebook)

### 2. Announcement Banner System
- Dynamic announcements loaded from Google Sheets
- Multiple announcement types: `info`, `warning`, `important`, `success`
- Closeable banners with smooth animations
- Easy to update without code changes

### 3. Hero Section
- Full-width background image with gradient overlay
- Compelling call-to-action
- Responsive text sizing

### 4. Instagram Slideshow
- Auto-sliding photo carousel
- Responsive breakpoints (4 slides on desktop, 2 on tablet, 1 on mobile)
- Manual navigation with prev/next buttons
- Hover effects on images

### 5. Timeline Component
- Visual timeline for achievements
- Custom styled with circular markers and connecting lines
- Color-coded with BCA brand colors

### 6. Card-Based Layouts
- Hover effects with transform and shadow
- Gradient backgrounds
- Border accents using brand colors

### 7. Statistics Cards
- Gradient backgrounds
- Left border accent
- Responsive grid layout

## CSS Components

### Custom Styles

#### Navigation Links
```css
.nav-link {
    transition: color 0.3s ease;
}
.nav-link:hover {
    color: #EF4444;
}
.nav-link.active {
    color: #EF4444;
    font-weight: 600;
}
```

#### Card Hover Effects
```css
.card-hover:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(220, 20, 60, 0.3);
}
```

#### Timeline Items
- Circular markers with border and shadow
- Connecting vertical lines
- Responsive padding and spacing

#### Stat Cards
```css
.stat-card {
    background: linear-gradient(135deg, #ffffff 0%, #fef2f2 100%);
    border-left: 4px solid #DC143C;
}
```

## JavaScript Features

### Mobile Menu Toggle
```javascript
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('active');
}
```

### Instagram Slideshow
- Auto-calculates slides per view based on screen width
- Infinite loop navigation
- Smooth CSS transitions

### Announcements System
- Fetches data from Google Sheets
- Displays multiple announcement types
- Closeable with smooth animations
- Falls back to sample data if sheet unavailable

## Configuration

### Google Sheets Integration

To enable dynamic announcements, update the following constants in `index.html`:

```javascript
const ANNOUNCEMENTS_SHEET_ID = 'YOUR_SHEET_ID';
const ANNOUNCEMENTS_SHEET_NAME = 'Announcements';
```

**Sheet Structure:**
| Title | Message | Type | Show | Link |
|-------|---------|------|------|------|
| 🏏 Registration Open | Registration for 2025 season now open! | important | Yes | contact.html |

### Image Placeholders

Replace placeholder images with actual images:
- Hero background: Line 24 in `index.html`
- Olympiastadion image: Line 254
- Tour image: Line 261
- Instagram slideshow: Lines 406-428

### Social Media Links

Update social media URLs in the navigation (lines 198-200):
```html
<a href="YOUR_INSTAGRAM_URL" class="nav-link text-lg" title="Instagram">📷</a>
<a href="YOUR_YOUTUBE_URL" class="nav-link text-lg" title="YouTube">▶️</a>
<a href="YOUR_FACEBOOK_URL" class="nav-link text-lg" title="Facebook">f</a>
```

## Responsive Breakpoints

The website uses Tailwind's default breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 768px
- **Desktop**: 768px - 1024px
- **Large Desktop**: > 1024px

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Considerations

### Current Implementation
- Tailwind CSS loaded via CDN (not recommended for production)
- Images loaded from Unsplash (placeholder images)

### Production Recommendations
1. **Build Tailwind CSS**: Use the Tailwind CLI to generate a production CSS file
2. **Optimize Images**: Compress and serve optimized images
3. **Add Caching**: Implement browser caching for static assets
4. **Minify JavaScript**: Minify inline JavaScript
5. **CDN Hosting**: Consider hosting on a CDN for faster global delivery

## Development Workflow

### Local Development
Simply open any HTML file in a web browser. No build process required.

### Making Changes
1. Edit HTML files directly
2. Refresh browser to see changes
3. Test responsiveness using browser dev tools

### Deployment
Upload all HTML files to your web hosting service. Ensure all files are in the same directory.

## License

© 2025 Berlin Cricket Academy. All rights reserved.

---

**Cricket for All** - Welcoming Players of Every Age, Ability & Background
