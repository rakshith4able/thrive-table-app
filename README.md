# Thrive Career Wellness – Frontend Assignment

**Company:** Thrive Career Wellness Inc.  
**Role:** Front End Developer (React)  
**Submitted by:** Rakshith

## Live Demo

**Live Application:** [https://rakshith4able.github.io/thrive-table-app](https://rakshith4able.github.io/thrive-table-app)
**Github Repository:** [https://github.com/rakshith4able/thrive-table-app](https://github.com/rakshith4able/thrive-table-app)

## Project Overview

This is a React table application built as a take-home assignment for Thrive Career Wellness. The application demonstrates advanced table functionality including virtualization, sorting, column reordering, and data management with over 500 rows of user data.

### Key Features

- **Virtual Scrolling** - Efficiently renders large datasets (500+ rows) using TanStack Virtual
- **Interactive Table** - Built with TanStack React Table for robust table functionality
- **Column Sorting** - Click any column header to sort data (ascending/descending)
- **Drag & Drop Columns** - Reorder columns by dragging column headers
- **Data Persistence** - User data stored in localStorage with generated fake data
- **Responsive Design** - Mobile-friendly interface with Tailwind CSS
- **Performance Optimized** - Only renders visible rows for smooth scrolling

### Tech Stack

- **React 19** - Latest React with TypeScript
- **TanStack React Table** - Advanced table functionality
- **TanStack React Virtual** - Virtualization for performance
- **Tailwind CSS v4** - Modern utility-first styling
- **Faker.js** - Realistic fake data generation
- **Vite** - Fast development and build tooling
- **TypeScript** - Type safety and better developer experience

## Setup Instructions

### Prerequisites

- **Node.js** (version 18 or higher)
- **npm** or **yarn** package manager

### Installation & Development

1. **Download & Extract**

   ```bash
   # Extract the provided ZIP file to your desired location
   cd thrive-table-app
   ```

   or

   \*\*Clone the repository""

   ```
   # Clone the repository
   git clone https://github.com/rakshith4able/thrive-table-app.git
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Start Development Server**

   ```bash
   npm run dev
   ```

4. **Open Application**
   ```
   Open your browser and navigate to: http://localhost:3000
   ```

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint

# Deploy to GitHub Pages
npm run deploy
```

## Table Features

### Core Functionality

- **ID, First Name, Last Name, Email, City, Registered Date** - Basic user data columns
- **Full Name** - Computed column combining first and last name (not persisted)
- **DSR (Days Since Registered)** - Calculated column showing days since registration

### Advanced Features

- **Virtualization** - Only renders approximately 10-15 visible rows at a time for optimal performance
- **Infinite Scroll** - Smooth scrolling through 500+ rows without performance loss
- **Column Reordering** - Drag column headers to reorder them
- **Multi-directional Sorting** - Click headers to cycle through: unsorted → ascending → descending
- **Responsive Layout** - Adapts to mobile and desktop screens
- **Loading States** - Loading indicators while data fetches
- **Error Handling** - Graceful error states with retry functionality

## Architecture

### Component Structure

```
src/
├── api/                 # API layer and data fetching
├── components/
│   ├── common/          # Reusable UI components
│   ├── table/           # Table-specific components
│   ├── users/           # User-related components
│   └── virtualized/     # Virtualization components
├── config/              # Configuration files
├── constants/           # Application constants
├── hooks/               # Custom React hooks
├── pages/               # Page components
├── styles/              # CSS and styling files
├── types/               # TypeScript definitions
└── utils/               # Utility functions
```

### Key Design Decisions

- **Separation of Concerns** - Clean separation between data, UI, and business logic
- **Custom Hooks** - Reusable logic for table configuration and virtualization
- **TypeScript** - Full type safety throughout the application
- **Performance First** - Virtualization and optimized re-renders
- **Responsive Design** - Mobile-first approach with Tailwind CSS

## Styling

The application uses **Tailwind CSS v4** for styling with:

- Responsive breakpoints (sm, md, lg)
- Consistent spacing and typography
- Hover states and interactive feedback
- Loading and error state styling

## Data Management

- **Fake Data Generation** - 500 users generated with Faker.js
- **localStorage Persistence** - Data persists between sessions
- **Seeded Generation** - Consistent fake data across sessions
- **Reset Functionality** - Button to clear data and regenerate

## Deployment

The application is deployed using GitHub Pages

---

**Built for Thrive Career Wellness**
