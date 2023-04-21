import { Box, Flex, Group, Stack } from "@mantine/core";
import ThemeButton from "../ThemeButton";
import MenuBtn from "./MenuBtn";
import UserButton from "./UserButton";

export default () => {
  return (
    <Stack justify={"center"} style={{ height: "100%" }}>
      <Group position="left" grow={true} align={"apart"}>
        <Flex align={"center"}>
          <MenuBtn />
        </Flex>
        <Flex justify={"flex-end"} align={"center"}>
          <Group position={"right"}>
            <ThemeButton /> <UserButton />
          </Group>
        </Flex>
      </Group>
    </Stack>
  );
};
