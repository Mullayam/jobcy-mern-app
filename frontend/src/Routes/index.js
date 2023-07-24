import React, { Suspense } from "react";
import { userRoutes, authRoutes } from "./allRoutes";
import { Route, Routes } from "react-router-dom";

/* Layout */
const CommonLayout = React.lazy(() => import('../Layout/CommonLayout/index'))
const AuthLayout = React.lazy(() => import('../Layout/AuthLayout'))


const Loader = () => {
  return (
    <div id="preloader">
      <div id="status">
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

const Index = () => {
  return (
    <React.Fragment>
      <Suspense fallback={Loader()}>
      <Routes>
        <Route>
          {authRoutes.map((route, idx) => (
            <Route
              path={route.path}
              element={<AuthLayout>{route.component}</AuthLayout>}
              key={idx}
              exact={true}
            />
          ))}
        </Route>

        <Route>
          {userRoutes.map((route, idx) => (
            <Route
              path={route.path}
              element={<CommonLayout>{route.component}</CommonLayout>}
              key={idx}
              exact={true}
            />
          ))}
        </Route>
      </Routes>
      </Suspense>
    </React.Fragment>
  );
};

export default Index;
