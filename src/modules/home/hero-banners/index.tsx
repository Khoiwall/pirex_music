import { Button } from "@/components/ui/button";
import { MusicContext } from "@/context/music-context";
import { cn } from "@/utils";
import { useContext, useEffect, useRef, useState } from "react";

export default function HeroBanners() {
  const [index, setIndex] = useState<number>(0);
  const { player, setIsPlay } = useContext(MusicContext);
  const ref = useRef<HTMLDivElement | null>(null);
  const playAudio = (url: string) => {
    if (!player) return;
    player.src = url;
    player.loop = true;
    player.play();
    setIsPlay(true);
  };
  const scroll = (index: number) => {
    if (!ref.current) return;
    setIndex(index);
    ref.current.scrollLeft = ref.current?.children[0]?.clientWidth * index;
  };
  const goNext = () => {
    if (!ref.current) return;
    const maxScrollLeft = ref.current.scrollWidth - ref.current?.children[0]?.clientWidth;

    ref.current.scrollLeft += maxScrollLeft;
  };
  const goPrev = () => {
    if (!ref.current) return;
    const amountToScroll = Math.min(500, ref.current.scrollLeft);

    ref.current.scrollLeft -= amountToScroll;
  };
  useEffect(() => {
    const handleKeyDown = async (event: any) => {
      if (event.keyCode === 39) {
        scroll(Math.min(index + 1, 1));
      }
      if (event.keyCode === 37) {
        scroll(Math.max(index - 1, 0));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.addEventListener("keydown", handleKeyDown);
    };
  }, [index]);
  return (
    <section className="w-full relative">
      <div
        className="flex gap-[30px] overflow-hidden flex-nowrap"
        ref={ref}
        style={{ scrollBehavior: "smooth" }}
      >
        <div className="flex-1 min-w-[100%] relative pt-[460px] overflow-hidden rounded-3xl">
          <img
            className="absolute top-0 left-0 w-full h-full z-1 object-cover"
            alt="123"
            src="https://assets.teenvogue.com/photos/61927ff3ed17fc083e36e15a/16:9/w_2560%2Cc_limit/Anvq70oK.jpeg"
          />
          <div className="absolute top-0 left-0 w-full h-full z-10 bg-black/60 flex flex-col justify-center pl-[60px]">
            <h1 className="text-headline-42 font-bold font-header line-clamp-1">
              Record Label & Music streaming
            </h1>
            <p className="text-body-16 text-white/70 font-meidum line-clamp-3 max-w-[70%] mt-4">
              There are many variations of passages of Lorem Ipsum available, but the
              majority have suffered alteration in some form, by injected humour, or
              randomised words which dont look even slightly believable
            </p>
            <div className="flex">
              <Button
                onClick={() =>
                  playAudio(
                    "https://res.cloudinary.com/dvvgyeong/video/upload/v1/Music/zqcj6mxzwznqnnk8jb0x"
                  )
                }
                className="mt-10 "
              >
                <p className="text-black text-body-14 font-semibold">PLAY NOW</p>
              </Button>
              <div></div>
            </div>
          </div>
        </div>
        <div className="flex-1 min-w-[100%] relative pt-[460px] overflow-hidden rounded-3xl">
          <img
            className="absolute top-0 left-0 w-full h-full z-1 object-cover"
            alt="123"
            src="https://assets.teenvogue.com/photos/61927ff3ed17fc083e36e15a/16:9/w_2560%2Cc_limit/Anvq70oK.jpeg"
          />
          <div className="absolute top-0 left-0 w-full h-full z-10 bg-black/60 flex flex-col justify-center pl-[60px]">
            <h1 className="text-headline-42 font-bold font-header line-clamp-1">
              Record Label & Music streaming
            </h1>
            <p className="text-body-16 text-white/70 font-meidum line-clamp-3 max-w-[70%] mt-4">
              There are many variations of passages of Lorem Ipsum available, but the
              majority have suffered alteration in some form, by injected humour, or
              randomised words which dont look even slightly believable
            </p>
            <div className="flex">
              <Button
                onClick={() =>
                  playAudio(
                    "https://res.cloudinary.com/dvvgyeong/video/upload/v1/Music/u8c0g7xejtxhmpulvvnr"
                  )
                }
                className="mt-10 "
              >
                <p className="text-black text-body-14 font-semibold">PLAY NOW</p>
              </Button>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-6 pr-14 w-full z-30 flex items-center justify-end gap-2.5">
        <span
          onClick={() => scroll(0)}
          className={cn("w-3 h-1 rounded-xl bg-white/70 cursor-pointer", {
            "w-6 h-1 rounded-xl bg-white": index == 0,
          })}
        ></span>
        <span
          onClick={() => scroll(1)}
          className={cn("w-3 h-1 rounded-xl bg-white/70 cursor-pointer", {
            "w-6 h-1 rounded-xl bg-white": index == 1,
          })}
        ></span>
        {/* <span className="w-3 h-1 rounded-xl bg-white/70 cursor-pointer"></span> */}
      </div>
    </section>
  );
}
