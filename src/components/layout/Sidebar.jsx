import { navigations } from "@/lib/utils/Constants";
import { useApp } from "@/lib/context/AppContext";
import Container from "@components/wrapper/Container";
import { Link, NavLink } from "react-router-dom";
import React from "react";

import Icon from "../ui/Icon";
import Logo from "@/assets/Logo";

const Sidebar = () => {
  const { isSidebarOpen, setIsSidebarOpen, screenSize } = useApp();

  const handleSidebarToggle = React.useCallback(() => {
    if (screenSize !== "screenXs") return;
    setIsSidebarOpen(false);
  }, [screenSize, setIsSidebarOpen]);

  return (
    <Container
      className={`flex-col max-sm:absolute top-0 left-0 h-full min-w-[250px] bg-primary p-0 z-100 transition-transform duration-300 ease-in-out shadow-md border-r border-border
        ${isSidebarOpen ? "translate-x-0" : "translate-x-[-250px]"} `}
    >
      <section className="flex items-center justify-between h-[10vh] shadow-md p-2 border-b border-border">
        <Logo />
        {screenSize === "screenXs" ? (
          <button
            type="button"
            onClick={handleSidebarToggle}
            className="max-sm:block"
          >
            <Icon name="X" size="20" />
          </button>
        ) : null}
      </section>
      <section className="flex flex-col mt-4">
        {navigations.map((nav) => (
          <NavLink
            to={nav.path}
            key={nav.code}
            onClick={handleSidebarToggle}
            className={({ isActive }) =>
              `transition-colors p-2 duration-200 ${
                isActive
                  ? "text-accent-foreground bg-accent"
                  : "text-primary-foreground bg-primary no-underline"
              }`
            }
          >
            <Container className={"p-0 gap-2 items-center"}>
              <Icon
                name={nav.logoName}
                size={screenSize === "screenXs" ? 24 : 18}
              />
              <p className="max-sm:text-xl">
                {nav.label}
              </p>
            </Container>
          </NavLink>
        ))}
      </section>
    </Container>
  );
};

export default React.memo(Sidebar);
