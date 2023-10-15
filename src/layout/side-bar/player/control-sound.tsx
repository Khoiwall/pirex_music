import { OffSoundIcon, SoundIcon, SoundSmallIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { ChangeEvent, useState } from "react";
import ProgressBar from "./process-bar";
import { Tooltip } from "@mui/material";

function soundIcon(sound: number) {
  switch (true) {
    case sound > 0.6:
      return <SoundIcon />;
    case sound > 0:
      return <SoundSmallIcon />;
    default:
      return <OffSoundIcon />;
  }
}

export default function ControlSound() {
  const [sound, setSound] = useState<number>(0.6);
  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setSound(parseFloat(e?.target?.value));
  return (
    <div className="flex items-center gap-[5px]">
      <Tooltip title={sound == 0 ? "Cancel mute" : "Mute"}>
        <Button
          onClick={() => setSound(sound == 0 ? 50 : 0)}
          variant="Transparent"
          className="!p-0"
        >
          <Icon className="[&_path]:!fill-white/70 [&_path]:hover:!fill-white">
            {soundIcon(sound)}
          </Icon>
        </Button>
      </Tooltip>
      <ProgressBar value={sound} onChange={onChange} className="!w-[70px]" />
    </div>
  );
}
