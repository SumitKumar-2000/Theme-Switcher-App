import React from "react";

const AppContext = React.createContext();

function getWidthSize(width) {
  if (width >= 1536) return "screen2xl";
  if (width >= 1280) return "screenXl";
  if (width >= 1024) return "screenLg";
  if (width >= 768) return "screenMd";
  if (width >= 640) return "screenSm";
  return "screenXs";
}

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const [theme, setTheme] = React.useState(localStorage.getItem('theme') || 'default');
  const [screenSize, setScreenSize] = React.useState(
    getWidthSize(window.innerWidth)
  );

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  React.useEffect(() => {
    const handleResize = () => {
      const newSize = getWidthSize(window.innerWidth);
      setScreenSize(newSize);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  React.useEffect(() => {
    if (screenSize === "screenXs") {
      setIsSidebarOpen(false);
    } else {
      setIsSidebarOpen(true);
    }
  }, [screenSize]);

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const value = {
    theme,
    setTheme,
    screenSize,
    isSidebarOpen,
    toggleSidebar,
    setIsSidebarOpen,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;

// eslint-disable-next-line react-refresh/only-export-components
export const useApp = () => React.useContext(AppContext);
