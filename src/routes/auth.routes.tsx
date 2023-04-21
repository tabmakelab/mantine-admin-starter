import AuthLayout from "../shared/layouts/AuthLayout";
import { RouteObjectWithMeta } from "../types/route-object-extra";
import LoginView from "../views/Auth/SignIn";
import SignUpView from "../views/Auth/SignUp";

export const authRoutes: RouteObjectWithMeta[] = [
  {
    path: "/sign-in",
    element: (
      <AuthLayout>
        <LoginView />
      </AuthLayout>
    ),
  },
  {
    path: "/sign-up",
    element: (
      <AuthLayout>
        <SignUpView />
      </AuthLayout>
    ),
  },
];

 
