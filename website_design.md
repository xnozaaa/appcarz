
<high_level_design>
# App Carz Private Hire Taxi Service - Design System

## 1. Brand & Art Direction Overview

The App Carz website presents a professional, premium private hire taxi service with a sophisticated dark theme. The visual style combines:

- **Modern corporate elegance**: Clean, professional layouts with high-quality automotive photography
- **Dark themed interface**: Deep navy/teal backgrounds with white text creating strong contrast and premium feel
- **Automotive luxury aesthetic**: Large hero imagery featuring vehicles, airports, and professional settings
- **Trust-building visual language**: Professional vehicle photography, business-oriented imagery, and service-focused compositions
- **Minimal, content-focused design**: Emphasis on clear information hierarchy with strategic use of whitespace
- **Animated hero text**: Dynamic "Exceptional" text with underline zigzag animation effect
- **Parallax scrolling effects**: Background images with subtle zoom/scale animations on scroll

## 2. Color Palette (Dark Theme)

| Token | HEX / RGB | Usage | Notes |
|-------|-----------|-------|-------|
| Primary Brand (Red/Coral) | #FF6B6B / rgb(255, 107, 107) | "CARZ" logo text, accent highlights | Strong brand identifier |
| Primary Background (Dark Navy) | #0B2838 / rgb(11, 40, 56) | Main header/hero backgrounds, primary sections | Deep teal-navy creating premium feel |
| Secondary Background (White) | #FFFFFF / rgb(255, 255, 255) | Content sections, cards, alternating sections | Clean contrast areas |
| Primary Text (White) | #FFFFFF / rgb(255, 255, 255) | Hero headlines, dark background text | Maximum contrast on dark |
| Secondary Text (Dark Navy) | #0B2838 / rgb(11, 40, 56) | Body text on white backgrounds | Readable on light sections |
| Tertiary Text (Gray) | #686868 / rgb(104, 104, 104) | Descriptions, supporting text | Subtle hierarchy |
| Button Primary (Dark Navy) | #0B2838 / rgb(11, 40, 56) | Primary CTA buttons | Consistent with brand |
| Button Text (White) | #FFFFFF / rgb(255, 255, 255) | Button labels | Clear contrast |
| Counter/Stats Text (Black) | #000000 / rgb(0, 0, 0) | Numbers, emphasis text | Strong emphasis |
| Background Pattern (Dotted Navy) | rgba(255, 255, 255, 0.05) dots on #0B2838 | Decorative pattern on hero section | Subtle texture |

## 3. Typography Scale

**Primary Font Family**: "Poppins", sans-serif (Google Fonts)
- Used for all text elements throughout the site

| Element | Size | Weight | Line Height | Letter Spacing | Transform |
|---------|------|--------|-------------|----------------|-----------|
| Logo Text "APP" | ~60-80px | 700 (Bold) | 1.0 | Normal | Uppercase |
| Logo Text "CARZ" | ~60-80px | 700 (Bold) | 1.0 | Normal | Uppercase |
| H1 Hero Headline | 48-60px | 600 (Semi-Bold) | 1.2 | -0.5px | None |
| H2 Section Heading | 36-42px | 600 (Semi-Bold) | 1.3 | Normal | None |
| H3 Card Title | 20-24px | 500 (Medium) | 1.4 | Normal | None |
| H5 Service Title | 18-20px | 600 (Semi-Bold) | 1.4 | Normal | None |
| Body Large | 18px | 400 (Regular) | 1.6 | Normal | None |
| Body Regular | 16px | 400 (Regular) | 1.6 | Normal | None |
| Button Text | 14-16px | 500 (Medium) | 1.0 | 0.5px | None |
| Counter Numbers | 48-60px | 700 (Bold) | 1.0 | Normal | None |
| Counter Label | 14-16px | 400 (Regular) | 1.4 | Normal | None |

## 4. Spacing & Layout Grid

**Container Widths**:
- Max content width: 1200-1400px
- Content padding: 40-80px horizontal
- Mobile padding: 20px horizontal

**Vertical Spacing Scale**:
- Section spacing: 80-120px
- Component spacing: 40-60px
- Element spacing: 20-30px
- Text spacing: 15-20px
- Tight spacing: 10-15px

**Grid System**:
- Two-column layouts for desktop (50/50 or 40/60)
- Single column for mobile
- Card grids: 2-3 columns on desktop, 1 column mobile
- Gap between cards: 30-40px

**Component Padding**:
- Buttons: 12-16px vertical, 24-40px horizontal
- Cards: 30-40px all sides
- Sections: 60-100px vertical padding

## 5. Visual Effects & Treatments

**Shadows**:
- Card shadow: 0 4px 20px rgba(0, 0, 0, 0.08)
- Hover shadow: 0 8px 30px rgba(0, 0, 0, 0.12)
- Button shadow: Subtle, 0 2px 8px rgba(11, 40, 56, 0.2)

**Border Radius**:
- Buttons: 4-6px
- Cards: 8-12px
- Images: 8-12px
- Small elements: 4px

**Transitions**:
- Standard: 0.3s ease
- Hover effects: 0.3s ease-in-out
- Button interactions: 0.2s ease
- Parallax scroll: Smooth transform with scale effect

**Animations**:
- Fade in up: Elements animate from bottom with fade on scroll
- Animated headline: Zigzag underline effect on "Exceptional" text
- Background parallax: Zoom scale effect on hero background (scale 1.0 to 1.1)
- Counter animations: Numbers count up on scroll into view

**Image Treatments**:
- Slight parallax on hero section
- Overlay gradients on hero images (rgba(11, 40, 56, 0.6))
- High-quality, professional photography
- Aspect ratios: 16:9 for hero, varied for cards

**Special Effects**:
- Dotted pattern overlay on dark backgrounds (small white dots at 5% opacity)
- Sticky header with background change on scroll
- Accordion-style FAQ with chevron icons

## 6. Component Styles

### Header/Navigation
- Position: Sticky/Fixed at top
- Background: Transparent initially, transitions to solid dark navy (#0B2838) on scroll
- Height: 80-100px
- Logo: Left-aligned, "APP" white + "CARZ" red
- Padding: 20-30px horizontal

### Hero Section
- Full viewport height
- Background: Dark navy (#0B2838) with dotted pattern
- Background image: Parallax zoom effect on scroll
- Animated headline with zigzag underline on highlighted word
- Text: White, centered
- CTA buttons: Horizontal row on desktop, stacked on mobile
- Button style: Solid dark navy with white text

### Buttons
**Primary Button**:
- Background: #0B2838 (dark navy)
- Text: White, 14-16px, medium weight
- Padding: 12px 32px
- Border radius: 4-6px
- Hover: Slightly darker background, subtle shadow

**Secondary/Outline Button**:
- Same structure but may use outline style or alternate color

### Service Cards (Call-to-Action Cards)
- White background or with background image overlay
- Image at top or as background
- Title: 20-24px, semi-bold, dark navy
- Description: 16px, regular, gray
- Button at bottom: "Learn More" style
- Padding: 30-40px
- Border radius: 8-12px
- Shadow: 0 4px 20px rgba(0,0,0,0.08)
- Hover: Subtle scale or shadow increase

### About Section (Two-Column Layout)
- Left: Large image, rounded corners
- Right: Content with heading, paragraphs, and stats
- Stats counters: Large bold numbers with labels
- Responsive: Stack on mobile

### Statistics/Counter Components
- Large number: 48-60px, bold, black
- Label/suffix: 14-16px, regular
- Arranged in rows with icons or separators

### FAQ/Accordion Section
- Background: White
- Question: Bold, dark navy, with chevron icon
- Answer: Regular weight, gray, revealed on click
- Spacing: 20-30px between items
- Border or divider lines between items

### Footer/Contact Section
- Dark navy background or white
- Three-column layout: Email, Phone, Location
- Icon + heading + description format
- Links in white (on dark) or dark navy (on white)
- Secondary links section: Company, Support columns
- Simple, clean layout

### Icons
- Chevron down/up for accordions: Bold, large
- Email, phone, location icons: Simple, minimal style
- Black or white depending on background

## 7. Site Sections (In Order)

1. **Header/Navigation**
   - Sticky header with logo (APP in white, CARZ in red)
   - Transparent initially, solid dark navy on scroll

2. **Hero Section**
   - Full-height dark navy background with dotted pattern
   - Background image with parallax zoom effect
   - Centered animated headline: "Experience [Exceptional] Transport Services"
   - Subheading describing service
   - Two CTA buttons: "Learn More" and "Our Services"

3. **About Us Section**
   - White background
   - Two-column layout: Image left, content right
   - Heading: "Discover Our Story"
   - Mission statement paragraph
   - Two stat counters:
     - "5 values" with description
     - "15 years" with description

4. **Services Section**
   - Background color or gradient
   - Centered heading: "Explore Our Premier Transportation Services"
   - Subheading description
   - Three service cards in row (stacked on mobile):
     - "Reliable Private Hire Taxi Service" with image
     - "Seamless Airport Transfers" with image
     - "Special Event Transportation" with image
   - Each card has image, title, description, "Learn More" button

5. **Fleet Section**
   - Heading: "Our Fleet"
   - Description of vehicles
   - May include images or gallery (minimal content visible in reference)

6. **FAQ Section**
   - White background
   - Heading: "Questions?"
   - Description encouraging users to find answers
   - Accordion-style questions:
     - "What services do you offer?"
     - "How do I book a ride?"
     - "What are your pricing options?"
   - Expandable answers with chevron icons

7. **Contact Section**
   - White background
   - Three-column layout:
     - **Email Us**: Icon, heading, email address, description
     - **Call Us**: Icon, heading, phone number (01922 500 500), description
     - **Visit Us**: Icon, heading, physical address (165 Stafford Street, Walsall, West Midlands, WS2 8EA), description

8. **Footer**
   - Dark navy or white background
   - Three-column links:
     - **Company**: Links to company pages
     - **Support**: Links to support/help pages
     - **Stay Updated**: Newsletter or social links
   - Copyright and legal information at bottom
</high_level_design>

<theme>
dark
</theme>

<sections>
<clone_section>
    <file_path>src/components/sections/header.tsx</file_path>
    <design_instructions>
Clone the sticky navigation header with the App Carz logo positioned on the left side. The header should have a dark blue/navy background (#0A2540 or similar) with white text. The logo should be the company branding with "APP" in white and "CARZ" in red/coral (#FF6B6B or similar). The header becomes sticky on scroll with a subtle background change. Include proper spacing and responsive behavior for mobile devices where the logo scales appropriately. The header should be absolutely positioned initially and then become fixed on scroll.</design_instructions>
    <assets>["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b099e5ba-52d4-4f7d-b70d-16bd8649c97c-appcarz-co-uk/assets/images/WhatsApp-Image-2023-10-29-at-16_20_44_e459623b-1.jpg"]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/hero.tsx</file_path>
    <design_instructions>
Clone the full-height hero section with a dark blue starry night sky background pattern. Display the large animated headline "Experience [Exceptional] Transport Services" where "Exceptional" is highlighted with a yellow zigzag underline animation effect. Below the headline, include the subheading text "Discover the premier private hire taxi experience in West Midlands. Our professional drivers ensure a safe and comfortable journey tailored to your needs." in a lighter gray color. Add two call-to-action buttons side by side: "Learn More" and "Our Services" with the first button having a solid style and the second an outlined style. Implement a parallax zoom-out effect on the background as the user scrolls. The section should be fully responsive with text sizes reducing appropriately on tablet and mobile devices.</design_instructions>
    <assets>[]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/about.tsx</file_path>
    <design_instructions>
Clone the "Discover Our Story" about section with a two-column layout. On the left, display a professional image of a business woman in white clothing looking out from a luxury black minivan taxi. On the right, include the heading "Discover Our Story", followed by the mission statement text about App Carz's commitment to providing safe, reliable transportation services. Below the text, add two stat counters with animated counting effects: "5 values" and "15 years" of combined experience. Each counter should have a descriptive text below explaining the values (Customer Satisfaction, Safety and Reliability, Professionalism, Community Engagement) and experience. Use a clean white background with dark text. Include fade-in animations on scroll for the text elements. The layout should stack vertically on mobile devices.</design_instructions>
    <assets>["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b099e5ba-52d4-4f7d-b70d-16bd8649c97c-appcarz-co-uk/assets/images/elegant-business-lady-white-looks-out-minivan-taxi-2.jpg"]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/services.tsx</file_path>
    <design_instructions>
Clone the "Explore Our Premier Transportation Services" section with a light gray/off-white background. Start with a centered heading and descriptive subtext about the range of services offered. Display three service cards in a horizontal grid layout (stacking on mobile). Each card should have: 1) A full-width service image at the top, 2) A service title (h5 heading), 3) Service description text, and 4) A "Learn More" button at the bottom. The three services are: "Reliable Private Hire Taxi Service" (with scenic car image), "Seamless Airport Transfers" (with airport terminal image), and "Special Event Transportation" (with luxury Mercedes on scenic road). Cards should have subtle shadows, rounded corners, and hover effects with slight scale transformation. Use fade-in and zoom-in animations on scroll.</design_instructions>
    <assets>["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b099e5ba-52d4-4f7d-b70d-16bd8649c97c-appcarz-co-uk/assets/images/tenweb_media_RUAC4ZVRM-3.webp", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b099e5ba-52d4-4f7d-b70d-16bd8649c97c-appcarz-co-uk/assets/images/tenweb_media_R4HD9C2Z3-4.webp", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b099e5ba-52d4-4f7d-b70d-16bd8649c97c-appcarz-co-uk/assets/images/electric-mercedes-benz-e-class-front-720x405px-5.jpg"]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/fleet.tsx</file_path>
    <design_instructions>
Clone the "Our Fleet" section header with a large bold heading and descriptive subtext "Explore our diverse range of vehicles, designed for safety and comfort." This should be a simple text section with white background, centered content, and appropriate spacing above and below. Use dark text color for the heading and medium gray for the description. Include fade-in animation on scroll.</design_instructions>
    <assets>[]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/faq.tsx</file_path>
    <design_instructions>
Clone the FAQ section titled "Questions?" with accordion-style expandable question panels. Include the introductory text "Find answers to your most pressing questions about our services, pricing, and how to book your ride with App Carz. We're here to help!" Display at least three FAQ items with chevron icons that rotate when expanded/collapsed. Questions include: "What services do you offer?", "How do I book a ride?" (with response about app or calling 01922 500 500 and recommending advance booking), and "What are your pricing options?" (with response directing to Services page). Use a clean white background with subtle borders between items. Implement smooth expand/collapse animations and ensure keyboard accessibility. Add a "View More" button at the bottom. The section should be fully responsive with proper touch targets on mobile.</design_instructions>
    <assets>[]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/contact.tsx</file_path>
    <design_instructions>
Clone the contact information section with three columns displaying different contact methods. Each column should have an icon at the top, a heading, and descriptive text. The three contact methods are: 1) "Email Us" with mail icon - text about reaching out to appcarz4@gmail.com, 2) "Call Us" with phone icon - text about calling 01922 500 500 with friendly staff available, 3) "Visit Us" with location/map pin icon - address "165 Stafford Street, Walsall, West Midlands, WS2 8EA" with invitation to stop by. Use a white or light background with dark text. Icons should be simple, large, and in a dark color. Include hover effects on each contact card. The layout should stack vertically on mobile devices with proper spacing between cards.</design_instructions>
    <assets>[]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/footer.tsx</file_path>
    <design_instructions>
Clone the footer section with a dark background (dark blue/navy #0A2540 or similar). Create a multi-column layout with: 1) Company section with links, 2) Support section with links, 3) "Stay Updated" section for newsletter signup. Include the App Carz logo at the top of the footer. Use white text for visibility on the dark background. Add social media icons if present in the original. Include copyright information at the bottom. The footer should be fully responsive with columns stacking on mobile devices. Use proper spacing and typography hierarchy with section headings slightly larger than links.</design_instructions>
    <assets>["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b099e5ba-52d4-4f7d-b70d-16bd8649c97c-appcarz-co-uk/assets/images/WhatsApp-Image-2023-10-29-at-16_20_44_e459623b-1.jpg"]</assets>
  </clone_section>
</sections>
