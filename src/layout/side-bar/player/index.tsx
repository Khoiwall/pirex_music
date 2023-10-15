import { PText } from "@/components/ui/p-text";
import Link from "next/link";
import Buttons from "./buttons";
import ProgressBar from "./process-bar";
import ControlSound from "./control-sound";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import Tooltip from "@mui/material/Tooltip/Tooltip";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { HeartIcon, ListIcon } from "@/components/icons";
import { MusicContext } from "@/context/music-context";
import { secondsToTimeFormat } from "@/helpers";

export default function Player() {
  const [process, setProcess] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<string>("00:00");
  const { music, player } = useContext(MusicContext);
  useEffect(() => {
    if (player) {
      player.ontimeupdate = function () {
        setCurrentTime(secondsToTimeFormat(player.currentTime || 0));
        setProcess(player.currentTime / 391);
      };
    }
  }, [music, player]);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e?.target?.value);
    if (player) {
      setProcess(parseFloat(e?.target?.value));
      player.currentTime = parseFloat(e?.target?.value) * 391;
    }
  };
  return (
    <div className="py-5 px-[30px] text-white">
      <figure className="relative min-h-[90px] max-h-[90px] min-w-[90px] max-w-[90px] rounded-lg overflow-hidden mx-auto mb-2.5">
        <img
          src="http://volna.volkovdesign.com/img/covers/cover4.jpg"
          alt="song"
          className="absolute top-0 left-0 w-full h-full"
        />
      </figure>
      <div className="flex items-center gap-1 text-center justify-center mb-2.5">
        <PText variant="medium">Love Story</PText>
        <span>-</span>
        <Link href="/">
          <PText variant="medium" className="text-white/70 hover:text-white">
            Taylor Swift
          </PText>
        </Link>
      </div>
      <Buttons />
      <div className="flex gap-2 mt-2.5 items-center">
        <div className="relative flex-1 flex items-center progress-bar">
          <ProgressBar onChange={onChange} value={process} />
        </div>
        <div>{currentTime}</div>
      </div>
      <div className="flex items-center justify-between mt-2.5">
        <ControlSound />
        <div className="flex items-center gap-4">
          <Tooltip title="Save to library">
            <Button
              variant="Transparent"
              className="!p-0 [&_path]:!fill-white/70 [&_path]:hover:!fill-white"
            >
              <Icon>
                <HeartIcon />
              </Icon>
            </Button>
          </Tooltip>
          <Tooltip title="Playlist">
            <Button
              variant="Transparent"
              className="!p-0 [&_path]:!fill-white/70 [&_path]:hover:!fill-white"
            >
              <Icon>
                <ListIcon />
              </Icon>
            </Button>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}
