import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { MainNav } from "@/components/main-nav";
import { ThemeToggle } from "@/components/theme-toggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Playlist Manager",
  description: "Shift playlists and collaborate on new ones",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <div className="grainy-background fixed top-0 left-0 w-full h-full pointer-events-none z-[-1] opacity-5"></div>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <header className="border-b">
              <div className="container flex h-16 items-center justify-between">
                <ThemeToggle />
                <MainNav />
              </div>
            </header>
            <main className="main-body flex-1 container py-6 px-4 md:px-6">
              {children}
            </main>
            <footer className="border-t py-4">
              <div className="container text-center text-sm text-muted-foreground">
                © 2025 Playlist Manager. All rights reserved.
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
