"use client";
import React, { useMemo } from "react";
import { GoHome } from "react-icons/go";
import { FiCompass, FiMusic, FiPlus } from "react-icons/fi";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { dummyPlaylistArray } from "@/lib/dummyData";
import PlayListNav from "@/components/elements/PlayListNav";

const Navigator = () => {
  const pathname = usePathname();

  const routes = useMemo(() => {
    return [
      {
        icons: <GoHome size={24} />,
        label: "홈",
        isActive: pathname === "/",
        href: "/",
      },
      {
        icons: <FiCompass size={24} />,
        label: "둘러보기",
        isActive: pathname === "explore",
        href: "/explore",
      },
      {
        icons: <FiMusic size={24} />,
        label: "보관함",
        isActive: pathname === "library",
        href: "/library",
      },
    ];
  }, [pathname]);

  return (
    <div>
      <section className={"flex flex-col gap-2 px-4 pb-4"}>
        {routes.map((route) => {
          return (
            <Link key={route.label} href={route.href}>
              <div
                className={cn(
                  "flex flex-row gap-4 p-[10px] item-center text-[16px] rounded-lg  hover:bg-neutral-700",
                  route.isActive && "bg-neutral-800"
                )}
              >
                {route.icons}
                <span className="align-text-bottom">{route.label}</span>
              </div>
            </Link>
          );
        })}
      </section>
      <section className="px-6">
        <div className="w-full h-[1px] bg-neutral-800"></div>
      </section>
      <section className="px-6">
        <div className="flex flex-row justify-center items-center gap-2 my-6 py-2 bg-neutral-800 hover:bg-neutral-700 rounded-3xl font-[200]">
          <FiPlus size={24} />
          <span>새 재생목록</span>
        </div>
      </section>
      <ul>
        {dummyPlaylistArray.map((playlist) => {
          return (
            <PlayListNav key={playlist.id} playlist={playlist}></PlayListNav>
          );
        })}
      </ul>
    </div>
  );
};

export default Navigator;
