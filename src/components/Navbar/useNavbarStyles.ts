/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createStyles } from "@mantine/core";

export const useNavbarStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.fn.variant({
      variant: "filled",
      color: theme.primaryColor,
    }).background,
  },
}));
