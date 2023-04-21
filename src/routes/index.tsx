import { Navigate } from "react-router-dom";
import { RouteObjectWithMeta } from "../types/route-object-extra";
import { authRoutes } from "./auth.routes";
import { dashRoutes } from "./dashboard.routes";

const routes: RouteObjectWithMeta[] = [
  {
    path: "/",
    element: <Navigate to={"/dashboard/stats"} />,
  },
  ...authRoutes,
  ...dashRoutes,
];
export default routes;
