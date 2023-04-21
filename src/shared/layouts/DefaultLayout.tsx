import { PropsWithChildren } from "react";
import { AppShell, Navbar, Header, createStyles } from "@mantine/core";
import useAppState from "../../store/app";
import Sidebar from "./componests/Sidebar";
import AppHeader from "./componests/AppHeader";

type DefaultLayoutProps = PropsWithChildren<{}>;
const useStyles = createStyles(() => ({
  transition: {
    // "-moz-transition": "width .3s",
    // "-ms-transition": "width .3s",
    // "-o-transition": "width .3s",
    // "-webkit-transition": "width .3s",
    transition: "width .3s",
  },
}));
export default ({ children, ...rest }: DefaultLayoutProps) => {
  const { classes } = useStyles();
  const { toggleSidebarCollapse, sidebarCollapse, sidebarWidth } =
    useAppState();
  return (
    <>
      <AppShell
        padding="md"
        navbar={
          <Navbar
            width={{ base: sidebarWidth }}
            top={0}
            height={"100%"}
            className={classes.transition}
          >
            <Sidebar />
          </Navbar>
        }
        header={
          <Header height={60} p="xs" ml={sidebarWidth}>
            <AppHeader />
          </Header>
        }
        styles={(theme) => ({
          main: {
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        })}
      >
        {children}
      </AppShell>
    </>
  );
};
