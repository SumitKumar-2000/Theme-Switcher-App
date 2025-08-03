import { Cn } from "@lib/utils/Cn";

const Container = ({ children, className }) => {
  return <div className={Cn("flex p-2", className)}>{children}</div>;
};

export default Container;
