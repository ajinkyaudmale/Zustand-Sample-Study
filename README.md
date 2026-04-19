# Sample Project

A modern React application built with Vite, Tailwind CSS, and Zustand for state management. This project demonstrates fetching data from external APIs and managing state with Zustand.

## ✨ Features

- ⚡ **Lightning-fast development** with Vite and Hot Module Replacement (HMR)
- 🎨 **Utility-first styling** with Tailwind CSS for rapid UI development
- 🗄️ **Lightweight state management** with Zustand
- 🔍 **Code quality** with ESLint
- 📱 **Modern React** with version 19 and React Hooks
- 🌐 **External API integration** for fetching photos and metadata

## 🚀 Quick Start

### Prerequisites

- Node.js 16 or higher
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd Sample\ Project

# Install dependencies
npm install
```

### Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5175` (or next available port if 5175 is in use)

### Production Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint Code

```bash
npm run lint
```

## 🛠️ Tech Stack

| Technology               | Version | Purpose                      |
| ------------------------ | ------- | ---------------------------- |
| **React**                | 19.1.1  | UI library with hooks        |
| **Vite**                 | 7.1.7   | Build tool and dev server    |
| **Tailwind CSS**         | 4.x     | Utility-first CSS framework  |
| **@tailwindcss/postcss** | Latest  | PostCSS plugin for Tailwind  |
| **Zustand**              | Latest  | Lightweight state management |
| **ESLint**               | 9.36.0  | Code linting and quality     |

## 📁 Project Structure

```
Sample Project/
├── src/
│   ├── Components/
│   │   └── Post.store.jsx          # Post display component
│   ├── store/
│   │   ├── Post.store.js           # Zustand store for fetching posts
│   │   ├── app.store.js            # Zustand store for auth & theme
│   │   └── counter.store.js        # Zustand store for counter
│   ├── assets/                     # Static assets (images, fonts, etc.)
│   ├── App.jsx                     # Root component
│   ├── App.css                     # App-specific styles
│   ├── main.jsx                    # React app entry point
│   └── index.css                   # Global styles with Tailwind directives
├── public/                         # Public assets (favicon, manifest)
├── index.html                      # HTML template
├── package.json                    # Project dependencies and scripts
├── vite.config.js                  # Vite configuration
├── tailwind.config.js              # Tailwind CSS configuration
├── postcss.config.js               # PostCSS configuration
├── eslint.config.js                # ESLint configuration
└── README.md                       # This file
```

## 🎨 Styling with Tailwind CSS

This project uses **Tailwind CSS v4** for all styling. Instead of writing custom CSS, use Tailwind's utility classes:

### Example Component with Tailwind

```jsx
import { useState } from "react";

function Button() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <button
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 font-semibold"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {isHovered ? "Hover Me!" : "Click Me"}
        </button>
    );
}

export default Button;
```

### Common Tailwind Classes

- **Layout**: `flex`, `grid`, `justify-center`, `items-center`
- **Spacing**: `px-4`, `py-2`, `m-auto`, `gap-4`
- **Colors**: `bg-blue-500`, `text-white`, `border-gray-200`
- **Sizing**: `w-full`, `h-screen`, `min-h-screen`
- **Hover/Interactive**: `hover:bg-blue-600`, `focus:outline-none`

## 🗄️ State Management with Zustand

Zustand provides a simple, lightweight way to manage global state. No reducers, no context providers. This project includes three stores:

### 📸 Post Store (`src/store/Post.store.js`)

Manages fetched photo data from the Picsum Photos API.

```javascript
import { create } from "zustand";

export const usePostStore = create((set) => ({
    post: [],
    loading: false,
    error: null,

    fetchPost: async () => {
        set({ loading: true, error: null });
        try {
            const res = await fetch(
                "https://picsum.photos/v2/list?page=2&limit=5",
            );
            const data = await res.json();
            set({ post: data, loading: false });
        } catch (error) {
            set({ error: "Failed to Fetch", loading: false });
        }
    },
}));
```

**Usage in Components:**

```jsx
import { usePostStore } from "../store/Post.store";

function Poststore() {
    const { post, loading, error, fetchPost } = usePostStore();

    if (loading) return <h1>Loading....</h1>;
    if (error) return <h1>{error}</h1>;

    return (
        <ul>
            {post.map((element) => (
                <div key={element.id}>
                    <h1>ID: {element.id}</h1>
                    <h1>author: {element.author}</h1>
                    <h1>width: {element.width}</h1>
                    <h1>height: {element.height}</h1>
                </div>
            ))}
        </ul>
    );
}
```

---

### 👤 App Store (`src/store/app.store.js`)

Manages authentication and theme state for the entire application.

```javascript
import { create } from "zustand";

export const useAppStore = create((set) => ({
    // Auth State
    user: null,
    login: (user) => set({ user: user }),
    logout: () => set({ user: null }),

    // Theme State
    theme: "light",
    toggleTheme: () =>
        set((state) => ({ theme: state.theme === "light" ? "dark" : "light" })),
}));
```

**Usage in Components:**

```jsx
import { useAppStore } from "../store/app.store";

function Header() {
    const { user, theme, toggleTheme, login, logout } = useAppStore();

    return (
        <header
            className={theme === "dark" ? "bg-gray-900 text-white" : "bg-white"}
        >
            <button onClick={toggleTheme}>
                {theme === "light" ? "🌙 Dark" : "☀️ Light"}
            </button>

            {user ? (
                <>
                    <p>Welcome, {user.name}</p>
                    <button onClick={logout}>Logout</button>
                </>
            ) : (
                <button onClick={() => login({ name: "John" })}>Login</button>
            )}
        </header>
    );
}
```

---

### 🔢 Counter Store (`src/store/counter.store.js`)

Simple counter state for demonstrating basic state management and mutations.

```javascript
import { create } from "zustand";

export const useCounterStore = create((set) => ({
    count: 0,
    increase: () => set((state) => ({ count: state.count + 1 })),
    decrease: () => set((state) => ({ count: state.count - 1 })),
    reset: () => set({ count: 0 }),
}));
```

**Usage in Components:**

```jsx
import { useCounterStore } from "../store/counter.store";

function Counter() {
    const { count, increase, decrease, reset } = useCounterStore();

    return (
        <div className="flex flex-col items-center gap-4">
            <h1 className="text-4xl font-bold">{count}</h1>
            <div className="flex gap-2">
                <button
                    onClick={decrease}
                    className="px-4 py-2 bg-red-500 text-white rounded"
                >
                    Decrease
                </button>
                <button
                    onClick={increase}
                    className="px-4 py-2 bg-green-500 text-white rounded"
                >
                    Increase
                </button>
                <button
                    onClick={reset}
                    className="px-4 py-2 bg-gray-500 text-white rounded"
                >
                    Reset
                </button>
            </div>
        </div>
    );
}
```

---

### Store Pattern Overview

All stores follow the same pattern:

1. **Define state** - Initial values for your data
2. **Create actions** - Functions that modify state using `set()`
3. **Use in components** - Call the hook to access state and actions

```javascript
// Pattern
const useStore = create((set) => ({
    // State
    stateVar: initialValue,

    // Actions
    updateState: (newValue) => set({ stateVar: newValue }),

    // Async Actions
    fetchData: async () => {
        set({ loading: true });
        try {
            const data = await api.fetch();
            set({ data, loading: false });
        } catch (error) {
            set({ error, loading: false });
        }
    },
}));
```

## 🌐 API Integration

This app fetches photo data from the [Picsum Photos API](https://picsum.photos/):

```
Endpoint: https://picsum.photos/v2/list
Parameters:
  - page: 2
  - limit: 5
```

**Response Structure:**

```json
{
    "id": "1",
    "author": "Alejandro Escamilla",
    "width": 5616,
    "height": 3744,
    "url": "https://picsum.photos/5616/3744?image=1",
    "download_url": "..."
}
```

## 🐛 Troubleshooting

### Port Already in Use

If port 5175 is already in use, Vite will automatically try the next available port:

```bash
npm run dev
# Output shows: ➜  Local:   http://localhost:5176/
```

### CSS Not Loading

Ensure `src/index.css` contains Tailwind directives:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### State Not Updating

Make sure you're calling `set()` in your store actions:

```javascript
// ❌ Wrong
fetchData: async () => {
    const data = await fetch(...);
}

// ✅ Correct
fetchData: async () => {
    const data = await fetch(...);
    set({ data }); // Must call set!
}
```

### ESLint Errors

Run the linter to check for code quality issues:

```bash
npm run lint
```

Fix common issues with:

```bash
npm run lint -- --fix
```

## 📚 Learning Resources

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev/guide/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Zustand Documentation](https://zustand-demo.vercel.app)

## 🔄 Development Workflow

1. **Start dev server**: `npm run dev`
2. **Make changes** to your components
3. **See hot reload** in the browser automatically
4. **Check for lint errors**: `npm run lint`
5. **Build for production**: `npm run build`
6. **Preview build**: `npm run preview`

## 📝 Code Style

- Follow ESLint configuration
- Use Tailwind classes for styling (avoid custom CSS where possible)
- Keep components small and focused
- Use hooks for state management in components
- Use Zustand for global state

## 📄 License

This project is open source and available under the MIT License.

---

**Happy Coding! 🎉**
