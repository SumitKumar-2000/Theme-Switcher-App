/* eslint-disable react-refresh/only-export-components */
import React from "react";
import { Item, Menu, Toggle } from "./DropdownComponents";

const DropdownCtx = React.createContext(null);

export const useDropdownCtx = () => {
  const ctx = React.useContext(DropdownCtx);
  if (!ctx) throw new Error("Dropdown compound component must be within <Dropdown />");
  return ctx;
};

export default function Dropdown({ children, activeValue }) {
  const [showMenus, setShowMenus] = React.useState(false);
  const [active, setActive] = React.useState(activeValue || null);
  const dropdownRef = React.useRef(null);

  const toggleDropdown = React.useCallback(() => setShowMenus(prev => !prev), []);

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowMenus(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const value = {
    active,
    setActive,
    showMenus,
    activeValue,
    setShowMenus,
    toggleDropdown,
  };

  return (
    <DropdownCtx.Provider value={value}>
      <section ref={dropdownRef} className={"dropdown-container"}>
        {children}
      </section>
    </DropdownCtx.Provider>
  );
}

Dropdown.Toggle = Toggle;
Dropdown.Menu = Menu;
Dropdown.Item = Item;
