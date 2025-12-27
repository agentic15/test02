# Login Window UI

A simple, elegant login window application with hardcoded backend authentication, built to demonstrate and test the claude-zen framework features including TDD workflow, task management, and automated testing.

## Project Structure

```
./Agent/
├── docs/              # Architecture and technical documentation
├── src/               # Source code
│   ├── components/    # UI components
│   ├── controllers/   # Business logic coordination
│   ├── services/      # Service layer
│   ├── state/         # State management
│   ├── utils/         # Utility functions
│   └── styles/        # CSS files
├── tests/             # All test files
│   ├── unit/          # Unit tests
│   ├── integration/   # Integration tests
│   ├── e2e/           # End-to-end tests
│   └── visual/        # Visual regression tests
└── public/            # Static assets
```

## Quick Start

### Install Dependencies

```bash
npm install
```

### Development

```bash
# Start development server
npm run dev

# Run tests in watch mode
npm run test:watch
```

### Testing

```bash
# Run all unit/integration tests
npm test

# Run tests with coverage
npm run test

# Run E2E tests
npm run test:e2e

# Run E2E tests with UI
npm run test:e2e:ui
```

### Code Quality

```bash
# Lint code
npm run lint

# Fix linting issues
npm run lint:fix

# Format code
npm run format

# Check formatting
npm run format:check

# Run all checks (lint + format + test)
npm run validate
```

### Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## Technology Stack

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Grid/Flexbox
- **Vanilla JavaScript (ES6+)**: No framework dependencies
- **Vite**: Build tool and dev server
- **Vitest**: Unit and integration testing
- **Playwright**: End-to-end testing
- **ESLint + Prettier**: Code quality and formatting

## Test Credentials

The application uses hardcoded credentials for testing:

- **Username**: `admin` / **Password**: `password123`
- **Username**: `user` / **Password**: `user123`

## Documentation

See the [docs](./docs/) directory for detailed documentation:

- [Architecture](./docs/architecture.md)
- [Technology Stack](./docs/tech-stack.md)
- [Folder Structure](./docs/folder-structure.md)

## Development Workflow

This project follows Test-Driven Development (TDD):

1. Write failing tests (Red)
2. Write minimal code to pass (Green)
3. Refactor if needed
4. Repeat

## Project Status

See the task tracker for current progress and upcoming tasks.

## License

MIT
