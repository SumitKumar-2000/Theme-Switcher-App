import { Cn } from "@lib/utils/Cn";

const Container = ({children, className}) => {
    return (
      <div className={Cn("flex", className)}>
        {children}
      </div>
    );
  };
  
  export default Container;
  