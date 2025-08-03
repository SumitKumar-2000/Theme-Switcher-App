import React from "react";
import Dropdown from "@components/ui/dropdown/custom-dropdown/Dropdown";
import { useApp } from "@/lib/context/AppContext";
import Icon from "@components/ui/Icon";
import Container from "@components/wrapper/Container";

const Navbar = () => {
  const { toggleSidebar, screenSize } = useApp();

  return (
    <nav className="h-[10vh] flex items-center justify-between pr-2 bg-white w-full shadow-md">
      <Container>
        {screenSize === "screenXs" ? (
          <button type="button" onClick={toggleSidebar} className="max-sm:block">
            <Icon name="AlignJustify" size="20" />
          </button>
        ) : null}
      </Container>

      <Container>
        <Dropdown activeValue={"Light"}>
          <Dropdown.Toggle>Theme</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item value="Light">Light</Dropdown.Item>
            <Dropdown.Item value="Dark">Dark</Dropdown.Item>
            <Dropdown.Item value="Corporate">Color</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </nav>
  );
};

export default React.memo(Navbar);
