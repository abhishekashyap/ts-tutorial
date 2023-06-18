import { useNavLinkStyles } from "./useNavLinkStyles";

export const NavLink = ({ item, isActive, onClick }) => {
  const { classes, cx } = useNavLinkStyles();
  return (
    <a
      className={cx(classes.link, {
        [classes.linkActive]: isActive,
      })}
      href={item.link}
      key={item.label}
      onClick={(e) => onClick(e, item.label)}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  );
};
