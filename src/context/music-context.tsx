"use client";

import {
  useState,
  ReactNode,
  createContext,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";
type MusicContext = {
  music: any;
  setMusic: Dispatch<any>;
  player: HTMLAudioElement | null;
  isPlay: boolean;
  setIsPlay: Dispatch<SetStateAction<boolean>>;
};

export const MusicContext = createContext<MusicContext>({} as MusicContext);

type Props = {
  children: ReactNode;
};

let player: HTMLAudioElement | null = null;

export function MusicProvider({ children }: Props) {
  const [music, setMusic] = useState<any>(null);
  const [isPlay, setIsPlay] = useState<boolean>(false);
  const [player, setPlayer] = useState<null | HTMLAudioElement>(null);
  useEffect(() => {
    if (typeof Audio !== "undefined") {
      setPlayer(
        new Audio(
          "https://res.cloudinary.com/dvvgyeong/video/upload/v1/Music/ij9rf7auvfl8aviwbfun"
        )
      );
    } else {
      console.log("Audio API not supported");
    }
  }, []);
  return (
    <MusicContext.Provider value={{ music, setMusic, player, setIsPlay, isPlay }}>
      {children}
    </MusicContext.Provider>
  );
}
