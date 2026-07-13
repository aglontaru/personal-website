---
name: Sapiema OS
colors:
  surface: '#051424'
  surface-dim: '#051424'
  surface-bright: '#2c3a4c'
  surface-container-lowest: '#010f1f'
  surface-container-low: '#0d1c2d'
  surface-container: '#122131'
  surface-container-high: '#1c2b3c'
  surface-container-highest: '#273647'
  on-surface: '#d4e4fa'
  on-surface-variant: '#c6c6cd'
  inverse-surface: '#d4e4fa'
  inverse-on-surface: '#233143'
  outline: '#909097'
  outline-variant: '#45464d'
  surface-tint: '#bec6e0'
  primary: '#bec6e0'
  on-primary: '#283045'
  primary-container: '#071023'
  on-primary-container: '#747c94'
  inverse-primary: '#565e75'
  secondary: '#ffb59a'
  on-secondary: '#5a1b00'
  secondary-container: '#bc4100'
  on-secondary-container: '#ffe7df'
  tertiary: '#c3c0ff'
  on-tertiary: '#1d00a5'
  tertiary-container: '#07004a'
  on-tertiary-container: '#6d67ff'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#121b2f'
  on-primary-fixed-variant: '#3e465c'
  secondary-fixed: '#ffdbce'
  secondary-fixed-dim: '#ffb59a'
  on-secondary-fixed: '#380d00'
  on-secondary-fixed-variant: '#802a00'
  tertiary-fixed: '#e2dfff'
  tertiary-fixed-dim: '#c3c0ff'
  on-tertiary-fixed: '#0f0069'
  on-tertiary-fixed-variant: '#3323cc'
  background: '#051424'
  on-background: '#d4e4fa'
  surface-variant: '#273647'
typography:
  display-lg:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.2'
  body-md:
    fontFamily: IBM Plex Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  technical-label:
    fontFamily: IBM Plex Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.05em
  data-readout:
    fontFamily: IBM Plex Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.2'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  grid-unit: 4px
  gutter: 24px
  margin: 32px
  module-padding: 1.5rem
---

## Brand & Style

The design system evolves from static presentation to a high-performance **Deep Tech Noir** environment. It targets engineers, AI researchers, and technical leaders who require an interface that feels like an advanced laboratory instrument rather than a corporate document.

The aesthetic blends **Cyberpunk Brutalism** with **Glassmorphism**, creating a "Lab Interface" feel. Every element is treated as a functional module within an AI-native operating system. The emotional response is one of precision, "hard-tech" reliability, and cutting-edge intelligence. High-density data visualization is prioritized, utilizing depth, layering, and technical ornamentation to signal the complexity and power of the underlying AI engineering.

## Colors

The palette is anchored in **#071023 (Dark Navy)**, used for the deep-space foundation of the interface. **#f66a2e (International Orange)** is the critical action color, reserved for primary CTA buttons, "Active" status indicators, and urgent telemetry pulses.

To move beyond flat backgrounds, the system introduces a secondary layer of **Deep Indigo (#4f46e5)** and **Slate Blue (#64748b)**. These are applied via subtle radial gradients behind main modules to simulate internal light sources or hardware glow. Semantic colors (Success, Warning, Error) should be slightly desaturated to maintain the "Noir" aesthetic, ensuring the International Orange remains the most vibrant point of focus.

## Typography

Typography functions as part of the technical interface. **Space Grotesk** is used for high-impact display moments and page titles to provide a geometric, futuristic feel.

For all functional text, the system splits duties between **IBM Plex Sans** (for long-form readability) and **IBM Plex Mono**. The Monospaced font is the workhorse of the system—used for every label, data point, status indicator, and technical specification. All labels should be set in uppercase with slight letter-spacing to reinforce the HUD (Heads-Up Display) aesthetic.

## Layout & Spacing

The layout is built on a **4px Hard Grid**, visible in subtle "technical background" overlays. Modules follow a fluid grid system but are constrained by "HUD" margins. 

- **Desktop:** 12-column grid with 24px gutters. Elements should feel like "plug-in" modules.
- **Mobile:** Single column with 16px margins; typography scales down, but technical labels (Mono) remain constant size for legibility.
- **Vertical Rhythm:** Use vertical "audit-trail" lines to connect related data blocks, creating a visual pipeline flow from top to bottom.

## Elevation & Depth

Depth is achieved through **Glassmorphism** and **Tonal Layering** rather than traditional drop shadows.

- **Background (L0):** Solid #071023 with a subtle 10% opacity grid overlay.
- **Surface (L1):** Deep Navy with 1px borders in Slate Blue (20% opacity).
- **Floating Containers (L2):** 40% opacity fills with a 20px backdrop-blur. 
- **Accents:** Use "Glow Borders"—1px strokes that utilize a linear gradient (Primary to Transparent) to highlight the top-left corner of active modules. 
- **Telemetry Pulses:** Interactive elements should have an outer glow (0px blur, 4px spread) when in an "Active" state.

## Shapes

The shape language is **Asymmetric and Technical**. While the base roundedness is set to "Soft" (4px), the design system utilizes specialized "clipped-corner" containers to simulate hardware casing. 

Buttons and "capsule" modules use a higher degree of roundedness on one side or are fully pill-shaped to differentiate them from the rigid, rectangular layout of data modules. Interactive connectors (pipelines) use 90-degree paths with 4px corner radii.

## Components

- **Buttons:** Primary buttons are International Orange with IBM Plex Mono text. On hover, they should "glitch" or shift color slightly toward Indigo. Use "L-shaped" corner accents for secondary buttons.
- **HUD Cards:** These are the primary containers. They feature a 1px border, a heavy backdrop-blur, and technical metadata (e.g., [SYSTEM_READY]) in the top-right corner using 10px IBM Plex Mono.
- **Pipeline Connectors:** Vertical and horizontal lines (1px) that connect cards. They feature "telemetry pulses"—small animated dots that travel along the line to show data flow.
- **Status Chips:** Small, rectangular modules with a leading "pulse" icon. Active states use #f66a2e; standby states use Slate Blue.
- **Input Fields:** Minimalist under-line inputs or fully enclosed "hardware" slots. Focus states activate a glowing border.
- **Audit Trails:** A vertical 1px dashed line that runs through the left margin of a section, connecting chronologically or logically ordered modules.