import { useContext } from "react";
import Logo from "./logo";
import SearchBar from "./search-bar";
import TopNavigationUser from "./top-navigation-user";
import { SidebarContext } from "@/context/SidebarContext";

export default function TopNavigation() {
  const { toggleSidebar, sidebarToggle } = useContext(SidebarContext);
  return (
    <header className="fixed top-0 left-0 w-full flex items-center z-[500] bg-base-shade-00-dp">
      <div className="h-[72px] flex items-center justify-between px-5 w-full">
        <Logo />
        <SearchBar />
        <TopNavigationUser />
      </div>
    </header>
  );
}
