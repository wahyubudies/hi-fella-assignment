import "./globals.css";

import { Inter } from "next/font/google";
import { Container, Footer, Navigation, PromotionCard, SidebarMenu, WalletProfileCard, WhoToFollow } from "@/components/layout";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hi-Fella",
  description: "This is an assignment test from Hi-Fella",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}>
        <div className="flex flex-col h-screen">
          {/* Navigation */}
          <Navigation />

          <Container className="flex items-start !py-4">
            {/* Left Sidebar */}
            <aside className="w-[232px] lg:flex flex-col gap-4 shrink-0 p-4 hidden">
              <SidebarMenu />
              <PromotionCard />
              <WalletProfileCard />
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto p-4">
              {children}
            </main>

            {/* Right Sidebar */}
            <aside className="w-[320px] shrink-0 p-4 hidden xl:block">
              <WhoToFollow />
              <Footer />
            </aside>
          </Container>
        </div>
      </body>
    </html>
  );
}
