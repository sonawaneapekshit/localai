# LocalAI

A privacy-first AI chat application (ChatGPT clone) that runs entirely on your machine using [Ollama](https://ollama.com). Your conversations never leave your device.

## Features

- **100% Private** -- all data stays on your machine, no cloud dependency
- **Local LLM Support** -- powered by Ollama (localhost:11434)
- **Dark/Light Theme** -- dark by default, toggle with one click
- **Responsive Design** -- mobile-friendly with collapsible sidebar
- **Modern UI** -- built with shadcn/ui, Radix primitives, and Tailwind CSS 4

## Tech Stack

| Layer           | Technology                                       |
| --------------- | ------------------------------------------------ |
| Framework       | Next.js 16 (App Router, React Server Components) |
| UI Library      | React 19 (React Compiler enabled)                |
| Styling         | Tailwind CSS 4 (PostCSS, oklch color space)      |
| Components      | shadcn/ui 4 (radix-luma style)                   |
| Icons           | HugeIcons                                        |
| Theming         | next-themes                                      |
| Package Manager | Bun                                              |
| Language        | JavaScript (no TypeScript)                       |

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) (package manager)
- [Ollama](https://ollama.com) (local LLM runtime) -- needed for chat functionality (coming soon)

### Installation

```bash
git clone <repo-url>
cd localai
bun install
```

### Development

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production

```bash
bun run build
bun start
```

> **Note:** Use `bun run build`, not `bun build` -- the latter conflicts with Bun's own build command.

## Project Structure

```text
src/
  app/
    layout.js              # Root layout (ThemeProvider, fonts, Footer)
    globals.css            # Tailwind v4 config, CSS variables, theme tokens
    (main)/
      layout.js            # Main layout (Header)
      page.js              # Landing page (hero, features, FAQ)
      home/page.jsx        # Home placeholder
      not-found.jsx        # 404 page
    chat/
      layout.jsx           # Chat layout (SidebarProvider)
      page.jsx             # Chat list
      [id]/page.jsx        # Individual chat view
  components/
    custom/                # Project components (Header, Footer, Logo, ThemeToggle)
    ui/                    # shadcn/ui components (auto-generated, do not edit)
  hooks/
    use-mobile.js          # Responsive breakpoint hook
  lib/
    utils.js               # cn() helper (clsx + tailwind-merge)
public/                    # Static assets (SVG logos)
```

## Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `bun dev`       | Start development server |
| `bun run build` | Production build         |
| `bun start`     | Start production server  |
| `bun run lint`  | Run ESLint               |

## Planned Architecture

```text
Next.js Frontend --> Express API --> Ollama (localhost:11434)
```

### Planned API Endpoints

- `POST /api/chat` -- send a message
- `POST /api/chat/stream` -- streaming response
- `GET /api/chats` -- list conversations
- `POST /api/chats` -- create conversation
- `DELETE /api/chats` -- delete conversation

## Current Status

**Built:**

- Landing page (hero section, feature cards, FAQ)
- Dark/light theme toggle
- Header navigation and footer
- Chat page layout with sidebar
- Dynamic chat routes (`/chat/[id]`)
- 404 page
- 20 shadcn/ui components installed

**In Progress:**

- Express API backend
- Chat interface and message bubbles
- Model selector
- Conversation persistence
- Ollama integration

**Future Features:**

- Move to Typescript

## License

Private
