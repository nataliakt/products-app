# Products App

## Overview

This project is built using **Expo React Native Prebuild**, offering a robust foundation for mobile application development. It ensures compatibility with native modules while maintaining the simplicity of managed workflows.

## Table of Contents

- [Setup](#setup)
- [Project Structure](#project-structure)
- [Technical Decisions](#technical-decisions)

---

## Setup

To set up the project locally:

1. **Environment:**

   - Install react native environment setup by following the instructions on the [React Native Documentation](https://reactnative.dev/docs/set-up-your-environment).
   - This project was developed using Node.js v20.9.0 and Yarn v1.22.19.

1. **Clone the repository:**

   ```bash
   git clone https://github.com/nataliakt/products-app.git
   cd products-app
   ```

   Or download the project as a zip file and extract it.

1. **Install dependencies:**

   ```bash
   yarn
   ```

1. **Prebuild the project:**
   Run the following command to generate native files for iOS and Android:

   ```bash
   yarn prebuild
   ```

1. **Run the app:**
   For Android:
   ```bash
   yarn android
   ```
   For iOS:
   ```bash
   yarn ios
   ```
   Or use the Expo Go app for development:
   ```bash
   yarn start
   ```

---

## Project Structure

The project is structured as follows:

```
app/                            # App navigation routes
├── _layout.tsx                 # Global layout and main routes settings
├── (product)/                  # Group folder to product list route
│   └── index.tsx               # Product list screen
├── categories/
│   └── modal.tsx               # Modal to filter categories
└── product/
    └── [id].tsx                # Single product screen
src/
├── api/                        # API fetches
├── assets/                     # Fonts and images
├── components/                 # Reusable UI components
│   └── ds/                     # Design system with basic components
├── constants/                  # Global constant values
├── core/                       # Common logics and abstractions
│   └── entities                # Domain entities
│   └── enums                   # Domain enums
│   └── errors                  # Domain error classes
│   └── mappers                 # Mappers to parse raw data from api to domain entities
│   └── repositories            # Data source abstractions and perform mappers
│   └── services                # Consumes API abstracted by repositories
│   └── valueObject             # Value objects without identification key
├── features/                   # Use cases
├── hooks/                      # Custom React hooks
├── stores/                     # State management with Zustand
├── test/                       # Test configurations
├── utils/                      # Utility functions
```

---

## Technical Decisions

1. **Expo Prebuild:**

   - Chosen for its balance of managed workflow simplicity and the flexibility to include custom native code when necessary.

2. **Expo router:**

   - Used for seamless navigation between screens with support for stacks, tabs, and deep linking, enabling a better navigation experience.

3. **Zustand:**

   - Zustand was selected for its lightweight yet powerful approach to managing predictable and scalable application state.

4. **TypeScript:**

   - Enforced static typing across the project to enhance developer experience and minimize runtime errors.

5. **Testing Framework:**

   - Jest and Testing Library were included to provide robust unit and integration test coverage, ensuring code reliability and maintainability.

6. **Styling:**
   - React StyleSheets were used to maximize performance by reducing the number of components in the render tree and optimizing rendering.
