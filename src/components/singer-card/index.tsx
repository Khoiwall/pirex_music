import Link from "next/link";
import { Button } from "../ui/button";
import Icon from "../ui/icon";
import { HeartBackgroundIcon, HeartIcon } from "../icons";

export default function SingerCard() {
  return (
    <div className="w-full h-full bg-base-shade-01-dp hover:bg-base-shade-02-dp p-4 rounded-lg relative">
      <figure
        className="relative pt-[100%] mb-4 rounded-full"
        style={{
          boxShadow: "0 8px 24px rgba(0,0,0,.5)",
        }}
      >
        <img
          src="http://volna.volkovdesign.com/img/covers/cover1.jpg"
          alt="123"
          className="absolute top-0 left-0 w-full h-full rounded-full"
        />
        <Button
          variant="secondary"
          className="p-3 rounded-full absolute right-1 bottom-1 z-30 [&_path]:opacity-70 [&_path]:hover:opacity-100 [&_path]:hover:fill-primary"
        >
          <Icon size="lg">
            <HeartBackgroundIcon />
          </Icon>
        </Button>
      </figure>
      <p className="text-body-16 font-bold hover:text-primary text-white line-clamp-1 mb-1">
        Taylor
      </p>
      <p className="text-body-12 font-normal text-white/70 line-clamp-2">Artist</p>
      <Link href={"/Taylor"} className="absolute top-0 left-0 w-full h-full z-10" />
    </div>
  );
}
