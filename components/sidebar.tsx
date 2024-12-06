'use client';

import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image"; // Importer pour gérer les images
import Courses from "@/public/Yellow/Courses.png";
import CoursesBlack from "@/public/Black/Courses.png";
import Questions from "@/public/Yellow/square.png";
import QuestionsBlack from "@/public/Black/square.png";
import Support from "@/public/Yellow/support.png";
import SupportBlack from "@/public/Black/supports.png";
import LayoutGrid from "@/public/Yellow/layout.png";
import LayoutGridBlack from "@/public/Black/layout.png";
import Search from "@/public/Yellow/search.png";
import SearchBlack from "@/public/Black/search.png";
import UserRound from "@/public/Yellow/user.png";
import UserRoundBlack from "@/public/Black/user.png";
import { ModeToggle } from "./mode";

const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const routes = [
    {
      icon: LayoutGrid,
      iconBlack: LayoutGridBlack,
      href: '/',
      label: 'Dashboard',
    },
    {
      icon: Courses,
      iconBlack: CoursesBlack,
      href: '/courses/create',
      label: 'Courses',
    },
    {
      icon: Questions,
      iconBlack: QuestionsBlack,
      href: '/questions/create',
      label: 'Questions Bank',
    },
    {
      icon: Search,
      iconBlack: SearchBlack,
      href: '/search',
      label: 'Search',
    },
    {
      icon: UserRound,
      iconBlack: UserRoundBlack,
      href: '/account',
      label: 'Account',
    },
    {
      icon: Support,
      iconBlack: SupportBlack,
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
        "w-20 hover:w-64"
      )}
    >
      {/* Logo */}
      <div className="relative mt-6">
        {/* Image par défaut (visible par défaut) */}
        <Image
          src="/atps-default.png"
          height={20}
          width={40}
          alt="ATPS Default Logo"
          className="block group-hover:hidden transition-opacity duration-300"
        />
        {/* Image au survol (visible seulement en hover) */}
        <Image
          src="/atps.png"
          height={40}
          width={80}
          alt="ATPS Logo"
          className="hidden group-hover:block transition-opacity duration-300"
        />
      </div>

      {/* Navigation */}
      <div className="p-4 flex-1 flex justify-center items-center w-full">
        <div className="space-y-2 w-full">
          {routes.map((route) => (
            <div
              onClick={() => onNavigate(route.href)}
              key={route.href}
              className={cn(
                "group flex items-center p-3 cursor-pointer transition-colors duration-300 hover:text-[#EECE84] hover:bg-primary/10 rounded-full",
                pathname === route.href && "bg-primary/10 text-[#EECE84] shadow"
              )}
            >
              {/* Icon - Image noire par défaut */}
              <Image
                src={route.iconBlack}
                alt={route.label}
                className={cn(
                  "h-5 w-5 mr-0 group-hover:mr-3 transition-all duration-300 ml-0.5 group-hover:hidden",
                  pathname === route.href && "hidden"
                )}
              />
              {/* Icon - Image jaune au survol et quand actif */}
              <Image
                src={route.icon}
                alt={route.label}
                className={cn(
                  "h-5 w-5 mr-0 group-hover:mr-3 transition-all duration-300 ml-0.5 hidden group-hover:block",
                  pathname === route.href && "block"
                )}
              />
              {/* Label */}
              <span className="hidden group-hover:inline-block text-sm font-medium transition-opacity duration-300">
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