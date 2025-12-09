import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "MyFinishLine",
  description: "Combine sports and pleasure",
};

export default function WithoutHeaderLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="h-full bg-white">{children}</div>;
}
