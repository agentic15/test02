# Project Folder Structure

## Overview
This document defines the complete folder structure for the Login Window UI application, following best practices for organization, maintainability, and scalability.

## Directory Tree

```
./Agent/
├── docs/                          # Documentation
│   ├── architecture.md            # Architecture design and patterns
│   ├── tech-stack.md              # Technology stack documentation
│   ├── folder-structure.md        # This file
│   ├── user-guide.md              # User documentation (future)
│   ├── api-docs.md                # API documentation (future)
│   └── deployment-test-results.md # Deployment testing results (future)
│
├── src/                           # Source code
│   ├── components/                # UI Components
│   │   ├── LoginForm.js           # Main login form component
│   │   ├── LoadingSpinner.js      # Loading indicator component
│   │   ├── ErrorAlert.js          # Error message component
│   │   └── SuccessMessage.js      # Success notification component
│   │
│   ├── controllers/               # Controllers (business logic coordination)
│   │   └── loginController.js     # Login flow orchestration
│   │
│   ├── services/                  # Service layer (business logic)
│   │   ├── authService.js         # Authentication service
│   │   ├── sessionService.js      # Session management service
│   │   └── errorHandler.js        # Error handling service
│   │
│   ├── state/                     # State management
│   │   └── formState.js           # Form state manager
│   │
│   ├── utils/                     # Utility functions
│   │   └── validation.js          # Validation utilities
│   │
│   ├── styles/                    # CSS files
│   │   ├── LoginForm.css          # Login form styles
│   │   ├── components.css         # Component styles
│   │   └── main.css               # Global styles
│   │
│   └── main.js                    # Application entry point
│
├── tests/                         # Test files
│   ├── unit/                      # Unit tests
│   │   ├── auth.service.test.js   # Auth service tests
│   │   ├── session.service.test.js # Session service tests
│   │   ├── validation.test.js     # Validation tests
│   │   ├── formState.test.js      # State management tests
│   │   └── errorHandler.test.js   # Error handler tests
│   │
│   ├── integration/               # Integration tests
│   │   └── login.integration.test.js # Login flow integration tests
│   │
│   ├── e2e/                       # End-to-end tests
│   │   ├── setup.js               # E2E test setup
│   │   ├── login.e2e.test.js      # Login E2E scenarios
│   │   └── sample.e2e.test.js     # Sample E2E test
│   │
│   ├── visual/                    # Visual regression tests
│   │   └── screenshots/           # Baseline screenshots
│   │
│   ├── components/                # Component tests
│   │   ├── LoginForm.test.js      # Login form component tests
│   │   └── feedback.components.test.js # Feedback components tests
│   │
│   ├── setup.js                   # Test setup and configuration
│   └── sample.test.js             # Sample test file
│
├── public/                        # Static assets
│   ├── index.html                 # Main HTML file
│   ├── favicon.ico                # Favicon
│   └── assets/                    # Static assets (images, fonts)
│       └── logo.png               # Application logo (if any)
│
├── dist/                          # Production build output (generated)
│   ├── assets/                    # Bundled assets
│   ├── index.html                 # Built HTML
│   └── *.js, *.css                # Bundled and minified files
│
├── coverage/                      # Test coverage reports (generated)
│   ├── html/                      # HTML coverage report
│   ├── lcov.info                  # LCOV coverage data
│   └── coverage-summary.json      # Coverage summary
│
├── .gitkeep                       # Keeps Agent directory in git
├── package.json                   # NPM dependencies and scripts
├── vite.config.js                 # Vite configuration
├── vitest.config.js               # Vitest configuration
├── playwright.config.js           # Playwright configuration
├── .eslintrc.js                   # ESLint configuration
├── .prettierrc                    # Prettier configuration
└── README.md                      # Project README

./scripts/                         # Deployment and utility scripts
├── deploy.sh                      # Deployment script
├── test-all.sh                    # Run all tests script
└── README.md                      # Scripts documentation
```

## Directory Descriptions

### `/docs`
**Purpose**: All project documentation
**Contents**:
- Architecture documentation
- Technology stack decisions
- User guides
- API documentation
- Test results and reports

**Guidelines**:
- Use Markdown format
- Keep documentation up to date
- Include diagrams where helpful
- Version control all docs

### `/src`
**Purpose**: All source code
**Structure**: Organized by layer (components, services, utils, etc.)

**Guidelines**:
- One module per file
- Clear naming conventions
- Import/export ES modules
- Keep files focused and small

### `/src/components`
**Purpose**: UI components
**Contents**: Reusable UI components

**Guidelines**:
- Each component in its own file
- Name matches file name (LoginForm.js exports LoginForm)
- Include JSDoc comments
- Keep components pure when possible

### `/src/controllers`
**Purpose**: Business logic coordination
**Contents**: Controllers that orchestrate services and state

**Guidelines**:
- Thin controllers (delegate to services)
- Handle user interactions
- Coordinate multiple services
- No direct DOM manipulation

### `/src/services`
**Purpose**: Business logic and services
**Contents**: Authentication, session management, error handling

**Guidelines**:
- Single responsibility per service
- Pure functions when possible
- No UI concerns
- Well-tested

### `/src/state`
**Purpose**: State management
**Contents**: State managers and reducers

**Guidelines**:
- Immutable state updates
- Predictable state transitions
- Well-documented state shape
- Subscribe/notify patterns

### `/src/utils`
**Purpose**: Utility functions
**Contents**: Helper functions, validators, formatters

**Guidelines**:
- Pure functions
- No side effects
- Reusable and generic
- Well-tested

### `/src/styles`
**Purpose**: CSS stylesheets
**Contents**: Component styles and global styles

**Guidelines**:
- Use CSS modules or scoped styles
- Follow BEM or similar naming
- Mobile-first responsive design
- CSS variables for theming

### `/tests`
**Purpose**: All test files
**Structure**: Mirrors src structure

**Guidelines**:
- Test file names: `*.test.js`
- One test file per source file
- Comprehensive test coverage
- Follow AAA pattern (Arrange, Act, Assert)

### `/tests/unit`
**Purpose**: Unit tests for individual functions/modules
**Coverage**: Services, utils, state management

**Guidelines**:
- Test one thing at a time
- Mock external dependencies
- Fast execution
- 100% coverage goal

### `/tests/integration`
**Purpose**: Integration tests for multiple modules
**Coverage**: Login flow, form submission, API integration

**Guidelines**:
- Test module interactions
- Minimal mocking
- Realistic scenarios
- Test happy path and error cases

### `/tests/e2e`
**Purpose**: End-to-end tests simulating user behavior
**Coverage**: Complete user journeys

**Guidelines**:
- Test from user perspective
- Test across browsers
- Include visual validation
- Capture screenshots on failure

### `/tests/visual`
**Purpose**: Visual regression testing
**Contents**: Baseline screenshots and visual diffs

**Guidelines**:
- Capture baseline images
- Test responsive breakpoints
- Version control baselines
- Review visual changes carefully

### `/public`
**Purpose**: Static assets served as-is
**Contents**: HTML, images, fonts, favicon

**Guidelines**:
- Keep minimal
- Optimize images
- Use semantic HTML
- Include meta tags for SEO/accessibility

### `/dist`
**Purpose**: Production build output (generated, not committed)
**Contents**: Bundled, minified, optimized files

**Guidelines**:
- Never commit to git (.gitignore)
- Generated by `npm run build`
- Serve this folder in production
- Optimize for performance

### `/coverage`
**Purpose**: Test coverage reports (generated, not committed)
**Contents**: HTML reports, LCOV data, JSON summaries

**Guidelines**:
- Generated by test runner
- Never commit to git (.gitignore)
- Review regularly
- Maintain 100% coverage

## File Naming Conventions

### JavaScript Files
- **Components**: PascalCase (e.g., `LoginForm.js`)
- **Services**: camelCase with 'Service' suffix (e.g., `authService.js`)
- **Utils**: camelCase (e.g., `validation.js`)
- **Tests**: Same as source + `.test.js` (e.g., `authService.test.js`)
- **Config**: kebab-case (e.g., `vite.config.js`)

### CSS Files
- **Component styles**: Match component name (e.g., `LoginForm.css`)
- **Global styles**: Descriptive name (e.g., `main.css`, `reset.css`)

### Documentation
- **Markdown files**: kebab-case (e.g., `folder-structure.md`)
- **All lowercase**: For consistency

## Import Path Conventions

### Absolute Imports (with Vite aliases)
```javascript
import LoginForm from '@/components/LoginForm';
import authService from '@/services/authService';
import { validateEmail } from '@/utils/validation';
```

### Relative Imports
```javascript
// From same directory
import authService from './authService';

// From parent directory
import LoginForm from '../components/LoginForm';

// From specific path
import validation from '../../utils/validation';
```

## Git Ignore Patterns

The following should be ignored by git:

```gitignore
# Build output
/dist
/build

# Test coverage
/coverage
/.nyc_output

# Dependencies
/node_modules

# Environment files
.env
.env.local

# IDE
.vscode
.idea
*.swp
*.swo

# OS
.DS_Store
Thumbs.db

# Logs
*.log
npm-debug.log*

# Playwright
/test-results
/playwright-report
```

## Scalability Considerations

### When Project Grows
1. **Feature-based structure**: Group by feature instead of type
2. **Shared folder**: Common components used across features
3. **Types folder**: If migrating to TypeScript
4. **API folder**: If adding backend API
5. **Hooks folder**: If migrating to React

### Example Feature-based Structure
```
src/
├── features/
│   ├── auth/
│   │   ├── components/
│   │   ├── services/
│   │   ├── tests/
│   │   └── index.js
│   └── profile/
│       ├── components/
│       ├── services/
│       └── tests/
└── shared/
    ├── components/
    ├── utils/
    └── styles/
```

## Best Practices

1. **Consistency**: Follow conventions throughout the project
2. **Clarity**: Use descriptive names
3. **Separation**: Keep concerns separate (UI, logic, data)
4. **Testability**: Structure for easy testing
5. **Documentation**: Document non-obvious decisions
6. **Modularity**: Keep modules small and focused
7. **Reusability**: Design for reuse

## Validation Checklist

- [ ] All directories follow naming conventions
- [ ] Test structure mirrors source structure
- [ ] Configuration files in root
- [ ] Documentation in /docs
- [ ] No source code in /public
- [ ] Generated files ignored by git
- [ ] Import paths are consistent
- [ ] README in each major directory

---

**Created**: 2025-12-26
**Author**: Claude (Sonnet 4.5)
**Task**: TASK-001 - Design project architecture
**Plan**: plan-001-generated
