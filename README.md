# 🎨 Multi-Theme Switcher App

This is a React-based web application that allows users to switch between three distinct UI themes. Each theme changes not only the colors but also the font styles, layout structure, spacing, and overall component design — without relying on external UI libraries like DaisyUI, Material UI, or Ant Design.

## 🚀 Features

-  **Multi-page app** with routing (Home, About, Contact)
-  **3 complete themes** with:
  - Custom colors
  - Unique layouts (e.g., sidebar, grid)
  - Fonts: Inter, Merriweather, Pacifico
  - Spacing and structural changes
-  **Persistent theme** using localStorage
-  **React Context API** for global theme state
-  **Responsive design** (mobile-first with Tailwind CSS)
-  **Dynamic layouts** rendered per theme
-  **Animations** while switching themes
-  Optional API call to [Fake Store API](https://fakestoreapi.com/products)


## 📁 Project Structure

```
eslint.config.js
index.html
jsconfig.json
package.json
vite.config.js
public/
  vite.svg
src/
  index.css
  main.jsx
  app/
    layout.jsx
    Home/
      layout.jsx
      page.jsx
    About/
      layout.jsx
      page.jsx
    Contact/
      layout.jsx
      page.jsx
    NotFound/
      layout.jsx
      Page.jsx
  assets/
    react.svg
  components/
    layout/
      Footer.jsx
      Navbar.jsx
      Sidebar.jsx
    ui/
    wrapper/
      PageWrapper.jsx
      SuspenseWrapper.jsx
  lib/
    context/
    hooks/
    routes/
      AppRoutes.jsx
    utils/
      Axios.js
      Cn.js
  styles/
    globals.css
```

## 🖥️ Tech Stack

- React (with Hooks)
- Tailwind CSS (with custom CSS variables)
- React Router DOM
- Google Fonts
- Fake Store API
- No UI libraries (100% custom)
