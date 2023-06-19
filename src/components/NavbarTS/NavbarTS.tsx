import { Navbar } from "@mantine/core";
import { MouseEvent, useState } from "react";
import { NavLink } from "./components/NavLink";
import { NAV_ITEM_LIST, NavItemLabel } from "./constants/navItemList";
import { useNavbarStyles } from "./useNavbarStyles";

export function NavbarTS() {
  const { classes } = useNavbarStyles();
  const [active, setActive] = useState("Billing");

  const handleLinkClick = (
    event: MouseEvent<HTMLAnchorElement>,
    label: NavItemLabel
  ) => {
    event.preventDefault();

    if (label === "Authentication") {
      console.log("Emitting gtag event...");
      console.log("user logged in");
    }

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
