import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router";
import routeConfig from "../lib/MainNavigation.json";
import { NotFound } from "@/components/ui/not-found";
import { SkeletonCard } from "@/util/Loading";
// Lazy load components
const componentsMap = {
  HomeComponent: lazy(() => import("../pages/Home/HomeComponent")),
  PartRiskManagerComponent: lazy(() =>
    import("../pages/PageRisk/PartRiskMain")
  ),
  MyDataComponent: lazy(() =>
    import("../pages/PageRisk/SubPages/MyData/MyDataComponent")
  ),
};

// Recursive route creation
const createRoutes = (routes) =>
  routes.map((route) => {
    const Componenet = componentsMap[route.component];

    return (
      <Route key={route.path} path={route.path} element={<Componenet />}>
        {route.subPaths && route.subPaths.length > 0
          ? createRoutes(route.subPaths)
          : null}
      </Route>
    );
  });

function AppRouter() {
  return (
    <>
      <Suspense fallback={<SkeletonCard />}>
        <Routes>
          {createRoutes(routeConfig)}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default AppRouter;
