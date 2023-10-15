import {
  LoopIcon,
  NextIcon,
  PauseIcon,
  PlayIcon,
  PrevIcon,
  RandomSongIcon,
} from "@/components/icons";
import { Button, ButtonProps } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { MusicContext } from "@/context/music-context";
import { useContext } from "react";

interface ButtonPlayer extends ButtonProps {
  sizeIcon?: "xs" | "sm" | "lg" | "xl" | "2xl";
}

function ButtonPlayer({ children, sizeIcon = "sm" }: ButtonPlayer) {
  return (
    <Button
      variant="Transparent"
      className="[&_path]:!fill-white/70 [&_path]:hover:!fill-white"
      size={0}
    >
      <Icon size={sizeIcon}>{children}</Icon>
    </Button>
  );
}
export default function Buttons() {
  const { player, isPlay, setIsPlay } = useContext(MusicContext);
  const playAudio = () => {
    if (player) {
      isPlay ? player.pause() : player.play();
      setIsPlay(!isPlay);
    }
  };
  return (
    <div className="flex items-center gap-2.5 justify-center">
      <ButtonPlayer>
        <RandomSongIcon />
      </ButtonPlayer>
      <ButtonPlayer sizeIcon="xl">
        <PrevIcon />
      </ButtonPlayer>
      <Button
        onClick={() => playAudio()}
        className="w-[42px] h-[42px] rounded-full p-0 [&_path]:fill-base-shade-00-dp"
      >
        <Icon size="xl">{!isPlay ? <PlayIcon /> : <PauseIcon />}</Icon>
      </Button>
      <ButtonPlayer sizeIcon="xl">
        <NextIcon />
      </ButtonPlayer>
      <ButtonPlayer>
        <LoopIcon />
      </ButtonPlayer>
    </div>
  );
}
