# LocalAI - Project Documentation

> Privacy-first AI chat application powered by local LLMs via Ollama.
> Built with Next.js 16, React 19, Tailwind CSS 4, and shadcn/ui.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Architecture](#architecture)
3. [Tech Stack](#tech-stack)
4. [Application Flow](#application-flow)
5. [Page-wise Breakdown](#page-wise-breakdown)
6. [Shared Layout & Components](#shared-layout--components)
7. [UI Component Library](#ui-component-library)
8. [Theming & Styling](#theming--styling)
9. [Planned Pages & Features](#planned-pages--features)
10. [API Design (Planned)](#api-design-planned)
11. [File Structure](#file-structure)

---

## Project Overview

LocalAI is a privacy-first AI chat application -- a local alternative to ChatGPT. It runs large language models (LLMs) directly on the user's machine via [Ollama](https://ollama.ai), ensuring no data leaves the device. The app supports multiple conversations, model switching (llama3, mistral, codellama), streaming responses, and a modern dark-themed UI.

**Current state:** Landing page and shell UI are built. Backend, chat interface, and core chat functionality are not yet implemented.

---

## Architecture

```text
+-------------------+       +-------------------+       +-------------------+
|                   |       |                   |       |                   |
|  Next.js Frontend |------>|  Express API      |------>|  Ollama           |
|  (React 19, RSC)  |       |  (Node.js)        |       |  localhost:11434  |
|                   |       |                   |       |                   |
+-------------------+       +-------------------+       +-------------------+
     Port 3000                  (planned)               Local LLM runtime
```

**Data flow:**
1. User types a message in the chat interface
2. Frontend sends the message to the Express API (`POST /api/chat/stream`)
3. Express forwards the request to Ollama's local API
4. Ollama processes the prompt through the selected LLM
5. Response streams back through Express to the frontend in real-time
6. Frontend renders the streamed response token-by-token

**Key principle:** All processing happens locally. No external API calls, no cloud dependencies, no data leaves the machine.

---

## Tech Stack

| Layer | Technology | Version | Purpose |
|-------|-----------|---------|---------|
| Framework | Next.js | 16.2.2 | App Router, React Server Components |
| UI Library | React | 19.2.4 | Component rendering, React Compiler enabled |
| Styling | Tailwind CSS | 4 | Utility-first CSS, PostCSS-based (no config file) |
| Component Library | shadcn/ui | 4.1.2 | Pre-built accessible components (radix-luma style) |
| Headless UI | Radix UI | 1.4.3 | Accessible primitive components |
| Icons | HugeIcons | 1.1.6 / 4.1.1 | @hugeicons/react + @hugeicons/core-free-icons |
| Theme | next-themes | 0.4.6 | Dark/light mode toggle |
| Variants | CVA | 0.7.1 | class-variance-authority for component variants |
| Command | cmdk | 1.1.1 | Command palette primitives |
| Drawer | vaul | 1.1.2 | Slide-out drawer panel |
| Animations | tw-animate-css | 1.4.0 | Tailwind animation utilities |
| Package Manager | Bun | latest | Fast JS runtime and package manager |
| Backend (planned) | Express | -- | API proxy to Ollama |
| LLM Runtime (planned) | Ollama | -- | Local model inference |

---

## Application Flow

### Current Navigation Flow

```text
User visits /  -->  Landing Page (page.js)
                        |
                        +--> Hero Section (CTA buttons)
                        +--> Feature Cards (6 cards)
                        +--> FAQ Section (4 collapsible items)

User visits /home  -->  Home Page (home/page.jsx) [placeholder]

User visits /about -->  404 Not Found (not-found.jsx) [route not built]

User visits /file  -->  404 Not Found (not-found.jsx) [route not built]

Any unknown route  -->  404 Not Found (not-found.jsx)
```

### Planned Navigation Flow (from UI snapshots)

```text
/                -->  Landing Page (marketing, CTA)
/chat            -->  Chat Interface (main app)
                        |
                        +--> Sidebar (conversation list, + New Chat)
                        +--> Chat Window (message history, streaming)
                        +--> Input Box (message compose, send)
                        +--> Model Selector (dropdown: llama3, mistral, codellama, phi3)
/chat/new        -->  New Chat Modal (name the conversation)
/settings        -->  Settings Page
                        |
                        +--> General (Ollama connection, default model)
                        +--> Models (model management)
                        +--> Chats (chat history management)
                        +--> Appearance (theme, UI preferences)
                        +--> About (app info)
```

---

## Page-wise Breakdown

### Page 1: Root Layout (`src/app/layout.js`)

**Route:** Wraps all pages
**Type:** Server Component
**Purpose:** Defines the HTML shell, global providers, and persistent UI elements.

**Structure:**

```text
<html lang="en">
  <body>
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <Header />
      <main className="pt-8 min-h-96 px-6 container mx-auto">
        {children}   <!-- Page content renders here -->
      </main>
      <Footer />
    </ThemeProvider>
  </body>
</html>
```

**Details:**
- **Fonts:** Geist Sans (`--font-geist-sans`) and Geist Mono (`--font-geist-mono`) loaded via `next/font/google`, applied as CSS variables on `<html>`
- **ThemeProvider:** Wraps entire app with `next-themes`. Uses `class` attribute strategy (adds `.dark` to `<html>`). Default theme is `dark`, system preference detection enabled
- **Header:** Persistent navigation bar rendered on every page
- **Main:** Content area with top padding (pt-8), minimum height (min-h-96), horizontal padding (px-6), centered container
- **Footer:** Persistent footer rendered on every page
- **Metadata:** `title: "Local.ai"`, `description: "Your very own privacy first local ai chat app"`

---

### Page 2: Landing Page (`src/app/page.js`)

**Route:** `/`
**Type:** Server Component
**Purpose:** Marketing landing page introducing LocalAI with hero, features, and FAQ.

#### Section 1: Hero Section

```text
+---------------------------------------------------------------+
|  [Shield Icon] 100% PRIVATE  *  RUNS LOCALLY                  |
|                                                                |
|  Privacy AI Chat                    +---------------------+    |
|  Powered Locally                    |                     |    |
|                                     |   [Chat Icon]       |    |
|  Chat with powerful LLMs running    |   (violet bg,       |    |
|  on your own machine.               |    shadow glow)     |    |
|  Your data stays private            |                     |    |
|                                     +---------------------+    |
|  [Start Chatting ->]  [View Demo]                              |
|                                                                |
|  [Incognito] 100% Private    [Incognito] 100% Private    ...   |
|  Your data stays local       Your data stays local             |
+---------------------------------------------------------------+
```

**Components used:**
- `Button` (primary CTA with arrow icon, secondary demo button)
- `HugeiconsIcon` (Shield01FreeIcons, ArrowRight02FreeIcons, IncognitoIcon, Chat01Icon)

**Layout:** Flexbox, 2-column on desktop (3/6 + 3/6 split). Left column: text content + CTAs. Right column: large chat icon with violet background and shadow glow (`shadow-violet-500/50`).

**Trust badges:** 3 items below CTAs, each with Incognito icon + title + description. Currently all show "100% Private / Your data stays local" (placeholder text).

---

#### Section 2: Feature Cards

```text
+----------+----------+----------+----------+----------+----------+
| Privacy  |  Fast    |  Multi-  | Context  |  Model   |  Dark    |
| First    | Perform. |  Chat    | Memory   | Switch   |  Mode    |
|          |          |          |          |          |          |
| [Shield] | [Light.] | [Chat]   | [Brain]  | [Layers] | [Moon]   |
| desc...  | desc...  | desc...  | desc...  | desc...  | desc...  |
+----------+----------+----------+----------+----------+----------+
```

**Components used:**
- `Card`, `CardHeader`, `CardTitle`, `CardDescription`
- `HugeiconsIcon` with 6 different icons

**Layout:** Flex wrap, each card is `flex-1/6`. Each card has an icon (text-primary color) + title + description.

**Icons per card:**
1. Shield01FreeIcons -- Privacy First
2. Lightning -- Fast Performance
3. Chat01FreeIcons -- Multi-Chat
4. Brain01FreeIcons -- Context Memory
5. Layers01FreeIcons -- Model Switching
6. Moon01FreeIcons -- Dark Mode

**Note:** Card titles and descriptions are currently placeholder text ("Privacy First" and "Enter your email below..." for all cards). These need to be updated to match the UI design screenshots.

---

#### Sections 3-6: Placeholder Comments (Not Yet Built)

The following sections exist only as code comments in `page.js` (lines 237-241):

```jsx
{/* How it works sections */}
{/* App screenshot */}
{/* What users are saying */}
{/* LocalAi vs Cloud */}
```

**Planned from UI screenshots:**

**How It Works** (3 steps):
1. Install Ollama -- Download and install Ollama on your machine
2. Choose a Model -- Pull your favorite model like llama3 or mistral
3. Start Chatting -- Run locally and chat with your AI privately

**App Screenshot:** Full-width mockup showing the chat interface with sidebar, message bubbles, and code highlighting.

**What Users Are Saying** (Testimonials): 3 testimonial cards with user avatars, quotes, names, roles, and 5-star ratings.

**LocalAI vs Cloud** (Comparison table):

| Feature | LocalAI | ChatGPT |
|---------|---------|---------|
| Runs Locally | check | cross |
| Data Privacy | check | cross |
| Internet Required | cross | check |
| API Costs | cross | check |
| Open Source | check | cross |

---

#### Section 7: FAQ

```text
+----------------------------------+----------------------------------+
| [>] What is Ollama?         [+]  | [>] Which models are supported?  |
|     (collapsible content)        |     (collapsible content)        |
|     [Learn More]                 |     [Learn More]                 |
+----------------------------------+----------------------------------+
| [>] Does it work without    [+]  | [>] Is my data ever stored? [+]  |
|     internet?                    |     (collapsible content)        |
|     (collapsible content)        |     [Learn More]                 |
|     [Learn More]                 |                                  |
+----------------------------------+----------------------------------+
```

**Components used:**
- `Card`, `CardContent`
- `Collapsible`, `CollapsibleTrigger`, `CollapsibleContent`
- `Button` (transparent trigger + xs "Learn More")
- `HugeiconsIcon` (AArrowDown for expand/collapse indicator)

**Layout:** Section title "Frequently Asked Questions" + 2x2 grid (`grid-cols-1 md:grid-cols-2`). Each FAQ is a Card containing a Collapsible with a trigger button and expandable content area.

**FAQ items:**
1. "What is Ollama?" -- placeholder lorem ipsum
2. "Which models are supported?" -- placeholder lorem ipsum
3. "Does it work without internet?" -- placeholder lorem ipsum
4. "Is my data ever stored?" -- placeholder text

**Note:** FAQ content is placeholder. The collapse/expand icon uses `AArrowDown` but the rotation class has a quoting issue (double-quoted string inside JSX string).

---

### Page 3: Home Page (`src/app/home/page.jsx`)

**Route:** `/home`
**Type:** Server Component
**Purpose:** Placeholder page, currently renders only "About" text.

```jsx
export default function Home() {
  return <div>About</div>
}
```

**Status:** Stub -- needs full implementation.

---

### Page 4: 404 Not Found (`src/app/not-found.jsx`)

**Route:** Any unmatched route
**Type:** Server Component
**Purpose:** Custom error page for missing routes.

**Structure:**

```text
+---------------------------------------+
|  Oops! Page not found                 |
|  The page you are looking for         |
|  does not exist.                      |
|  [Return Home] (link to /)            |
+---------------------------------------+
```

**Components used:**
- `Link` from `next/link`

**Note:** Minimal styling -- uses plain `<main>`, `<h1>`, `<p>` without Tailwind classes. Could be enhanced to match the app's design system.

---

## Shared Layout & Components

### Header (`src/components/custom/Header.jsx`)

**Type:** Server Component
**Location:** Rendered in root layout, visible on all pages.

```text
+--[Logo]----------[Home]--[About]--[File]--------[Theme Toggle]--+
```

**Structure:**
- Purple background (`bg-primary`), full viewport width (`min-w-dvw`)
- Flexbox with `justify-between` and `items-center`
- Left: `<Logo />` component
- Center: `<Menubar>` with 3 navigation links (Home `/`, About `/about`, File `/file`)
- Right: `<ThemeToggle />` button

**Components used:**
- `Logo` (custom)
- `Menubar`, `MenubarMenu` (shadcn/ui)
- `Link` (next/link)
- `ThemeToggle` (custom)

**Navigation links:**
| Label | Route | Status |
|-------|-------|--------|
| Home | `/` | Working (landing page) |
| About | `/about` | Not built (404) |
| File | `/file` | Not built (404) |

---

### Footer (`src/components/custom/Footer.jsx`)

**Type:** Client Component (`'use client'`)
**Location:** Rendered in root layout, visible on all pages.

```text
+---------------------------------------+
|         @Copyright reserved 2026      |
+---------------------------------------+
```

**Details:**
- Accent background (`bg-accent`)
- Dynamically calculates the current year via `new Date().getFullYear()`
- Uses `useState` to store the year (though it doesn't change)
- Has a `console.log(yearData)` left in (debug artifact)
- Typo in text: "reserverd" should be "reserved"

---

### Logo (`src/components/custom/Logo.jsx`)

**Type:** Server Component

**Details:**
- Wraps the logo image in an `<h1>` tag
- Uses `AspectRatio` (16:9) from shadcn/ui
- Displays `/Ararat-colored.svg` via Next.js `Image` (200x30px)
- The logo appears to be the "Ararat" brand mark

---

### ThemeToggle (`src/components/custom/ThemeToggle.jsx`)

**Type:** Client Component (`'use client'`)

**Details:**
- Uses `useTheme()` from `next-themes`
- Toggles between `'dark'` and `'light'` on click
- Shows `Moon01Icon` when in dark mode, `SunIcon` when in light mode
- Icons from HugeIcons at 24px size
- Named export (`export function ThemeToggle`)

---

## UI Component Library

All UI components are generated by shadcn/ui CLI and live in `src/components/ui/`. They should not be edited manually.

| Component | File | Radix Primitive | Key Features |
|-----------|------|-----------------|--------------|
| Button | `button.jsx` | Slot | 6 variants (default, outline, secondary, ghost, destructive, link), 8 sizes (default, xs, sm, lg, icon, icon-xs, icon-sm, icon-lg), `asChild` support via Slot |
| Card | `card.jsx` | -- | Card, CardHeader, CardTitle, CardDescription, CardAction, CardContent, CardFooter. Size variants (sm/default) |
| Dialog | `dialog.jsx` | Dialog | Full modal system with overlay, close button, header/footer layout |
| Drawer | `drawer.jsx` | -- (vaul) | Slide-out panel using vaul library |
| Input | `input.jsx` | -- | Text input with rounded-3xl borders, focus ring, file input support |
| Textarea | `textarea.jsx` | -- | Auto-height textarea with field-sizing-content |
| Tabs | `tabs.jsx` | Tabs | Horizontal/vertical orientation, default and line variants |
| Table | `table.jsx` | -- | Full table system (Table, Header, Body, Row, Head, Cell, Caption) |
| Alert | `alert.jsx` | -- | Alert with variants (default, destructive), icon support |
| Menubar | `menubar.jsx` | Menubar | Full menu system with submenus, checkboxes, radio items, separators |
| Collapsible | `collapsible.jsx` | Collapsible | Expandable/collapsible content sections |
| Tooltip | `tooltip.jsx` | Tooltip | Hover tooltips with provider, trigger, content |
| Slider | `slider.jsx` | Slider | Range slider with multi-thumb support |
| Command | `command.jsx` | -- (cmdk) | Command palette / search interface |
| AspectRatio | `aspect-ratio.jsx` | AspectRatio | Maintains aspect ratio for child content |
| InputGroup | `input-group.jsx` | -- | Grouped input with prefix/suffix support |

---

## Theming & Styling

### Color System

Colors use the **oklch** color space for perceptual uniformity.

**Light Theme (`:root`):**

| Token | Value | Description |
|-------|-------|-------------|
| `--background` | `oklch(1 0 0)` | Pure white |
| `--foreground` | `oklch(0.15 0 0)` | Near black text |
| `--primary` | `oklch(0.55 0.25 280)` | Purple |
| `--primary-foreground` | `oklch(0.98 0 0)` | White text on purple |
| `--secondary` | `oklch(0.95 0.02 280)` | Light purple tint |
| `--accent` | `oklch(0.92 0.05 280)` | Slightly stronger purple tint |
| `--muted` | `oklch(0.96 0 0)` | Light gray |
| `--muted-foreground` | `oklch(0.5 0 0)` | Medium gray text |
| `--destructive` | `oklch(0.6 0.25 25)` | Red |
| `--border` | `oklch(0.9 0 0)` | Light gray border |
| `--radius` | `0.875rem` (14px) | Base border radius |

**Dark Theme (`.dark`):**

| Token | Value | Description |
|-------|-------|-------------|
| `--background` | `oklch(0.08 0 0)` | Near black |
| `--foreground` | `oklch(0.98 0 0)` | Near white text |
| `--primary` | `oklch(0.6 0.25 280)` | Vibrant purple |
| `--card` | `oklch(0.12 0 0)` | Slightly lighter than bg |
| `--secondary` | `oklch(0.18 0.02 280)` | Dark purple tint |
| `--accent` | `oklch(0.2 0.05 280)` | Slightly lighter accent |
| `--muted` | `oklch(0.2 0 0)` | Dark gray |
| `--border` | `oklch(1 0 0 / 10%)` | White at 10% opacity |
| `--input` | `oklch(1 0 0 / 15%)` | White at 15% opacity |

### CSS Architecture

```text
globals.css
  |
  +-- @import "tailwindcss"          (Tailwind v4 core)
  +-- @import "tw-animate-css"       (animation utilities)
  +-- @import "shadcn/tailwind.css"  (shadcn theme layer)
  |
  +-- @custom-variant dark           (dark mode via .dark class)
  +-- @theme inline { ... }          (maps CSS vars to Tailwind tokens)
  +-- :root { ... }                  (light theme variables)
  +-- .dark { ... }                  (dark theme variables)
  +-- @layer base { ... }            (global reset + defaults)
```

---

## Planned Pages & Features

Based on the UI snapshots and project specification, the following pages and features are planned but not yet implemented:

### Chat Interface Page (`/chat`)

The main application screen. Split layout with sidebar and chat area.

```text
+--------+--------------------------------------------------+
| Sidebar|  Chat Title                    [Model: llama3 v] |
|        |--------------------------------------------------|
| + New  |                                                  |
|  Chat  |  [User message bubble]              10:30 AM     |
|        |                                                  |
| Today  |  [AI response bubble]               10:31 AM     |
| Python |  (with markdown, code blocks)                    |
|  help  |                                                  |
| Explain|                                                  |
|  React |                                                  |
|        |--------------------------------------------------|
| Yester.|  [Message LocalAI...]                    [Send]  |
| Code   |                                                  |
|  Review|  [John Doe]                              [Gear]  |
+--------+--------------------------------------------------+
```

**Planned components:**
- `Sidebar` -- conversation list with timestamps, "New Chat" button, search
- `ChatWindow` -- scrollable message history area
- `MessageBubble` -- individual message with user/AI avatar, timestamp, content
- `InputBox` -- message input with send button
- `ModelSelector` -- dropdown to switch between llama3, mistral, codellama, phi3

**Features:**
- Real-time streaming responses (typing effect)
- Markdown rendering in AI responses
- Code highlighting with syntax colors
- Auto-scroll to latest message
- Responsive layout (sidebar collapses on mobile)

### New Chat Modal

```text
+---------------------------+
|  New Chat              X  |
|                           |
|  Chat Name                |
|  [Enter chat title...]    |
|                           |
|  [Cancel]  [Create]       |
+---------------------------+
```

**Components:** Dialog or Drawer with Input and Buttons.

### Settings Page (`/settings`)

```text
+--------+--------------------------------------------------+
| Sidebar|  Settings                                        |
|        |                                                  |
| General|  Ollama Connection                               |
| Models |  * Status: Connected                             |
| Chats  |  http://localhost:11434                   [Test]  |
| Appear.|                                                  |
| About  |  Default Model                                   |
|        |  [llama3                                     v]   |
|        |                                                  |
|        |  Keep Context (Messages)                         |
|        |  [==========------] 20                            |
|        |                                                  |
|        |  Stream Responses                                |
|        |  Show AI responses in real-time           [ON]   |
+--------+--------------------------------------------------+
```

**Sections:**
- **General:** Ollama connection URL + status, default model, context length, streaming toggle
- **Models:** List installed models, pull new models
- **Chats:** Manage/delete conversation history
- **Appearance:** Theme selection, font size, UI density
- **About:** App version, credits, links

### Mobile Layout

```text
+------------------------------+
| [Menu]   LocalAI     [Menu]  |
|------------------------------|
| + New Chat                   |
|------------------------------|
| Today              Today     |
| Python help        2m ago    |
| Explain React      1h ago    |
| Code Review        Yesterday |
|------------------------------|
| Python help                  |
| [Model: llama3 v]            |
|------------------------------|
| How do I use Python asyncio? |
|                    10:30 AM  |
|                              |
| asyncio is Python's built-in |
| library for writing...       |
+------------------------------+
```

**Features:**
- Hamburger menu replaces sidebar
- Stacked layout (conversation list above chat)
- Touch-friendly tap targets
- Swipe gestures for navigation

### Empty State

```text
+----------------------------------+
|                                  |
|           [Chat Icon]            |
|                                  |
|        No chats yet              |
|  Start a new conversation        |
|       to begin                   |
|                                  |
|       [+ New Chat]               |
|                                  |
+----------------------------------+
```

Shown when there are no conversations yet.

---

## API Design (Planned)

### Chat Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/chat` | Send a message, get full response |
| `POST` | `/api/chat/stream` | Send a message, stream response tokens |

**Request body (chat):**

```json
{
  "model": "llama3",
  "messages": [
    { "role": "user", "content": "How do I read a file in Python?" }
  ],
  "context_length": 20
}
```

**Stream response:** Server-Sent Events (SSE) or chunked transfer encoding, delivering tokens as they're generated.

### Chat Management Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/chats` | List all conversations |
| `POST` | `/api/chats` | Create a new conversation |
| `GET` | `/api/chats/:id` | Get a specific conversation with messages |
| `DELETE` | `/api/chats/:id` | Delete a conversation |

### Model Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/models` | List available Ollama models |

**Proxied from Ollama:** `GET http://localhost:11434/api/tags`

---

## File Structure

```text
localai-app/
|
+-- public/                          # Static assets
|   +-- Ararat-colored.svg           # Logo (colored variant, used in Header)
|   +-- Ararat-black.svg             # Logo (black variant)
|   +-- Ararat-white.svg             # Logo (white variant)
|   +-- favicon.ico                  # Browser tab icon
|   +-- next.svg, vercel.svg, ...    # Default Next.js assets
|
+-- src/
|   +-- app/                         # Next.js App Router
|   |   +-- layout.js                # Root layout (ThemeProvider, Header, Footer)
|   |   +-- page.js                  # Landing page (/, Server Component)
|   |   +-- globals.css              # Tailwind v4, CSS variables, theme tokens
|   |   +-- not-found.jsx            # 404 error page
|   |   +-- favicon.ico              # App favicon
|   |   +-- home/
|   |       +-- page.jsx             # /home route (placeholder)
|   |
|   +-- components/
|   |   +-- custom/                  # Project-specific components
|   |   |   +-- Header.jsx           # Navigation bar (Server Component)
|   |   |   +-- Footer.jsx           # Footer with copyright (Client Component)
|   |   |   +-- Logo.jsx             # Logo with next/image (Server Component)
|   |   |   +-- ThemeToggle.jsx      # Dark/light toggle (Client Component)
|   |   |
|   |   +-- ui/                      # shadcn/ui generated components (16 total)
|   |       +-- alert.jsx            # Alert with variants
|   |       +-- aspect-ratio.jsx     # Aspect ratio container
|   |       +-- button.jsx           # Button with CVA variants
|   |       +-- card.jsx             # Card system (7 sub-components)
|   |       +-- collapsible.jsx      # Expandable sections
|   |       +-- command.jsx          # Command palette (cmdk)
|   |       +-- dialog.jsx           # Modal dialog (9 sub-components)
|   |       +-- drawer.jsx           # Slide-out drawer (vaul)
|   |       +-- input-group.jsx      # Grouped input
|   |       +-- input.jsx            # Text input
|   |       +-- menubar.jsx          # Menu navigation (16 sub-components)
|   |       +-- slider.jsx           # Range slider
|   |       +-- table.jsx            # Data table
|   |       +-- tabs.jsx             # Tab navigation
|   |       +-- textarea.jsx         # Multi-line text input
|   |       +-- tooltip.jsx          # Hover tooltips
|   |
|   +-- lib/
|       +-- utils.js                 # cn() helper (clsx + tailwind-merge)
|
+-- package.json                     # Dependencies and scripts
+-- components.json                  # shadcn/ui configuration
+-- jsconfig.json                    # Path aliases (@/ -> ./src/)
+-- next.config.mjs                  # Next.js config (React Compiler enabled)
+-- postcss.config.mjs               # PostCSS with @tailwindcss/postcss
+-- eslint.config.mjs                # ESLint flat config
+-- CLAUDE.md                        # AI agent instructions
+-- AGENTS.md                        # Next.js version warning
+-- bun.lock                         # Bun lockfile
```
