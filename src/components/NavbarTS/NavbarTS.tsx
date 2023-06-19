import { Navbar } from "@mantine/core";
import {
  Icon2fa,
  IconBellRinging,
  IconDatabaseImport,
  IconFingerprint,
  IconKey,
  IconReceipt2,
  IconSettings,
} from "@tabler/icons-react";
import { MouseEvent, useState } from "react";
import { useNavbarStyles } from "./useNavbarStyles";
import { NavLink } from "./components/NavLink";
import { NAV_ITEM_LIST } from "./constants/navItemList";

export function NavbarTS() {
  const { classes } = useNavbarStyles();
  const [active, setActive] = useState("Billing");

  const handleLinkClick = (
    event: MouseEvent<HTMLAnchorElement>,
    label: string
  ) => {
    event.preventDefault();
    setActive(label);
  };

  return (
    <Navbar height={700} width={{ sm: 300 }} p="md" className={classes.navbar}>
      <Navbar.Section grow>
        {NAV_ITEM_LIST.map((item) => (
          <NavLink
            key={item.label}
            item={item}
            isActive={active === item.label}
            onClick={handleLinkClick}
          />
        ))}
      </Navbar.Section>
    </Navbar>
  );
}
