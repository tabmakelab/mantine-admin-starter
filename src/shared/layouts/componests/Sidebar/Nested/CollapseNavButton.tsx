import { Box, Group, Menu, ThemeIcon, UnstyledButton } from "@mantine/core";
import { ReactElement, ReactNode, forwardRef } from "react";

export interface CollapseNavItemProps
  extends React.ComponentPropsWithoutRef<"button"> {
  icon: any
  buttonStyle: any;
}

export interface SidebarCollapseButonProps {
  label: string;
  icon:  React.FC<any>
  links: { label: string; link: string }[];
}

export const SidebarCollapseIcon = forwardRef<
  HTMLButtonElement,
  CollapseNavItemProps
>(({ icon: Icon, buttonStyle }: CollapseNavItemProps, ref) => {
  return (
    <UnstyledButton
      ref={ref}
      sx={(theme) => ({
        display: "block",
        width: "100%",
        padding: theme.spacing.md,
        color:
          theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,

        "&:hover": {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      <Group position="center" spacing={0}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ThemeIcon variant="light" size={30}>
            <Icon size="1.1rem" />
          </ThemeIcon>
        </Box>
      </Group>
    </UnstyledButton>
  );
});

export const SidebarCollapseButon = ({
  links,
  icon,
  label,
}: SidebarCollapseButonProps) => {
  const menuItems = (Array.isArray(links) ? links : []).map((link) => (
    <Menu.Item key={link.label} onClick={(event) => event.preventDefault()}>
      {link.label}
    </Menu.Item>
  ));
  return (
    <Menu position="right-start" shadow="md" width={160}>
      <Menu.Target>
        <SidebarCollapseIcon icon={icon} buttonStyle={undefined} />
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Label>{label}</Menu.Label>
        {menuItems}
      </Menu.Dropdown>
    </Menu>
  );
};
