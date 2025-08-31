import "./globals.css";
import ThemeProvider, { ROBOTO_FONT } from "./_layout/ThemeProvider";
import { Metadata } from "next";
import { APP_NAME } from "./constants";

export const metadata: Metadata = {
  title: `${APP_NAME}`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-us">
      <body className={ROBOTO_FONT.variable}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
