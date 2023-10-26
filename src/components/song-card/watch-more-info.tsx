import {
  ChevronRightIcon,
  HeadPhoneIcon,
  HeartIcon,
  PlusCircleIcon,
  ShareIcon,
} from "../icons";
import Icon from "../ui/icon";

export default function WatchMoreInfo() {
  return (
    <div className="absolute top-12 left-4 bg-base-shade-01-dp rounded-lg shadow-md z-10">
      <div className="flex gap-2.5 px-4 pt-4">
        <figure className="lg:pt-10 lg:pl-10 pt-8 pl-8 rounded-lg overflow-hidden relative">
          <img
            src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/f/8/c/a/f8ca55a5f214c5719edff4709b8a4dc5.jpg"
            className="absolute top-0 left-0 w-full h-full"
            alt="song"
          />
        </figure>
        <div>
          <p className="text-body-14 font-semibold cursor-pointer whitespace-nowrap hover:text-primary">
            Biết khi nào chia ly
          </p>
          <div className="mt-[2px] flex items-center gap-2.5">
            <div className="flex items-center gap-1">
              <Icon className="!w-[14px] !h-[14px] [&_path]:!fill-white/40">
                <HeartIcon />
              </Icon>
              <p className="text-[13px] leading-[13px] font-semibold text-white/40">1k</p>
            </div>
            <div className="flex items-center gap-1">
              <Icon className="!w-[14px] !h-[14px] [&_path]:!fill-white/40">
                <HeadPhoneIcon />
              </Icon>
              <p className="text-[13px] leading-[13px] font-semibold text-white/40">3k</p>
            </div>
          </div>
        </div>
      </div>
      <ul className="mt-4 whitespace-nowrap">
        <li className="py-2.5 px-4 hover:bg-black/30 flex items-center gap-4 cursor-pointer">
          <Icon className="[&_path]:!fill-white/70">
            <HeartIcon />
          </Icon>
          <p className="text-body-14 text-white/70 font-medium">Thêm vào thư viện</p>
        </li>
        <li className="py-2.5 px-4 hover:bg-black/30 flex items-center gap-4 cursor-pointer">
          <Icon className="[&_path]:!fill-white/70">
            <PlusCircleIcon />
          </Icon>
          <p className="text-body-14 text-white/70 font-medium">
            Thêm vào danh sách phát
          </p>
        </li>
        <li className="py-2.5 px-4 hover:bg-black/30 flex items-center justify-between gap-4 cursor-pointer relative [&_div:last-child]:hover:block">
          <div className="flex items-center gap-4">
            <Icon className="[&_path]:!fill-white/70">
              <ShareIcon />
            </Icon>
            <p className="text-body-14 text-white/70 font-medium">Chia sẻ</p>
          </div>
          <Icon>
            <ChevronRightIcon />
          </Icon>
          <div className="absolute bottom-0 left-[226px] bg-base-shade-01-dp rounded-lg shadow-md z-10 hidden w-[150px]">
            <ul className="whitespace-nowrap">
              <li className="p-2 hover:bg-black/30 flex items-center gap-2 cursor-pointer">
                <img
                  src="https://zjs.zmdcdn.me/zmp3-desktop/releases/v1.9.85/static/media/facebook.d62c237b.svg"
                  className="w-4 h-4"
                />
                <p className="text-body-14 text-white/70 font-medium">Facebook</p>
              </li>
              <li className="p-2 hover:bg-black/30 flex items-center gap-2 cursor-pointer">
                <img
                  src="https://zjs.zmdcdn.me/zmp3-desktop/releases/v1.9.85/static/media/facebook.d62c237b.svg"
                  className="w-4 h-4"
                />
                <p className="text-body-14 text-white/70 font-medium">Twitter</p>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
}
