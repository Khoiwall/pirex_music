import { MenuIconClose, MenuIconOpen } from "@/components/icons";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { SidebarContext } from "@/context/SidebarContext";
import Link from "next/link";
import { useContext } from "react";

export default function Logo() {
  const { toggleSidebar, sidebarToggle } = useContext(SidebarContext);
  return (
    <div className="flex items-center gap-[20px]">
      {/* <Button
        onClick={() => toggleSidebar()}
        variant="secondary"
        className="rounded-full p-3"
      >
        <Icon size="lg" className="[&_path]:!fill-white/70">
          {sidebarToggle ? <MenuIconClose /> : <MenuIconOpen />}
        </Icon>
      </Button> */}
      <Link href="/">
        <img
          src="https://ucarecdn.com/04fa36c4-bc5a-41cd-b869-e3326b0907ea/"
          alt="logo"
          className="w-[100px] h-[33px]"
        />
      </Link>
    </div>
  );
}
