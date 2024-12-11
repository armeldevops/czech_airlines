'use client';

import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import { ModeToggle } from "./mode";
import Link from "next/link";
import { FileQuestion, Headset, LayoutGrid, Search, TvMinimalPlay, UserRound } from "lucide-react";
import Image from "next/image";

const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const routes = [
    {
      icon: LayoutGrid,
      href: '/',
      label: 'Dashboard',
    },
    {
      icon: TvMinimalPlay,
      href: '/courses',
      label: 'Courses',
    },
    {
      icon: FileQuestion,
      href: '/questions-bank',
      label: 'Questions Bank',
    },
    {
      icon: Search,
      href: '/search',
      label: 'Search',
    },
    {
      icon: UserRound,
      href: '/account',
      label: 'Account',
    },
    {
      icon: Headset,
      href: '/support',
      label: 'Support',
    },
  ];

  const onNavigate = (url: string) => {
    return router.push(url);
  };

  return (
    <div
      className={cn(
        "h-full bg-primary/20 rounded-r-[50px] shadow flex flex-col items-center group transition-all duration-300",
        "w-28 hover:w-64"
      )}
    >
      {/* Logo */}
      <div className="relative mt-6">
        {/* Image par défaut (visible par défaut) */}
        <Link href='/'>
          <Image
            src="/atps-default.png"
            height={20}
            width={40}
            alt="ATPS Default Logo"
            className="block group-hover:hidden transition-opacity duration-300"
          />
        </Link>

        {/* Image au survol (visible seulement en hover) */}
        <div className="hidden group-hover:block transition-opacity duration-300">
          <Link href='/' className="flex flex-row text-xs items-center justify-center space-x-1">
            <Image
              src="/atps.png"
              height={80}
              width={80}
              alt="ATPS Logo"
            />
            <span className="text-3xl text-white/70">|</span>
            <div className="flex flex-col items-start justify-start mt-0.5">
              <span>Air Transport Pilot</span>
              <span>School</span>
            </div>
          </Link>
        </div>
      </div>

      {/* Navigation */}
      <div className="p-4 flex-1 flex justify-center items-center">
        <div className="space-y-2 w-full">
          {routes.map((route) => (
            <div
              onClick={() => onNavigate(route.href)}
              key={route.href}
              className={cn(
                "group flex items-center p-4 cursor-pointer transition-colors duration-300 hover:text-[#EECE84] hover:bg-primary/10 rounded-full",
                pathname === route.href && "bg-primary/10 text-[#EECE84] shadow"
              )}
            >
              {/* Icon */}
              <route.icon
                className={cn(
                  "h-7 w-7 mr-0 group-hover:mr-3",
                  pathname === route.href ? "text-[#EECE84]" : "hover:text-[#EECE84]"
                )}
              />
              {/* Label */}
              <span className="hidden group-hover:inline-block font-medium transition-opacity duration-300">
                {route.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex items-center justify-center">
        {/* Boule ronde (par défaut) */}
        <div className="block group-hover:hidden transition-opacity duration-300 mb-6">
          <div className="h-6 w-6 rounded-full bg-[#EECE84] border border-[#EECE84]" />
        </div>

        {/* ModeToggle (visible au survol) */}
        <div className="hidden group-hover:block transition-opacity duration-300">
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;