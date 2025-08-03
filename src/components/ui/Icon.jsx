import * as Icons from "lucide-react";
import React from "react";

function AppIcon({ name, ...props }) {
  const LucideIcon = Icons[name.trim()];
  return LucideIcon ? <LucideIcon {...props} /> : null;
}

export default React.memo(AppIcon);
