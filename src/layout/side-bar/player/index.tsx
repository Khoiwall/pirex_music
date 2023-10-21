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
import { secondsToTimeFormat } from "@/utils";

export default function Player() {
  const [process, setProcess] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<string>("00:00");
  const { music, player } = useContext(MusicContext);
  useEffect(() => {
    if (player) {
      player.loop = true;
      player.ontimeupdate = function () {
        setCurrentTime(secondsToTimeFormat(player.currentTime || 0));
        setProcess(player.currentTime / music?.durations);
      };
    }
  }, [music, player]);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (player) {
      setProcess(parseFloat(e?.target?.value));
      player.currentTime = parseFloat(e?.target?.value) * music?.durations;
    }
  };
  return (
    <div className="py-5 px-[30px] text-white">
      <figure className="relative min-h-[90px] max-h-[90px] min-w-[90px] max-w-[90px] rounded-lg overflow-hidden mx-auto mb-2.5">
        <img
          src={music?.avatar}
          alt="song"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </figure>
      <div className="flex flex-col text-center gap-1 mb-2.5">
        <PText variant="medium" className="line-clamp-1">
          {music?.name}
        </PText>
        <div className="line-clamp-1 flex justify-center">
          {music?.singers?.map((singer: any, i: number) => (
            <Link key={i} href={`/singers/${singer?.name}`}>
              <PText variant="medium" className="text-white/70 hover:text-white">
                {i > 0 && ", "} {singer?.name}
              </PText>
            </Link>
          ))}
        </div>
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
