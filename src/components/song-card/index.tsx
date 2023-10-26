import Link from "next/link";
import Icon from "../ui/icon";
import { Button } from "../ui/button";
import { ThreeDotIcon } from "../icons";
import { useState } from "react";
import { cn } from "@/utils";
import WatchMoreInfo from "./watch-more-info";
import { useCloseOutSide } from "@/hooks";

export default function SongCard() {
  const [isCheckMore, setIsCheckMore] = useState<boolean>(false);
  useCloseOutSide(isCheckMore, setIsCheckMore, ".watch-more-info");
  return (
    <div
      className={cn(
        "p-2.5 rounded-lg hover:bg-black/30 [&_button]:hover:inline-flex relative",
        {
          "bg-black/30 [&_button]:!inline-flex": isCheckMore,
        }
      )}
    >
      <div className="flex w-[calc(100%_-_40px)]">
        <figure className="pt-[62px] pl-[62px] relative overflow-hidden rounded-lg mr-2.5">
          <img
            src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/f/8/c/a/f8ca55a5f214c5719edff4709b8a4dc5.jpg"
            className="absolute top-0 left-0 w-full h-full"
            alt="song"
          />
        </figure>
        <div>
          <p className="text-body-14 font-medium line-clamp-1">
            l'vavie (là vì anh vẫn yêu em)
          </p>
          <div className="flex line-clamp-1">
            {["Taylor", "Taylor"]?.map((singer, i) => (
              <div key={i} className="text-body-12 text-white/70">
                {i > 0 && ", "}
                <Link href="/Taylor" className="hover:text-white">
                  {singer}
                </Link>
              </div>
            ))}
          </div>
          <p className="text-body-12 text-white/70 line-clamp-1">4 giờ trước</p>
        </div>
      </div>

      <div className="absolute top-0 right-4 h-full flex items-center watch-more-info">
        <Button
          onClick={() => setIsCheckMore(!isCheckMore)}
          className="hidden p-0 items-center justify-center w-9 h-9 rounded-full bg-transparent hover:bg-base-shade-02-dp"
        >
          <Icon>
            <ThreeDotIcon />
          </Icon>
        </Button>
        {isCheckMore && <WatchMoreInfo />}
      </div>
    </div>
  );
}
