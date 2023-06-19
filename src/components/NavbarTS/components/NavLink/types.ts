import { TablerIconsProps } from "@tabler/icons-react";
import { MouseEvent } from "react";
import { NavItemLabel } from "../../constants/navItemList";

type NavItem = {
  link: string;
  label: NavItemLabel;
  icon: (props: TablerIconsProps) => JSX.Element;
};

export type NavLinkProps = {
  item: NavItem;
  isActive: boolean;
  onClick: (event: MouseEvent<HTMLAnchorElement>, label: NavItemLabel) => void;
};
