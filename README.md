# Frontend Mentor Solutions

A collection of my solutions to Frontend Mentor challenges. All solutions are also available on [Frontend Mentor ↗](https://www.frontendmentor.io/profile/ardaeker).

## Table of Contents

- [Completed Challenges](#completed-challenges)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Turborepo Commands](#turborepo-commands)
  - [Running a Specific Challenge](#running-a-specific-challenge)
- [Contributions](#contributions)

## Completed Challenges

| Challenge                      | Live Preview                                                   | Solution Code                                                                                                                         |
| ------------------------------ | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| Product preview card component | [Live ↗](https://product-preview-card-component.ardaeker.com) | [View Code ↗](https://github.com/ardaeker/frontend-mentor-solutions/tree/main/apps/challenges/newbie/product-preview-card-component) |
| Order summary component        | [Live ↗](https://order-summary-component.ardaeker.com)        | [View Code ↗](https://github.com/ardaeker/frontend-mentor-solutions/tree/main/apps/challenges/newbie/order-summary-component)        |

## Getting Started

### Installation

**Clone this repository:**

```sh
git clone https://github.com/ardaeker/frontend-mentor-solutions.git
```

**Navigate into the project directory:**

```sh
cd frontend-mentor-solutions
```

**Install all dependencies:**

```sh
pnpm install
```

### Turborepo Commands

Run the following commands from the root of the repository:

- **Start dev mode for all apps:**

```sh
pnpm dev
```

- **Build all apps and packages:**

```sh
pnpm build
```

- **Run linting across the entire monorepo:**

```sh
pnpm lint
```

### Running a Specific Challenge

To run a specific challenge using Turborepo filters, use the `--filter` flag with the project name defined in its `package.json`.

For example, to run the `product-preview-card-component` challenge:

```sh
pnpm dev --filter product-preview-card-component
```

> The project name (product-preview-card-component) should match the `name` field in that challenge’s `package.json`.

This method allows you to start a single challenge without affecting the rest of the monorepo.

## Contributions

Suggestions, improvements, and contributions are always welcome!
