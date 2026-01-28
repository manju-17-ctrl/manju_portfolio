
# Full-Stack AI-Assisted Portfolio Website Development Prompt

## 1. Project Overview
**Role:** Senior Creative Full-Stack Engineer
**Objective:** Architect and build a high-performance, visually immersive personal portfolio website that serves as a strong professional brand statement.
**Target Audience:** Recruiters, potential clients, and fellow developers.

## 2. Technology Stack (Mandatory)
The following technologies must be used to ensure performance, scalability, and type safety:

- **Frontend:**
  - **Framework:** Next.js (App Router) with React.js
  - **Language:** TypeScript
  - **Styling:** Tailwind CSS (with `tailwindcss-animate` plugin)
  - **State Management:** React Context or Zustand (if complex state arises)
  - **Animations & Transitions:** 
    - **Barba.js:** For seamless "SPA-like" page transitions.
    - **Framer Motion:** For micro-interactions and component entry/exit animations.
  - **3D & Visuals:** Three.js (via `@react-three/fiber` and `@react-three/drei`) for background scenes and interactive elements.

- **Backend:**
  - **Runtime:** Node.js
  - **API:** Next.js API Routes or standalone Express.js server (if WebSocket support is needed).

- **Database:**
  - **System:** MySQL
  - **ORM:** Drizzle ORM or Prisma (Drizzle preferred for performance).

## 3. Design Requirements (Visual Identity)
The aesthetic must be distinct, memorable, and high-energy:

- **Theme:** "Digital Rave / Cyber-Future"
- **Color Palette:** 
  - Backgrounds: Deep Void Black (`#050505`), Midnight Blue.
  - Accents: Neon Cyan (`#00f3ff`), Electric Magenta (`#ff00ff`), Acid Lime (`#ccff00`).
- **Visual Style:** 
  - High contrast.
  - Holographic gradients and glassmorphism cards (`backdrop-filter: blur`).
  - "Glitch" effects on hover or text reveal.
  - Modern, bold typography (Mix of Sans-Serif Display fonts like *Unbounded* and Monospace fonts like *JetBrains Mono*).

## 4. Component Architecture & Pages
The application must include the following distinct sections/pages:

### A. Global Elements
- **Navigation Bar:** Fixed/Sticky. Responsive. Glassmorphism effect. Active state indicators.
- **Footer:** Social links (GitHub, LinkedIn, Twitter), copyright, and a "cool" interactive footer element (e.g., a mini music visualizer or visitor counter).
- **Page Transitions:** Use Barba.js to morph the container between routes without full browser refreshes.

### B. Pages
1. **Landing (Home) Page:**
   - **Hero Section:** Full-screen height.
   - **Visual:** A reactive 3D background (Three.js) – e.g., a neon terrain grid, floating geometric shards, or a particle system that reacts to mouse movement.
   - **Content:** "Name", "Title/Role", and a CTA button ("View Work").

2. **About Page:**
   - Professional bio.
   - Photo with a shader effect or glitch reveal.
   - "My Philosophy" or "Approach" section.

3. **Experience / Work History:**
   - Vertical timeline layout.
   - Collapsible details for each role.
   - Tech stack badges for each position.

4. **Skills Section:**
   - Visual representation of technical skills (Frontend, Backend, DevOps, Design).
   - Interactive element (e.g., a 3D tag cloud or a radar chart).

5. **Projects Showcase:**
   - Grid or Masonry layout.
   - Project Cards: Thumbnail, Title, Short Description, "Tech Stack" tags.
   - **Hover Effect:** Video preview of the project plays on hover.
   - Links: "Live Demo" and "Source Code".

6. **Education:**
   - Simple, clean list of degrees and certifications.

7. **Contact Page:**
   - Functional contact form (Name, Email, Subject, Message).
   - Validation using Zod.
   - Backend processing to save messages to the MySQL database.
   - Success/Error states with toast notifications.

## 5. Backend & Database Schema
- **Users (Optional/Admin):** For managing portfolio content (CMS style).
- **Projects:** `id`, `title`, `description`, `imageUrl`, `demoUrl`, `repoUrl`, `tags` (JSON), `featured` (boolean).
- **Experience:** `id`, `company`, `role`, `startDate`, `endDate`, `description`.
- **Messages:** `id`, `senderName`, `senderEmail`, `message`, `createdAt` (for the contact form).

## 6. Development Guidelines
- **Scalability:** Ensure code is modular. Use reusable UI components (Buttons, Cards, Inputs).
- **Performance:** 
  - Lazy load Three.js canvases.
  - Optimize images using Next/Image.
  - Aim for 95+ Lighthouse Performance score.
- **Accessibility:** Semantic HTML5, ARIA labels for interactive 3D elements, keyboard navigation support.
- **SEO:** Dynamic metadata for each page.

## 7. Deliverables
1. **File Structure:** A tree view of the recommended project structure.
2. **Database Schema:** SQL or ORM schema definition.
3. **Core Components:** React code for the Hero (3D setup), Navbar, and Contact Form.
4. **Styling Config:** Tailwind config file including the custom color palette and font families.

---
**Instruction to AI:** Generate the project structure and the foundational code based on the above specifications. Focus on the architecture and the integration of the 3D elements with the React lifecycle.
