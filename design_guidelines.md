# Design Guidelines: Penguin Character Landing Page

## Design Approach: Reference-Based
**Primary Reference:** junjunbnb.com character-centric layout
**Character Theme:** Viral Douyin penguin - playful, adorable, winter-themed charm

## Core Design Elements

### A. Color Palette

**Light Mode:**
- Primary: `350 100% 70%` (Soft Pink #FF6B9D) - Main brand color, CTAs, accents
- Secondary: `174 60% 54%` (Teal #4ECDC4) - Interactive elements, links
- Accent: `47 100% 71%` (Warm Yellow #FFE66D) - Highlights, section backgrounds
- Coral: `21 100% 66%` (Coral #FF8E53) - Secondary CTAs, hover states
- Background: `0 0% 97%` (Light Grey #F8F8F8) - Page background
- Text Primary: `209 28% 23%` (Dark Blue-Grey #2C3E50) - Body text
- Text Secondary: `209 20% 50%` - Muted text
- White: `0 0% 100%` - Card backgrounds, pure white elements

**Dark Mode:**
- Background: `209 28% 12%` - Deep blue-grey base
- Card Background: `209 24% 16%` - Elevated surfaces
- Text Primary: `0 0% 95%` - High contrast text
- Text Secondary: `0 0% 70%` - Muted text
- Maintain same hue values for brand colors with adjusted lightness for dark backgrounds

### B. Typography

**Font Families:**
- Headings: Nunito (700, 800 weights)
- Body: Inter (400, 500, 600 weights)
- Accents/CTAs: Poppins (600, 700 weights)

**Type Scale:**
- Hero Headline: text-5xl md:text-6xl lg:text-7xl (bold/extrabold)
- Section Titles: text-3xl md:text-4xl lg:text-5xl (bold)
- Subsection Titles: text-2xl md:text-3xl (semibold)
- Body Large: text-lg md:text-xl (regular/medium)
- Body: text-base md:text-lg (regular)
- Small Text: text-sm md:text-base (regular)

### C. Layout System

**Spacing Primitives:** Use Tailwind units of 4, 6, 8, 12, 16, 20, 24
- Section padding: `py-16 md:py-20 lg:py-24`
- Card spacing: `p-6 md:p-8`
- Element gaps: `gap-4 md:gap-6 lg:gap-8`
- Container max-width: `max-w-7xl mx-auto px-4 md:px-6 lg:px-8`

**Grid System:**
- Hero: Single column centered layout
- Feature cards: `grid-cols-1 md:grid-cols-2 lg:grid-cols-4` for steps
- Content sections: Two-column `lg:grid-cols-2` with image/text splits
- Mobile: Always stack to single column

### D. Component Library

**Navigation:**
- Sticky header with blur backdrop
- Logo left, social icons/CTA right
- Mobile: Hamburger menu with slide-in drawer
- Background: `bg-white/80 dark:bg-gray-900/80 backdrop-blur-md`

**Buttons:**
- Primary: Pink background with white text, bold Poppins font
- Secondary: Teal background with white text
- Outline: Border with transparent background and blurred backdrop when on images
- Size: `px-8 py-3 md:px-10 md:py-4` for hero CTAs
- Border radius: `rounded-xl` (12px)

**Cards:**
- Background: White with subtle shadow
- Border radius: `rounded-2xl` (16px for larger cards)
- Padding: `p-6 md:p-8`
- Hover: Slight lift with shadow increase (`hover:shadow-xl hover:-translate-y-1`)

**Video/Image Containers:**
- Aspect ratio maintained: `aspect-video` or `aspect-square`
- Rounded corners: `rounded-2xl overflow-hidden`
- Lazy loading implemented

### E. Section Design Patterns

**Hero Section:**
- Full-viewport height with centered content
- Large penguin character image/illustration as focal point
- Headline + subheadline + dual CTA buttons
- Background: Gradient from soft pink to warm yellow (`bg-gradient-to-br from-pink-100 to-yellow-100`)
- Floating/animated penguin images as decorative elements

**Character Introduction ("Meet [Penguin Name]"):**
- Two-column layout: Large character image/video left, story text right
- Background: Alternating warm yellow section
- Generous whitespace around content
- Pull quotes or highlighted text in pink/teal for emphasis

**How-To Section:**
- Four numbered step cards in grid layout
- Icon/illustration at top of each card
- Step number prominently displayed in accent color
- Background: White or light grey
- Cards have pink/teal accent borders on hover

**Story/Background Section:**
- Asymmetric layout with penguin images interspersed
- Background: Teal gradient or solid teal section
- White text for contrast
- Image grid or masonry layout showcasing character moments

**Community/CTA Section:**
- Centered content with large headline
- Multiple social platform icons/buttons
- Background: Pink gradient with decorative elements
- Final call-to-action with penguin mascot

**Footer:**
- Simple, minimal design
- Copyright text centered
- Optional social links
- Background matches page theme

### F. Animations & Interactions

**Scroll Animations:** Minimal, subtle fade-ins for sections
**Hover States:** Cards lift slightly, buttons scale 102%
**Character Animations:** Penguin illustrations can have gentle bounce or waddle effects (CSS only, no complex JS)
**Parallax:** Very subtle on hero penguin images
**Transitions:** `transition-all duration-300 ease-in-out`

## Images Section

**Required Images:**
1. **Hero Penguin:** Large, high-quality image of the adorable Douyin penguin character - centered, full-width within hero section, should be the main focal point
2. **Character Showcase Grid:** 4-6 images showing penguin in different scenarios (eating, playing, being cute) - arranged in grid or carousel
3. **Section Background Images:** Decorative penguin silhouettes or simple winter-themed patterns as subtle backgrounds
4. **Step Icons:** Simple illustrations or icons for the how-to steps (can use Font Awesome or custom illustrations)
5. **Community Section:** Group photo-style image or collage of penguin moments

**Image Treatment:**
- All images use `rounded-2xl` corners
- Drop shadows for depth: `shadow-lg md:shadow-xl`
- Responsive sizing with proper aspect ratios
- Lazy loading for performance

## Accessibility & Responsive Design

- Mobile-first breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly button sizes (minimum 44px height)
- Proper heading hierarchy (h1 → h2 → h3)
- Alt text for all images
- Color contrast meets WCAG AA standards
- Consistent dark mode throughout all components