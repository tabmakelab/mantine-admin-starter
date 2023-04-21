import { forwardRef, useState } from "react";
import {
  Group,
  Box,
  Collapse,
  ThemeIcon,
  Text,
  UnstyledButton,
  createStyles,
  rem,
  Menu,
} from "@mantine/core";
import {
  IconCalendarStats,
  IconChevronLeft,
  IconChevronRight,
} from "@tabler/icons-react";
import { useLocation } from "react-router-dom";
import useAppState from "../../../../../store/app";
import   { SidebarCollapseIcon, SidebarCollapseButon } from "./CollapseNavButton";
import UserButton from "../../AppHeader/UserButton";

const useStyles = createStyles((theme) => ({
  control: {
    fontWeight: 500,
    display: "block",
    width: "100%",
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
    fontSize: theme.fontSizes.sm,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[7]
          : theme.colors.gray[0],
      color: theme.colorScheme === "dark" ? theme.white : theme.black,
    },
  },

  link: {
    fontWeight: 500,
    display: "block",
    textDecoration: "none",
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    paddingLeft: rem(31),
    marginLeft: rem(30),
    fontSize: theme.fontSizes.sm,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    // borderLeft: `${rem(1)} solid ${
    //   theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    // }`,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[7]
          : theme.colors.gray[0],
      color: theme.colorScheme === "dark" ? theme.white : theme.black,
    },
  },

  chevron: {
    transition: "transform 200ms ease",
  },
}));


 
interface LinksGroupProps {
  icon: React.FC<any>;
  label: string;
  initiallyOpened?: boolean;
  links?: { label: string; link: string }[];
}

export function LinksGroup({
  icon: Icon,
  label,
  initiallyOpened,
  links,
}: LinksGroupProps) {
  const { classes, theme } = useStyles();
  const hasLinks = Array.isArray(links);
  const loc = useLocation();
  const [opened, setOpened] = useState(initiallyOpened || false);
  const [isActive, setIsActive] = useState<Boolean>(false);
  const ChevronIcon = theme.dir === "ltr" ? IconChevronRight : IconChevronLeft;
  const items = (hasLinks ? links : []).map((link) => (
    <Text<"a">
      component="a"
      className={classes.link}
      href={link.link}
      key={link.label}
      onClick={(event) => event.preventDefault()}
    >
      {link.label}
    </Text>
  ));

  const menuItems = (hasLinks ? links : []).map((link) => (
    <Menu.Item key={link.label} onClick={(event) => event.preventDefault()}>
      {link.label}
    </Menu.Item>
  ));

  const { sidebarCollapse, sidebarWidth } = useAppState();
  const isActiveRoute = () => {};

  return (
    <>
      {/* not collapse */}
      {!sidebarCollapse && (
        <UnstyledButton
          onClick={() => setOpened((o) => !o)}
          className={classes.control}
        >
          <Group position="apart" spacing={0}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <ThemeIcon variant="light" size={30}>
                <Icon size="1.1rem" />
              </ThemeIcon>
              {!hasLinks && !sidebarCollapse && <Box ml="md">{label}</Box>}
              {!!hasLinks && !sidebarCollapse && <Box ml="md">{label}</Box>}
            </Box>
            {hasLinks && !sidebarCollapse && (
              <ChevronIcon
                className={classes.chevron}
                size="1rem"
                stroke={1.5}
                style={{
                  transform: opened
                    ? `rotate(${theme.dir === "rtl" ? -90 : 90}deg)`
                    : "none",
                }}
              />
            )}
          </Group>
        </UnstyledButton>
      )}
      {hasLinks && !sidebarCollapse ? (
        <Collapse in={opened}>{items}</Collapse>
      ) : null}

      {/* Collapse */}
      {sidebarCollapse && (
        <SidebarCollapseButon label={label} icon={Icon} links={links||[]} />
      )}
    </>
  );
}

const mockdata = {
  label: "Releases",
  icon: IconCalendarStats,
  links: [
    { label: "Upcoming releases", link: "/" },
    { label: "Previous releases", link: "/" },
    { label: "Releases schedule", link: "/" },
  ],
};

export default () => {
  return (
    <Box
      sx={(theme) => ({
        minHeight: rem(220),
        padding: theme.spacing.md,
        backgroundColor:
          theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white,
      })}
    >
      <LinksGroup {...mockdata} />
    </Box>
  );
};
