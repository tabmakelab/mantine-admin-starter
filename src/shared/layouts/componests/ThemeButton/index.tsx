import {
  Switch,
  Group,
  useMantineColorScheme,
  useMantineTheme,
  SegmentedControl,
  Center,
  Box,
  ActionIcon,
} from "@mantine/core";
import { IconSun, IconMoonStars, IconMoon } from "@tabler/icons-react";
import useAppState from "../../../../store/app";

export default () => {
  const { colorScheme, toggleColorScheme } = useAppState();
  const theme = useMantineTheme();
  return (
    <Group position="center">
        <ActionIcon
        onClick={() => toggleColorScheme()}
        size="lg"
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
          color: theme.colorScheme === 'dark' ? theme.colors.yellow[4] : theme.colors.blue[6],
        })}
      >
        {colorScheme === 'dark' ? <IconSun size="1.2rem" /> : <IconMoonStars size="1.2rem" />}
      </ActionIcon>
    </Group>
  );
};
