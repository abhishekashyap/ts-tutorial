import { Navbar } from "@mantine/core";

import { useState } from "react";
import { NavLink } from "./components/NavLink";
import { useNavbarStyles } from "./useNavbarStyles";
import { NAV_ITEM_LIST } from "./constants";

export function NavbarJS() {
  const { classes } = useNavbarStyles();
  const [active, setActive] = useState("Billing");

  const handleLinkClick = (event, label) => {
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
