import { createBrowserRouter } from "react-router-dom";
import Suspense from "@/components/wrapper/SuspenseWrapper";
import React from "react";

const RootLayout = React.lazy(() => import("@/app/layout"));

const NotFound = React.lazy(() => import("@/app/NotFound/layout"));
const HomePage = React.lazy(() => import("@/app/Home/page"));
const AboutPage = React.lazy(() => import("@/app/About/page"));
const ContactPage = React.lazy(() => import("@/app/Contact/page"));
const NotFoundPage = React.lazy(() => import("@/app/NotFound/Page"));

const routes = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: "about",
        element: (
          <Suspense>
            <AboutPage />
          </Suspense>
        ),
      },
      {
        path: "contact",
        element: (
          <Suspense>
            <ContactPage />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "*",
    element: (
      <Suspense>
        <NotFound />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense>
            <NotFoundPage />
          </Suspense>
        ),
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
