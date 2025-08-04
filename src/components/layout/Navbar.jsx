import React from "react";
import Dropdown from "@components/ui/dropdown/custom-dropdown/Dropdown";
import { useApp } from "@/lib/context/AppContext";
import Icon from "@components/ui/Icon";
import Container from "@components/wrapper/Container";
import { themes } from "@/lib/utils/Constants";

const Navbar = () => {
  const { toggleSidebar, screenSize, setTheme } = useApp();

  return (
    <nav className="h-[10vh] flex items-center justify-between pr-2 bg-primary w-full shadow-md border-b border-border">
      <Container>
        {screenSize === "screenXs" ? (
          <button
            type="button"
            onClick={toggleSidebar}
            className="max-sm:block"
          >
            <Icon name="AlignJustify" size="20" />
          </button>
        ) : null}
      </Container>

      <Container>
        <Dropdown activeValue={"Default"}>
          <Dropdown.Toggle>
            <div className="flex items-center gap-1">
              <div className="size-2 bg-accent rounded-full"></div>
              <div className="size-2 bg-accent-foreground rounded-full"></div>
            </div>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {themes.map((theme) => (
              <Dropdown.Item
                value={theme.label}
                action={() => setTheme(theme.code)}
              >
                {theme.label}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </nav>
  );
};

export default React.memo(Navbar);
