# ⚛️ Portfolio Website

## Project Overview

This is a personal portfolio website built as a simple, fast, and responsive React application. Its primary purpose is to showcase my projects using a clean, component-based structure. Project data is managed locally, and the UI is styled entirely with Tailwind CSS for rapid, utility-first development.

### Key Features

- **Component-Based:** Structured with reusable React components for scalability.
- **Project Display:** Dynamically renders project cards, including images, descriptions, and links (GitHub and Live Demo).
- **Responsive Design:** Built with Tailwind CSS utilities to ensure a great experience on all screen sizes.
- **External Routing:** Uses anchor tags (`<a>`) with event handling to correctly link to external GitHub repositories and live demos while preventing internal `react-router-dom` navigation conflicts.

---

## Tech Stack

This project is built using the following technologies:

| Category     | Technology           | Description                                                                |
| :----------- | :------------------- | :------------------------------------------------------------------------- |
| **Frontend** | **React**            | The core library for building the user interface.                          |
| **Language** | **TypeScript**       | Adds strong typing for improved code quality and maintainability.          |
| **Styling**  | **Tailwind CSS**     | A utility-first CSS framework for fast, consistent styling.                |
| **Routing**  | **React Router DOM** | Used for navigation between different pages/views (e.g., `/projects/:id`). |
| **Icons**    | **Lucide React**     | Simple, clean icon library used for GitHub and external link icons.        |

---

## Getting Started

### Prerequisites

You need to have **Node.js** installed on your machine.

### Installation and Local Setup

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/alexraju01/react-portfolio.git
    cd [YOUR_PROJECT_FOLDER]
    ```

2.  **Install dependencies:**

    ```bash
    npm i
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

### Build for Production

To create a production-ready build of the application:

```bash
npm run build
```

### Live Demo

Project Preview: [react-portfolio](https://react-portfolio-hht7.onrender.com)
