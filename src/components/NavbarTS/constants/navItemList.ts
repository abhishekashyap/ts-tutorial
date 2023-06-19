import {
  Icon2fa,
  IconBellRinging,
  IconDatabaseImport,
  IconFingerprint,
  IconKey,
  IconReceipt2,
  IconSettings,
  TablerIconsProps,
} from "@tabler/icons-react";
import { NAV_ITEMS } from "./navItems";

export type NavItemLabel = (typeof NAV_ITEMS)[number];

type NavItem = {
  link: string;
  label: NavItemLabel;
  icon: (props: TablerIconsProps) => JSX.Element;
};

export const NAV_ITEM_LIST: NavItem[] = [
  { link: "", label: "Notifications", icon: IconBellRinging },
  { link: "", label: "Billing", icon: IconReceipt2 },
  { link: "", label: "Security", icon: IconFingerprint },
  { link: "", label: "SSH Keys", icon: IconKey },
  { link: "", label: "Databases", icon: IconDatabaseImport },
  { link: "", label: "Authentication", icon: Icon2fa },
  { link: "", label: "Other Settings", icon: IconSettings },
];
