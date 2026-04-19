# Sample Project

A modern React application built with Vite, Tailwind CSS, and Zustand for state management.

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ and npm/yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5175`

### Build

```bash
npm build
```

### Preview

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## 🛠️ Technologies

- **React 19** - UI library
- **Vite 7** - Build tool with HMR (Hot Module Replacement)
- **Tailwind CSS 4** - Utility-first CSS framework
- **Zustand** - Lightweight state management
- **ESLint** - Code quality and linting

## 📁 Project Structure

```
src/
├── Components/
│   └── Post.store.jsx       # Post component fetching data
├── store/
│   └── Post.store.js        # Zustand store for post data
├── App.jsx                  # Main app component
├── App.css                  # App styles
├── main.jsx                 # Entry point
└── index.css                # Global styles with Tailwind
```

## 🎨 Styling

This project uses **Tailwind CSS** for styling. You can use Tailwind's utility classes directly in your components:

```jsx
<div className="flex items-center justify-center min-h-screen bg-blue-500">
    <h1 className="text-white text-4xl">Hello Tailwind</h1>
</div>
```

## 🗄️ State Management

The project uses **Zustand** for state management. Example store:

```javascript
import { create } from "zustand";

export const usePostStore = create((set) => ({
    post: [],
    loading: false,
    fetchPost: async () => {
        // Fetch logic here
    },
}));
```

## 📝 Notes

- Hot Module Replacement (HMR) is enabled for fast development
- ESLint is configured for code quality
- All CSS is scoped to components using Tailwind's utility classes
