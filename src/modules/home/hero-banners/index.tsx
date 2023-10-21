import { useEffect, useRef, useState } from "react";
import Banner from "./banner";

const banners = [
  {
    title: "Sống cho hết đời thanh xuân",
    name: "Trước khi tuổi trẻ này đóng lối",
    description: "demo",
    background: "https://i.ytimg.com/vi/FuPrhIhZ620/maxresdefault.jpg",
    avatar: "https://i.ytimg.com/vi/FuPrhIhZ620/maxresdefault.jpg",
    singers: [
      {
        id: "1234",
        name: "Dick",
      },
      {
        id: "12345",
        name: "Ngắn",
      },
      {
        id: "123458",
        name: "Xám",
      },
    ],
    url: "https://res.cloudinary.com/dvvgyeong/video/upload/v1/Music/zqcj6mxzwznqnnk8jb0x",
    durations: 322,
  },
  {
    title: "Dân biển mà",
    name: "Dân biển mà",
    description: "demo",
    background: "https://i.ytimg.com/vi/y31s-AFwL28/maxresdefault.jpg",
    avatar: "https://i.ytimg.com/vi/y31s-AFwL28/maxresdefault.jpg",
    singers: [
      {
        id: "1234",
        name: "Huỳnh James",
      },
      {
        id: "12345",
        name: "Pjnboys",
      },
    ],
    url: "https://res.cloudinary.com/dvvgyeong/video/upload/v1/Music/u8c0g7xejtxhmpulvvnr",
    durations: 256,
  },
];

export default function HeroBanners() {
  const prevent = useRef(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const scroll = (index: number) => {
    if (!ref.current) return;
    const i = index % banners.length;
    ref.current.scrollLeft = (ref.current?.children[0]?.clientWidth + 30) * i;
  };

  useEffect(() => {
    if (!prevent?.current) {
      prevent.current = true;
      return;
    }
    let i = 0;
    setInterval(function () {
      scroll(i);
      i++;
    }, 5000);
  }, []);

  return (
    <section className="w-full relative sm:block hidden">
      <div
        className="flex gap-[30px] overflow-hidden flex-nowrap"
        ref={ref}
        style={{ scrollBehavior: "smooth" }}
      >
        {banners?.map((banner, i) => (
          <Banner banner={banner} key={i} />
        ))}
      </div>
    </section>
  );
}
