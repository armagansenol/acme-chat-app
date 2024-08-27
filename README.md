# Acme Chat App

## Overview

**Acme Chat App** is a chat application built using modern web technologies including React, TypeScript, Vite, and Styled Components. It also leverages Radix UI for component styling and accessibility, Framer Motion for animations, and Jest for testing.

## Features

- **React 18**: Leveraging the latest features of React.
- **TypeScript**: Ensures type safety throughout the codebase.
- **Vite**: A fast build tool optimized for modern web development.
- **Styled Components**: CSS-in-JS for modular and scoped styling.
- **Radix UI**: Accessible, unstyled components for building high-quality UIs.
- **Framer Motion**: Provides animations and transitions.
- **Jest**: For testing React components and logic.
- **ESLint**: Linting for consistent and error-free code.
- **State Management**: Since there's no complex state management involved useReducer and useContext hooks are used for state management.



## Getting Started

### Prerequisites

Ensure you have the following installed on your development machine:

- **Node.js**: Version 16.x or higher
- **npm**: Version 7.x or higher (comes with Node.js)

### Installation

  Clone the repository:

   ```bash
   git clone https://github.com/your-username/acme-chat-app.git
   cd acme-chat-app
   ```

  Install the dependencies:

   ```bash
   npm install
   ```

  Running the Development Server:

  ```bash
   npm run dev
   ```

  Building for deployment:

  ```bash
   npm run build
   ```

### Project Structure

```text
├── src/
│   ├── components/   # React components
│   ├── hooks/        # Reusable react hooks
│   ├── styles/       # Styled components and global styles
│   └── lib/utils/    # Utility functions
│   └── store/        # State management
│   └── types/        # Global types
├── public/           # Static assets
├── jest.config.js    # Jest configuration
├── tsconfig.json     # TypeScript configuration
├── .eslintrc.json    # ESLint configuration
└── vite.config.ts    # Vite configuration
```

### TO DO

- Expand the input area when a new line is added.
- Show a loading spinner when images etc. are being loaded.
- Implement a design system.
- Add a debounce feature to the autocomplete mechanism.
- Add container structure and media queries for large screens.
