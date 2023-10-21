import { MENU, MENU_LOGIN } from "./SIDEBAR";
import Player from "./player";
import TabSidebar from "./tab-sidebar";

export default function SideBar() {
  return (
    <div className="fixed h-[calc(100vh_-_72px)] top-[72px] left-0 w-[279px] flex-col justify-between lg:flex hidden">
      <div className="pt-7">
        <TabSidebar MENU={MENU} />
        <div className="my-[18px]">
          <div className="px-[18px]">
            <div className="border-t border-solid border-[#252027] h-[1px] w-full"></div>
          </div>
        </div>
        <TabSidebar MENU={MENU_LOGIN} />
        <div className="my-[18px]">
          <div className="px-[18px]">
            <div className="border-t border-solid border-[#252027] h-[1px] w-full"></div>
          </div>
        </div>
      </div>
      <Player />
    </div>
  );
}
