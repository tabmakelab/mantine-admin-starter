import AuthLayout from "../shared/layouts/AuthLayout";
import { RouteObjectWithMeta } from "../types/route-object-extra";
import LoginView from "../views/Auth/SignIn";
import SignUpView from "../views/Auth/SignUp";
import dashViews from '../views/Dashboard'
export const dashRoutes: RouteObjectWithMeta[] = [
  {
    path: "/dashboard/stats",
    element: (
      <AuthLayout>
        <dashViews.DashStatsView />
      </AuthLayout>
    ),
  },
  {
    path: "/dasboard/workbench",
    element: (
      <AuthLayout>
        <dashViews.DashWorkbenchView />
      </AuthLayout>
    ),
  },
];

 
