// import { BiCaretRight } from "react-icons/bi";
import AppIcon from "@components/ui/Icon";
import { useDropdownCtx } from "./Dropdown";
import { Cn } from "@/lib/utils/Cn";

export function Toggle({ children = "", className = "" }) {
  const { toggleDropdown, showMenus, active } = useDropdownCtx();

  return (
    <button
      type="button"
      onClick={toggleDropdown}
      className={Cn(`dropdown-toggle gap-2`, className)}
    >

      {children}
      <p>{active}</p>
      <AppIcon
        size={15}
        name={"ChevronRight"}
        className={`transition-all duration-100 ease-in-out ${
          showMenus ? "rotate-90" : "rotate-0"
        }`}
      />
    </button>
  );
}

export function Menu({ children, className = "" }) {
  const { showMenus } = useDropdownCtx();

  if (!showMenus) return null;

  return (
    <div className={Cn(`dropdown-menu--container`, className)}>{children}</div>
  );
}

export function Item({ children, className = "", action, ...props }) {
  const { active, setActive } = useDropdownCtx();
  const isActive = props.value && active === props.value;

  const handleClick = () => {
    if (props.value) {
      setActive(props.value);
    }

    if (typeof action === "function") {
      action(props.value); 
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={Cn(
        className,
        "dropdown-menu--item",
        isActive ? "bg-accent text-accent-foreground" : "bg-transparent hover:bg-secondary text-primary-foreground"
      )}
      {...props}
    >
      {children}
    </button>
  );
}
