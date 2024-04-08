"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import UserAvatar from "./UserAvatar";
import PagePadding from "./PagePadding";
import { FaChromecast } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Logo from "./elements/Logo";
import Navigator from "./elements/Navigator";
import { cn } from "@/lib/utils";

const HeaderDrawer = ({ children }) => {
  const [isopen, setIsOpen] = React.useState(false);

  return (
    <Drawer direction="left" open={isopen} onOpenChange={setIsOpen}>
      <DrawerTrigger>{children}</DrawerTrigger>
      <DrawerContent className="h-full w-[240px]">
        <div className="">
          <div className="p-[20px]">
            <Logo
              isInDrawer
              onClickClose={() => {
                setIsOpen(false);
              }}
            />
          </div>
          <Navigator />
        </div>
      </DrawerContent>
    </Drawer>
  );
};

const Header = ({ children }: { children: React.ReactNode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = headerRef?.current?.scrollTop;
      setIsScrolled(currentScroll !== 0);
    };

    headerRef?.current?.addEventListener("scroll", handleScroll);
    return () => {
      headerRef?.current?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header ref={headerRef} className="relative overflow-y-auto w-full h-full">
      <section className="absolute top-0 w-full">
        <div className="relative h-[400px] w-full top-0">
          <Image
            fill
            className="object-cover"
            src="https://plus.unsplash.com/premium_photo-1664444388999-66cb40880885?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt={"media item"}
          />
          <div className="absolute top-0 w-full h-[400px] bg-black opacity-40"></div>
          <div className="absolute top-0 w-full h-[400px] bg-gradient-to-t from-black"></div>
        </div>
      </section>
      <section
        className={cn("sticky top-0 left-0 z-10", isScrolled && "bg-black")}
      >
        <PagePadding>
          <div className="flex flex-row justify-between items-center h-[64px]">
            <article className="hidden lg:flex flex-row gap-[16px] items-center h-[42px] min-w-[480px] px-[16px] bg-[rgba(0,0,0,0.14)] border-neutral-500 border-[1px] rounded-2xl">
              <div>
                <FiSearch size={28} />
              </div>
              <input
                className="w-full h-full bg-transparent"
                placeholder="노래, 앨범, 아티스트, 팟캐스트 검색"
                type="text"
              />
            </article>
            <HeaderDrawer>
              <article className="lg:hidden">
                <Logo />
              </article>
            </HeaderDrawer>
            <article className="flex flex-row gap-6 items-center">
              <FaChromecast size={28} />
              <UserAvatar />
            </article>
          </div>
        </PagePadding>
      </section>
      <section className="relative">{children}</section>
    </header>
  );
};

export default Header;
