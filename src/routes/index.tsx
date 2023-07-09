import { Routes, Route } from "react-router-dom";

import Layout from "../layouts";

import PrivateRoute from "./privateRoute";

import { BaseComponent } from "../constants/BaseComponent";

import NotFound from "../component/NotFound";

const Pages = () => {
  return (
    <Routes>
      {BaseComponent.map(({ Component, path, useAuth }) =>
        useAuth ? (
          <>
            <Route
              path={path}
              element={
                <PrivateRoute>
                  <Layout label="Good evening">
                    <Component />
                  </Layout>
                </PrivateRoute>
              }
            />
            <Route
              path="*"
              element={
                <PrivateRoute>
                  <Layout label="Good evening">
                    <NotFound />
                  </Layout>
                </PrivateRoute>
              }
            />
          </>
        ) : (
          <>
            <Route path={path} element={<Component />} />

            <Route path="*" element={<NotFound />} />
          </>
        )
      )}
    </Routes>
  );
};

export default Pages;
