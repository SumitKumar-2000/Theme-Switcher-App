import { navigations } from "@/lib/utils/Constants";
import { useApp } from "@/lib/context/AppContext";
import Container from "@components/wrapper/Container";
import { Link } from "react-router-dom";
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
      className={`flex-col max-sm:absolute top-0 left-0 h-full min-w-[250px] bg-primary-foreground p-0 z-100 transition-transform duration-300 ease-in-out shadow-md
        ${isSidebarOpen ? "translate-x-0" : "translate-x-[-250px]"} `}
    >
      <section className="flex items-center justify-between h-[10vh] shadow-md p-2">
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
      <section className="flex flex-col gap-4 mt-4 p-2">
        {navigations.map((nav) => (
          <Link
            to={nav.path}
            key={nav.code}
            onClick={handleSidebarToggle}
          >
            <Container className={"p-0 gap-2 items-center"}>
              <Icon
                name={nav.logoName}
                size={screenSize === "screenXs" ? 24 : 18}
              />
              <p className="max-sm:text-xl text-primary-foreground">{nav.label}</p>
            </Container>
          </Link>
        ))}
      </section>
    </Container>
  );
};

export default React.memo(Sidebar);
