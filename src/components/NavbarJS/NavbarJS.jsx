import { Navbar } from "@mantine/core";

import { MouseEvent, useState } from "react";
import { useNavbarStyles } from "./useNavbarStyles";
import { NavLink } from "./components/NavLink";


export function NavbarJS() {
  const { classes } = useNavbarStyles();
  const [active, setActive] = useState("Billing");

  const handleLinkClick = (event, label) => {
    event.preventDefault();
    setActive(label);
  };

  return (
    <Navbar height={700} width={{ sm: 300 }} p="md" className={classes.navbar}>
      <Navbar.Section grow>
        {data.map((item) => (
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
