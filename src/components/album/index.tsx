import Link from "next/link";
import { Button } from "../ui/button";
import Icon from "../ui/icon";
import { HeadPhoneIcon, HeartIcon, PlayIcon, PlayListAlbumIcon } from "../icons";
import { bigNum } from "@/utils";

export default function Album() {
  return (
    <div className="w-full h-full">
      <figure className="relative pt-[100%] rounded-xl overflow-hidden [&_a]:hover:block [&_article]:hover:flex [&_img]:hover:scale-[1.1]">
        <img
          src="http://volna.volkovdesign.com/img/covers/cover1.jpg"
          alt="123"
          className="absolute top-0 left-0 w-full h-full duration-300"
        />
        <Link
          href="/"
          className="bg-black/40 absolute top-0 left-0 w-full h-full hidden duration-300 z-10"
        />
        <article className="absolute top-0 left-0 w-full h-full hidden z-30 flex-col justify-between items-center py-5">
          <div />
          <Button className="p-4 [&_path]:hover:fill-primary" variant="secondary">
            <Icon size="xl">
              <PlayIcon />
            </Icon>
          </Button>
          <div className="flex items-center gap-x-5 flex-wrap justify-center">
            <div className="flex items-center gap-1 text-body-13 font-normal">
              <Icon size="sm">
                <PlayListAlbumIcon />
              </Icon>
              7
            </div>
            <div className="flex items-center gap-1 text-body-13 font-normal">
              <Icon size="sm">
                <HeadPhoneIcon />
              </Icon>
              {bigNum(1234)}
            </div>
            <div className="flex items-center gap-1 text-body-13 font-normal">
              <Button variant="Transparent" className="!p-0">
                <Icon size="sm">
                  <HeartIcon />
                </Icon>
              </Button>
              {bigNum(1234555)}
            </div>
          </div>
        </article>
      </figure>
      <Link href="/">
        <p className="mt-2 mb-1 text-body-16 font-semibold hover:text-primary">Red</p>
      </Link>
      <Link href="/Taylor">
        <p className="text-body-14 hover:text-white text-white/70 line-clamp-2">Taylor</p>
      </Link>
    </div>
  );
}
