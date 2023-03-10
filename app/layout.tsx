import "./globals.css";
import { Kumbh_Sans } from "next/font/google";
import NavBar from "@/components/NavBar";

export const metadata = {
  title: "Marvinel | Front-end Developer",
  description: "Generated by create next app",
};

const kumbhSans = Kumbh_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={kumbhSans.className + " " + "bg-dark"}>
        <nav>
          <NavBar />
        </nav>
        {children}
      </body>
    </html>
  );
}
