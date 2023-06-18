import { TablerIconsProps } from "@tabler/icons-react";
import { MouseEvent } from "react";

type NavItem = {
  link: string;
  label: string;
  icon: (props: TablerIconsProps) => JSX.Element;
};

export type NavLinkProps = {
  item: NavItem;
  isActive: boolean;
  onClick: (event: MouseEvent<HTMLAnchorElement>, label: string) => void;
};
