import { Button } from "@/components/ui/button";
import { MusicContext } from "@/context/music-context";
import { useContext } from "react";

interface Props {
  banner: {
    title: string;
    name: string;
    description: string;
    background: string;
    avatar: string;
    singers: {
      id: string;
      name: string;
    }[];
    url: string;
    durations: number;
  };
}

export default function Banner({ banner }: Props) {
  const { player, setIsPlay, setMusic } = useContext(MusicContext);

  const playAudio = (url: string) => {
    if (!player) return;
    setMusic(banner);
    player.src = url;
    player.loop = true;
    player.play();
    setIsPlay(true);
  };

  return (
    <div className="flex-1 min-w-[100%] relative pt-[460px] overflow-hidden rounded-3xl">
      <img
        className="absolute top-0 left-0 w-full h-full z-1 object-cover"
        alt={banner?.background}
        src={banner?.background}
      />
      <div className="absolute top-0 left-0 w-full h-full z-10 bg-black/60 flex flex-col justify-center pl-[60px]">
        <h1 className="text-headline-42 font-bold font-header line-clamp-1">
          {banner?.title}
        </h1>
        <p className="text-body-16 text-white/70 font-meidum line-clamp-3 max-w-[70%] mt-4">
          {banner?.description}
        </p>
        <div className="flex">
          <Button onClick={() => playAudio(banner?.url)} className="mt-10 ">
            <p className="text-black text-body-14 font-semibold">PLAY NOW</p>
          </Button>
          <div></div>
        </div>
      </div>
    </div>
  );
}
