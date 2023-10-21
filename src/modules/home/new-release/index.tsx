import { Button } from "@/components/ui/button";
import TabNewRelease from "./tab-new-release";
import { useState } from "react";

export default function NewRelease() {
  const [tab, setTab] = useState<number>(0);
  return (
    <div className="sm:mt-12">
      <p className="text-[24px] leading-[30px] font-bold font-header mb-5">
        Mới phát hành
      </p>
      <TabNewRelease tab={tab} setTab={setTab} />
    </div>
  );
}
