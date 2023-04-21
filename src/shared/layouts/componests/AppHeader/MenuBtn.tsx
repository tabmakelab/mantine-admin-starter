import { Box, Stack } from "@mantine/core";
import { createStyles, MantineTheme } from "@mantine/styles";
import useAppState from "../../../../store/app";

const MenuFold = ({ colorScheme }: any) => {
  return (
    <>
      <svg
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="6506"
        width="22"
        height="22"
      >
        <path
          fill={colorScheme == "dark" ? "#ccc" : "#222"}
          d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8z m-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56z m504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z m0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM115.4 518.9L271.7 642c5.8 4.6 14.4 0.5 14.4-6.9V388.9c0-7.4-8.5-11.5-14.4-6.9L115.4 505.1a8.74 8.74 0 0 0 0 13.8z"
          p-id="6507"
        ></path>
      </svg>
    </>
  );
};

const useStyle = createStyles((theme: MantineTheme) => ({
  folded: {
    transition: "all 0.3s",
  },
  opened: {
    transform: "rotate(180deg)",
    transition: "all 0.3s",
    transformOrigin: "center center",
  },
}));

export default () => {
  const { classes } = useStyle();
  const { sidebarCollapse, toggleSidebarCollapse, colorScheme } = useAppState();
  return (
    <Stack
      align={"flex-start"}
      style={{ width: 22, height: 22 }}
      className={sidebarCollapse ? classes.opened : classes.folded}
      onClick={() => {
        toggleSidebarCollapse();
      }}
    >
      <MenuFold colorScheme={colorScheme} />
    </Stack>
  );
};
