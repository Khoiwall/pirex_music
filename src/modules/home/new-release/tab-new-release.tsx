import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { Dispatch, SetStateAction } from "react";

interface Props {
  setTab: Dispatch<SetStateAction<number>>;
  tab: number;
}

export default function TabNewRelease({ setTab, tab }: Props) {
  return (
    <div className="flex items-center gap-4">
      {["TẤT CẢ", "VIỆT NAM", "QUỐC TẾ"]?.map((_tab, i) => {
        return (
          <Button
            key={_tab}
            variant={tab == i ? "default" : "secondary"}
            className="text-[12px] leading-[20px] rounded-[40px] py-1 px-6 hover:bg-primary [&_p]:hover:text-base-shade-00-dp"
            onClick={() => setTab(i)}
          >
            <p
              className={clsx("text-white font-medium", {
                "!text-base-shade-00-dp": tab == i,
              })}
            >
              {_tab}
            </p>
          </Button>
        );
      })}
    </div>
  );
}
