"use client";

import Icon from "@/components/ui/icon";
import { PText } from "@/components/ui/text";
import { SidebarContext } from "@/context/SidebarContext";
import { cn } from "@/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";

interface Props {
  setHover: any;
  hover: boolean | number | null;
  tab: {
    title: string;
    link: string;
    Icon: any;
  };
  index?: number;
}

function TabChildren({ setHover, hover, tab, index }: Props) {
  const pathname = usePathname();
  const { sidebarToggle } = useContext(SidebarContext);
  const isBoolean =
    (typeof hover === "boolean" ? hover : hover === index) ||
    pathname?.startsWith(tab?.link);
  return (
    <Link href={tab?.link} className="block text-white ">
      <div
        className="relative"
        onMouseOver={() => {
          typeof hover === "boolean" ? setHover(true) : setHover(index);
        }}
        onMouseOut={() => {
          typeof hover === "boolean" ? setHover(false) : setHover(null);
        }}
      >
        <div className="pl-[18px]">
          <div
            className={`relative ${
              isBoolean ? "bg-base-shade-04-dp" : "hover:bg-base-shade-04-dp"
            } cursor-pointer rounded-xl`}
          >
            <div className="p-[14px] flex items-center">
              <Icon
                size="lg"
                className={cn("opacity-80 [&_path]:!stroke-none", {
                  "opacity-100 [&_path]:!fill-primary": isBoolean,
                })}
              >
                {tab?.Icon && tab?.Icon}
              </Icon>
              {sidebarToggle && (
                <PText
                  variant="medium"
                  className={
                    isBoolean ? "text-primary text-[14px] leading-[22px] ml-5" : "ml-5"
                  }
                >
                  {tab?.title}
                </PText>
              )}
            </div>
          </div>
        </div>
        {isBoolean && (
          <div className="absolute top-0 left-0 h-full w-1">
            <div className="w-full h-full bg-primary rounded-r-lg"></div>
          </div>
        )}
      </div>
    </Link>
  );
}
export default TabChildren;
