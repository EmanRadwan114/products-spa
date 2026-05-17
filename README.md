# Products SPA

A Single Page Application for displaying and filtering products, built with React, TypeScript, Tailwind CSS and Vite.

## 🚀 How to Install and Run the App

1. **Clone the repository** (if you haven't already):

   ```bash
   git clone <repository-url>
   cd products-SPA
   ```

2. **Install dependencies**:
   Make sure you have Node.js installed, then run:

   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   This will start the application locally, typically at `http://localhost:5173`. Open this URL in your browser to view the app.

## 🛠️ Tools & Libraries Used

- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **Axios**
- **React Router v7**
- **Lucide React**
- **React Toastify**
- **Next Themes**

## 🧠 Challenges and Solutions

### State Management & Prop Drilling

**The Challenge:**
Passing state (e.g., search terms, categories) down through multiple component layers (prop drilling) became annoying as the application grew.

**The Solution:**
I used the **Context API** to create a global state, providing direct access to product data and filters without intermediate prop passing.

**Future Improvements:**
If expanding this project, I would adopt:

- **Zustand**: For UI state management (search query, filters) due to its minimal boilerplate and efficiency.
- **React Query**: For server-side state and caching.
