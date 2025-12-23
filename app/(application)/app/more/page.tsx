"use client";

import { ChevronRight } from "lucide-react";
import { AnimatePresence, easeInOut, motion } from "motion/react";
import { FormEvent, JSX, ReactNode, useState } from "react";
import AccordionContent from "@/app/components/Application/More/AccordionContent/AccordionContent";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";

const links = [
  {
    id: 1,
    label: "FAQ",
    title: "Frequently Asked Questions",
    content: [
      {
        id: 1,
        label: "What is a FAQ?",
        text: "A list of questions and answers relating to a particular subject, especially one giving basic information for users of a website.",
      },
      {
        id: 2,
        label: "What is the purpose of a FAQ?",
        text: "The purpose of a FAQ is to provide answers to common questions and help users find the information they need quickly and easily.",
      },
      {
        id: 3,
        label: "How do I create a FAQ?",
        text: "Gather common customer questions from support tickets, emails, and search queries, then write clear, concise answers from the customer's perspective, using simple language and avoiding jargon.",
      },
    ],
  },
  {
    id: 2,
    label: "Contact us",
    block: (form: any) => (
      <div>
        <ul>
          <li className="border-b border-border pb-6 px-6">
            <span className="text-2xl leading-8 text-[#71717A]">Email Us</span>
            <span className="block mt-6 text-base leading-6 text-[#09090B]">
              help@example.com
            </span>
            <span className="block text-base leading-6 text-[#09090B]">
              support@example.com
            </span>
          </li>
          <li className="p-6">
            <span className="text-2xl leading-8 text-[#71717A]">Offices</span>
            <span className="block mt-6 text-xl leading-8 text-[#71717A]">
              New York
            </span>
            <span className="mt-2 block text-base leading-6 text-[#71717A]">
              123 6th St. Melbourne, FL 32904, USA
            </span>
            <span className="block mt-8 text-xl leading-8 text-[#71717A]">
              London
            </span>
            <span className="block mt-2 text-base leading-6 text-[#71717A]">
              123 3rd St. London, TL 32904, UK
            </span>
          </li>
        </ul>
        {form}
      </div>
    ),
  },
];

const arrowVariants = {
  expanded: {
    rotate: 90,
    transition: { duration: 0.3, ease: easeInOut },
  },
  collapsed: {
    rotate: 0,
    transition: { duration: 0.3, ease: easeInOut },
  },
};

const contentContainerVariants = {
  expanded: {
    height: "auto",
    opacity: 1,
    transition: {
      height: {
        duration: 0.3,
        ease: easeInOut,
      },
      opacity: {
        duration: 0.2,
        delay: 0.05,
      },
    },
  },
  collapsed: {
    height: 0,
    opacity: 0,
    transition: {
      height: {
        duration: 0.3,
        ease: easeInOut,
      },
      opacity: {
        duration: 0.2,
      },
    },
  },
};

const contentInnerVariants = {
  expanded: {
    opacity: 1,
    y: 0,
    transition: {
      opacity: { duration: 0.2, delay: 0.1 },
      y: { duration: 0.2, delay: 0.1 },
    },
  },
  collapsed: {
    opacity: 0,
    y: -10,
    transition: {
      opacity: { duration: 0.1 },
      y: { duration: 0.1 },
    },
  },
};

const Page = () => {
  const [expandedBlockId, setExpandedBlockId] = useState<null | number>(null);

  const handleClickBlock = (id: number) => {
    setExpandedBlockId(expandedBlockId === id ? null : id);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <main className="max-w-4xl mx-auto">
      <ul>
        {links.map((link) => {
          const isExpanded = expandedBlockId === link.id;

          const handleCallContent = () => {
            if (link.block) {
              return link.block(
                <form
                  onSubmit={handleSubmit}
                  className="py-8 px-4 bg-[#F4F4F5]"
                >
                  <div className="border border-[#E4E4E7] rounded-lg p-4 space-y-2 bg-white">
                    <span className="font-semibold text-sm text-[#09090B]">
                      Subscribe to our newsletter
                    </span>
                    <p className="text-sm leading-5 text-[#71717A]">
                      Opt-in to receive updates and news about the sidebar.
                    </p>
                    <Input
                      required
                      placeholder="Email"
                      type="email"
                      className=""
                    />
                    <Button className="w-full">Subscribe</Button>
                  </div>
                </form>
              );
            } else {
              return <></>;
            }
          };

          return (
            <li
              key={link.id}
              className="border-b border-border overflow-hidden"
            >
              <button
                onClick={() => handleClickBlock(link.id)}
                className="flex items-center justify-between text-base py-8 px-4 leading-6 w-full cursor-pointer"
              >
                {link.label}
                <motion.div
                  variants={arrowVariants}
                  initial="collapsed"
                  animate={isExpanded ? "expanded" : "collapsed"}
                >
                  <ChevronRight />
                </motion.div>
              </button>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    variants={contentContainerVariants}
                    initial="collapsed"
                    animate="expanded"
                    exit="collapsed"
                    className="overflow-hidden"
                  >
                    <motion.div
                      variants={contentInnerVariants}
                      initial="collapsed"
                      animate="expanded"
                      exit="collapsed"
                      className="px-4 pb-6"
                    >
                      <AccordionContent
                        title={link.title || ""}
                        list={link.content}
                        content={handleCallContent}
                      />
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Page;
