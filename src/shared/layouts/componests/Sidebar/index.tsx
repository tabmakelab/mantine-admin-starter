import { Box, createStyles, MantineTheme, Navbar } from "@mantine/core";
import SidebarMenuNested from "./Nested/SidebarMenuNested";
import SidebarAppLogo from "./SidebarAppLogo";
import SidebarMenu from "./SidebarMenu";
const usestyles = createStyles((theme: MantineTheme) => ({
  appName: {
    boxSizing: "border-box",
    position:'relative'
  },
}));
export default () => {
  const { classes } = usestyles();
  return (
    <Box>
      <Navbar.Section className={classes.appName} >
        <SidebarAppLogo />
      </Navbar.Section>
      <SidebarMenuNested />
    </Box>
  );
};
