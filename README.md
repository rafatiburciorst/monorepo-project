# Blog Monorepo

A full-stack blog application built with React and Fastify, organized as a monorepo using pnpm workspaces.

## 🏗️ Architecture

This project is structured as a monorepo containing:

- **`apps/web`** - React frontend application built with Vite
- **`apps/server`** - Fastify backend API server

## 🚀 Tech Stack

### Frontend (`apps/web`)
- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **ESLint** - Code linting

### Backend (`apps/server`)
- **Fastify** - Fast web framework for Node.js
- **TypeScript** - Type safety
- **tsx** - TypeScript runner for development

### Development Tools
- **pnpm** - Package manager with workspace support
- **concurrently** - Run multiple commands concurrently

## 📦 Installation

Make sure you have [pnpm](https://pnpm.io/) installed on your system.

```bash
# Install dependencies for all workspaces
pnpm install
```

## 🔧 Development

### Start both applications concurrently
```bash
pnpm dev
```

This command will start:
- Frontend development server on `http://localhost:5173` (default Vite port)
- Backend API server on `http://localhost:3001`

### Start applications individually

#### Frontend only
```bash
pnpm --filter web dev
```

#### Backend only
```bash
pnpm --filter server dev
```

## 🏃‍♂️ Available Scripts

### Root level
- `pnpm dev` - Start both frontend and backend in development mode

### Frontend (`apps/web`)
- `pnpm dev` - Start Vite development server
- `pnpm build` - Build for production
- `pnpm lint` - Run ESLint
- `pnpm preview` - Preview production build

### Backend (`apps/server`)
- `pnpm dev` - Start Fastify server with hot reload

## 📁 Project Structure

```
blog/
├── package.json              # Root package with dev script
├── pnpm-workspace.yaml       # pnpm workspace configuration
├── pnpm-lock.yaml           # Lock file
├── tsconfig.json            # Root TypeScript config
└── apps/
    ├── web/                 # React frontend
    │   ├── src/
    │   │   ├── App.tsx      # Main App component
    │   │   ├── main.tsx     # Entry point
    │   │   └── ...
    │   ├── package.json
    │   ├── vite.config.ts
    │   └── ...
    └── server/              # Fastify backend
        ├── src/
        │   └── index.ts     # Server entry point
        ├── package.json
        └── tsconfig.json
```

## 🔗 API Integration

The frontend is configured to proxy API requests to the backend server. The example endpoint:

- **GET** `/api/hello` - Returns a greeting message from the server

## 🛠️ Development Notes

- Both applications are configured with TypeScript for type safety
- Hot reload is enabled for both frontend and backend development
- The frontend development server proxies API requests to the backend
- ESLint is configured for the frontend with React-specific rules

## 📝 License

ISC

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run linting and tests
5. Submit a pull request

---

Built with ❤️ using React, Fastify, and TypeScript
