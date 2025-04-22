# Transylvania Tour Guide

A modern, test-driven Vue 3 + Vite web application for exploring the wonders of Transylvania.

## Table of Contents
- [Project Overview](#project-overview)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Testing](#testing)
- [Best Practices: TDD & BDD](#best-practices-tdd--bdd)
- [Contribution Guide](#contribution-guide)

## Project Overview
Transylvania Tour Guide helps users discover tourist attractions, plan trips, and learn about Transylvania, using a robust, maintainable, and well-tested codebase.

## Getting Started
### Prerequisites
- Node.js >= 18.x
- npm >= 9.x
- Git

### Setup
```bash
# Clone the repository
 git clone <repo-url>
 cd transylvania-tour-guide

# Install dependencies
 npm install

# Start the development server
 npm run dev
```

### Version Control
This project uses Git. Please commit changes in small, test-covered increments.

## Development Workflow (Trunk-Based)
- Work directly on the `main` branch or use very short-lived branches (ideally merged within a day)
- Integrate changes to `main` as frequently as possible (multiple times per day recommended)
- Write or update tests before implementing features (TDD)
- Use descriptive, atomic commit messages
- Open small, focused pull requests directly against `main`
- Avoid long-lived feature branches
- All PRs and commits must pass CI and tests before merging
- Resolve conflicts quickly to keep `main` always deployable

## Testing
### Unit & Component Tests
- Framework: [Vitest](https://vitest.dev/) + [@vue/test-utils](https://test-utils.vuejs.org/)
- Run unit tests:
  ```bash
  npm run test:unit
  ```

### End-to-End (E2E) & BDD
- Framework: [Cypress](https://www.cypress.io/) (supports BDD syntax)
- Run E2E tests:
  ```bash
  npm run test:e2e
  ```

### TDD/BDD Best Practices
- Write tests before code (Red-Green-Refactor)
- Use clear, behavior-driven test descriptions
- Cover edge cases and user flows
- Maintain high code coverage

## Contribution Guide
- Follow [Conventional Commits](https://www.conventionalcommits.org/)
- Document new features in this README
- Keep code and tests clean and readable

---

For design implementation, please provide your assets (PNG preferred for UI, PDF for flows/specs).
