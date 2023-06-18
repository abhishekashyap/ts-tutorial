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

const data = [
  { link: "", label: "Notifications", icon: IconBellRinging },
  { link: "", label: "Billing", icon: IconReceipt2 },
  { link: "", label: "Security", icon: IconFingerprint },
  { link: "", label: "SSH Keys", icon: IconKey },
  { link: "", label: "Databases", icon: IconDatabaseImport },
  { link: "", label: "Authentication", icon: Icon2fa },
  { link: "", label: "Other Settings", icon: IconSettings },
];

export function NavbarSimpleColored() {
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
