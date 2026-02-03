import type { ReactNode } from "react";
import "./globals.css";
import Providers from "./providers";

export const metadata = {
  title: "Lucky10",
  description: "Lucky10 landing page",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
