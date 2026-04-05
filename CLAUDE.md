@AGENTS.md

# LocalAI

Privacy-first AI chat app (ChatGPT clone) that runs locally using Ollama. Currently in early development -- the landing page is built but there is no backend or chat functionality yet.

## Architecture

```text
Next.js Frontend --> Express API (planned) --> Ollama (localhost:11434)
```

Planned API: POST /api/chat, POST /api/chat/stream, GET/POST/DELETE /api/chats
Planned components: ChatWindow, MessageBubble, Sidebar, InputBox, ModelSelector

## Tech Stack

- **Next.js 16.2.2** - App Router, RSC. HAS BREAKING CHANGES -- read `node_modules/next/dist/docs/` first
- **React 19.2.4** - React Compiler enabled (no manual useMemo/useCallback needed)
- **Tailwind CSS 4** - PostCSS-based. NO tailwind.config.js. Config in globals.css via `@theme inline`
- **shadcn/ui 4.1.2** - Style: radix-luma, JSX (not TSX), icon library: hugeicons
- **Radix UI 1.4.3** - Import from flat `radix-ui` package (NOT `@radix-ui/*`)
- **HugeIcons** - @hugeicons/react + @hugeicons/core-free-icons (NOT Lucide)
- **next-themes 0.4.6** - Dark theme by default
- **CVA 0.7.1** - class-variance-authority for component variants
- **Bun** - Package manager (bun.lock)
- **Plain JavaScript** - No TypeScript

## Commands

```bash
bun dev          # Dev server
bun run build    # Production build (must use `run` -- `bun build` conflicts)
bun start        # Production server
bun run lint     # ESLint (core-web-vitals)
```

## Project Structure

```text
src/
  app/
    layout.js         # Root layout (ThemeProvider, Header, Footer)
    page.js           # Landing page (Server Component)
    globals.css       # Tailwind v4 imports, CSS variables (oklch), theme tokens
    not-found.jsx     # 404 page
    home/page.jsx     # Placeholder
  components/
    custom/           # Project-specific components (Header, Footer, Logo, ThemeToggle)
    ui/               # shadcn/ui generated components -- do not edit manually
  lib/
    utils.js          # cn() helper (clsx + tailwind-merge)
public/               # Static assets (SVG logos)
```

## Coding Conventions

### Language and Imports

- Plain JavaScript (.js/.jsx), no TypeScript
- Path alias: `@/` maps to `./src/` (jsconfig.json)
- Aliases: `@/components/ui`, `@/hooks`, `@/lib`

### Components

- **Server Components by default** -- only add `'use client'` when hooks/browser APIs are needed
- Custom components go in `src/components/custom/`
- Pattern: arrow function + default export (`const Foo = () => { ... }; export default Foo;`)
- shadcn components use named function declarations with named exports

### Styling

- Tailwind utility classes, composed with `cn()` from `@/lib/utils`
- CSS variables in oklch color space (purple primary, hue 280)
- Dark theme by default (`defaultTheme="dark"`)
- CVA for component variant definitions
- No tailwind.config.js -- Tailwind v4 uses `@tailwindcss/postcss` plugin

### Icons (HugeIcons)

```jsx
import { HugeiconsIcon } from '@hugeicons/react';
import { SunIcon } from '@hugeicons/core-free-icons';

<HugeiconsIcon icon={SunIcon} size={24} />
```

Do NOT use Lucide. Import wrapper from `@hugeicons/react`, icons from `@hugeicons/core-free-icons`.

### Fonts

Geist Sans + Geist Mono via `next/font/google` (variables: `--font-geist-sans`, `--font-geist-mono`).

### Adding shadcn Components

```bash
bunx shadcn@latest add <component-name>
```

Components are generated as JSX in `src/components/ui/`. Do not edit them manually. Config is in `components.json` (style: radix-luma, RTL enabled, hugeicons).

## Critical Warnings

1. **Next.js 16.2.2 has breaking changes** -- ALWAYS read `node_modules/next/dist/docs/01-app/` before writing Next.js code
2. **No tailwind.config.js** -- Tailwind v4 is CSS-only configuration
3. **No Lucide icons** -- use HugeIcons exclusively
4. **No `@radix-ui/*` scoped imports** -- use flat `radix-ui` package
5. **No TypeScript** -- JavaScript only
6. **React Compiler is on** -- skip manual memoization

## Current Status

**Built:** Landing page (hero, features, FAQ), dark/light theme toggle, header nav, footer, 404 page, 16 shadcn/ui components installed

**Not built:** Express API backend, chat interface, sidebar, model selector, conversation persistence, API routes
