import React from "react";
import Container from "./Container";

export default function Suspense({ children }) {
  return (
    <React.Suspense fallback={<Container className="flex justify-center items-center">Loading...</Container>}>{children}</React.Suspense>
  );
}