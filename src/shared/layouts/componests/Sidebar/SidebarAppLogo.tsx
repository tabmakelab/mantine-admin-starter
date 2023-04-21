import { Group, Stack, Text } from "@mantine/core";
import { createStyles, MantineTheme, useMantineTheme } from "@mantine/styles";
import { IconCompass } from "@tabler/icons-react";
import useAppState from "../../../../store/app";
const useStyles = createStyles((theme: MantineTheme) => ({
  wrapper: {
    // background: theme.colorScheme == "dark" ? "#222" : "#fff",
    // color: theme.colorScheme == "dark" ? "#fff" : "#222",
    padding: "0 10px",
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    height: 96,
  },
  placeholder: {
    height: 96,
    display: "flex",
  },
  appName: {
    fontWeight: 700,
  },
  appSubName: {
    fontSize: 13,
  },
}));
const LOGO_SIZE = 48;
const LOGO_COLLAPSE_SIZE = 42;
export default () => {
  const { classes } = useStyles();
  const { sidebarCollapse } = useAppState();
  const { colors, primaryColor } = useMantineTheme();
  return (
    <>
      <Group
        noWrap={true}
        position={"center"}
        spacing={10}
        className={classes.wrapper}
      >
        <IconCompass
          size={sidebarCollapse == true ? LOGO_COLLAPSE_SIZE : LOGO_SIZE}
          color={colors[primaryColor][9]}
        />

        <Stack
          spacing={2}
          style={{
            display: sidebarCollapse == true ? "none" : "flex",
            opacity: sidebarCollapse == true ? "0" : "1",
            overflow: "hidden",
            transition: "all 0.3s",
          }}
        >
          <Text className={classes.appName}>Mantine Admin Starter</Text>
          <Text className={classes.appSubName}>Mantine Admin Sub Name</Text>
        </Stack>
      </Group>
      <div className={classes.placeholder} />
    </>
  );
};
