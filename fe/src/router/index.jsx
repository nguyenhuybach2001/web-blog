import React from "react";
import { ROUTE } from "../constants/route";
import { Route, Routes } from "react-router-dom";
import BaseLayout from "../components/Baselayout";
import AdminLogin from "../pages/AdminLogin";
import PrivateRouter from "../components/PrivateRoute";
import PublicRouter from "../components/PublicRoute";
import Dashboard from "../pages/Dashboard";
import BlogPage from "../pages/Blog";
import AboutPage from "../pages/About";
import NewsletterPage from "../pages/Newsletter";
import DetailBlog from "../pages/Blog/DetailBlog";
import NotFound from "../pages/NotFound";

export default function AppRouter() {
  const routes = [
    {
      path: ROUTE.ADMIN_LOGIN,
      title: "Admin Login",
      element: AdminLogin,
      isPrivate: false,
    },
    {
      path: ROUTE.BLOG,
      title: "Blog Page",
      element: BlogPage,
      isPrivate: false,
    },
    {
      path: ROUTE.ABOUT,
      title: "Giới thiệu",
      element: AboutPage,
      isPrivate: false,
    },
    {
      path: ROUTE.NEWSLETTER,
      title: "Blog mới nhất",
      element: NewsletterPage,
      isPrivate: false,
    },
    {
      path: ROUTE.DASHBOARD,
      title: "Dashboard",
      element: Dashboard,
      isPrivate: true,
    },
    {
      path: ROUTE.DETAIL_BLOG,
      title: "Detail Blog",
      element: DetailBlog,
      isPrivate: false,
    },
    {
      path: "*",
      title: "Not Found",
      element: NotFound,
      isPrivate: false,
    },
  ];
  return (
    <Routes>
      {routes.map((route) => {
        const { element: Component } = route;
        const RouteWrapper = route.isPrivate ? PrivateRouter : PublicRouter;
        return (
          <Route
            key={route.path}
            {...route}
            element={
              <RouteWrapper title={route.title}>
                <Component />
              </RouteWrapper>
            }
          ></Route>
        );
      })}
    </Routes>
  );
}
