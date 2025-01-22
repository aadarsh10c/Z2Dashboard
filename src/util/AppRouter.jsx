import  { Suspense , lazy} from "react";
import {Routes, Route } from "react-router";
import routeConfig from "../lib/MainNavigation.json"

// Lazy load components
const componentsMap = {
  HomeComponent: lazy(() => import("../pages/HomeComponent")),
  PartRiskManagerComponent: lazy(() => import("../pages/PageRisk/PartRiskMain")),
  MyDataComponent: lazy(() => import("../pages/PageRisk/SubPages/MyData/MyDataComponent")),
  // BasicComponent: lazy(() => import("../pages/BasicComponent")),
  // StrategicSourcingComponent: lazy(() => import("../pages/StrategicSourcingComponent")),
  // EnvComplianceComponent: lazy(() => import("../pages/EnvComplianceComponent")),
  // MarketComponent: lazy(() => import("../pages/MarketComponent")),
  // OneRiskComponent: lazy(() => import("../pages/OneRiskComponent")),
  // AlertsComponent: lazy(() => import("../pages/AlertsComponent")),
  // SupplyChainWatchComponent: lazy(() => import("../pages/SupplyChainWatchComponent")),
  // SupplierInsightsComponent: lazy(() => import("../pages/SupplierInsightsComponent")),
};

// Recursive route creation
const createRoutes = (routes) =>
  routes.map((route) => 
  {
    const Componenet = componentsMap[route.component]

  return ( 
  <Route
      key={route.path}
      path={route.path}
      element={<Componenet />}
    >
      {route.subPaths && route.subPaths.length > 0
        ? createRoutes(route.subPaths)
        : null}
    </Route>)
  });

function  AppRouter(){
  // Routes configuration
  console.log(routeConfig)
  const routeComponent = createRoutes(routeConfig)
  console.log(routeComponent)
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>{createRoutes(routeConfig)}</Routes>
      </Suspense>
      </>
  );
};

export default AppRouter;
