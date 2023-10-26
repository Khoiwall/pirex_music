import { Button } from "@/components/ui/button";
import TabNewRelease from "./tab-new-release";
import { useState } from "react";
import SongCard from "@/components/song-card";

export default function NewRelease() {
  const [tab, setTab] = useState<number>(0);
  return (
    <div className="sm:mt-12">
      <p className="text-[24px] leading-[30px] font-bold font-header mb-5">
        Mới phát hành
      </p>
      <TabNewRelease tab={tab} setTab={setTab} />
      <div className="mt-4 grid lg:grid-cols-3 sm:grid-cols-2 lg:gap-7 gap-4 grid-cols-1">
        <div className="flex flex-col">
          {[1, 2, 3, 4, 5]?.map((i) => (
            <SongCard key={i} />
          ))}
        </div>
        <div className="flex-col md:flex hidden">
          {[1, 2, 3, 4, 5]?.map((i) => (
            <SongCard key={i} />
          ))}
        </div>
        <div className="flex-col lg:flex hidden">
          {[1, 2, 3, 4, 5]?.map((i) => (
            <SongCard key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
