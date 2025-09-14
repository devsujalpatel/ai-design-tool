"use client";

import * as React from "react";
import { ThemeProvider as NextTHemeProvider } from "next-themes";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextTHemeProvider>) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  return <NextTHemeProvider {...props}>{children}</NextTHemeProvider>;
}
