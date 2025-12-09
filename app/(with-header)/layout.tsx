import Navbar from "../components/ChallengeContent/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export default function WithHeaderLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-full bg-white">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
