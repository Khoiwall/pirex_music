import { useState } from "react";
import TabChildren from "./tab-children";

interface Props {
  MENU: any[];
}
export default function TabSidebar({ MENU }: Props) {
  const [tabHover, setTabHover] = useState<number | null>(null);
  return (
    <div className="flex flex-col gap-[14px]">
      {MENU?.map((tab, index) => (
        <div key={tab?.title}>
          <TabChildren
            setHover={setTabHover}
            hover={tabHover}
            tab={{
              title: tab?.title,
              Icon: tab?.icon,
              link: tab?.link,
            }}
            index={index}
          />
        </div>
      ))}
    </div>
  );
}
// return sidebarToggle ? (
//   <div key={tab?.title}>
//     <TabChildren
//       setHover={setTabHover}
//       hover={tabHover}
//       tab={{
//         title: tab?.title,
//         Icon: tab?.icon,
//         link: tab?.link,
//       }}
//       index={index}
//     />
//   </div>
// ) : (
//   <Tooltip key={tab?.title} title={tab?.title} followCursor>
//     <div>
//       <TabChildren
//         setHover={setTabHover}
//         hover={tabHover}
//         tab={{
//           title: tab?.title,
//           Icon: tab?.icon,
//           link: tab?.link,
//         }}
//         index={index}
//       />
//     </div>
//   </Tooltip>
