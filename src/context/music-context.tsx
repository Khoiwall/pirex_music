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

const song = {
  avatar: "https://i.ytimg.com/vi/H0XyNfZj5Xs/maxresdefault.jpg",
  url: "https://res.cloudinary.com/dvvgyeong/video/upload/v1/Music/ij9rf7auvfl8aviwbfun",
  name: "Wildest Dreams",
  singers: [
    {
      id: "123",
      name: "Taylor Swift",
    },
  ],
  durations: 391,
};

export function MusicProvider({ children }: Props) {
  const [music, setMusic] = useState<{
    avatar: string;
    url: string;
    name: string;
    singers: {
      id: string;
      name: string;
    }[];
    durations: number;
  }>(song);
  const [isPlay, setIsPlay] = useState<boolean>(false);
  const [player, setPlayer] = useState<null | HTMLAudioElement>(null);
  useEffect(() => {
    if (typeof Audio !== "undefined") {
      setPlayer(new Audio(song?.url));
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
