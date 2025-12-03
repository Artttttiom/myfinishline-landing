import Tabs from "@/app/components/Application/Profile/Tabs/Tabs";

const storeLinks = [
  {
    id: 1,
    name: "Booster",
    href: "/myfinishline/store/booster",
  },
  {
    id: 2,
    name: "My Challenges",
    href: "/myfinishline/store/my-challenges",
  },
  {
    id: 3,
    name: "Contracts",
    href: "/myfinishline/store/contracts",
  },
];

export default function StoreLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="max-w-3xl mx-auto pt-2 px-2">
      <Tabs links={storeLinks} layoutId="store-tab-navigation" />
      {children}
    </main>
  );
}
