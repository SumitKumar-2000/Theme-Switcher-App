import React from "react";
import clsx from "clsx";

const Button = ({ children, loading = false, className = "", ...props }) => {
  return (
    <button
      disabled={loading}
      className={clsx(
        "px-4 py-2 font-medium transition-all duration-200 flex items-center justify-center gap-2",
        "border",
        "disabled:opacity-60 disabled:cursor-not-allowed",
        className
      )}
      style={{
        backgroundColor: "var(--color-accent)",
        color: "var(--color-accent-foreground)",
        borderColor: "var(--color-border)",
        borderRadius: "var(--radius)",
      }}
      {...props}
    >
      {loading && (
        <svg
          className="animate-spin h-4 w-4 text-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8z"
          />
        </svg>
      )}
      {!loading && children}
    </button>
  );
};

export default React.memo(Button);
