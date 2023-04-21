import { PropsWithChildren } from "react";

type AuthLayoutProps = PropsWithChildren<{}>;

export default ({ children, ...rest }: AuthLayoutProps) => {
  return <>{children}</>;
};
