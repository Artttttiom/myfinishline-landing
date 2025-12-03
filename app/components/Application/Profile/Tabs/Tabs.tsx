"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";

interface ILink {
  id: number;
  name: string;
  href: string;
}

interface ITabsProps {
  links: ILink[];
  layoutId: string;
}

const Tabs = ({ links, layoutId }: ITabsProps) => {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-1 p-0.5 overflow-hidden border-b-accent border-b">
      {links.map((link) => {
        return (
          <Link
            className="flex-1 p-1 py-2 text-center relative text-foreground"
            key={link.id}
            href={link.href}
          >
            {pathname.includes(link.href) && (
              <motion.div
                className="absolute top-full w-full h-full left-0 bg-foreground backdrop-invert-100"
                layoutId={layoutId}
                transition={{
                  type: "spring",
                  stiffness: 150,
                  damping: 30,
                }}
              />
            )}
            <span
              className={`${
                pathname.includes(link.href) && "font-bold transition-all"
              } relative z-10`}
            >
              {link.name}
            </span>
          </Link>
        );
      })}
    </nav>
  );
};

export default Tabs;
