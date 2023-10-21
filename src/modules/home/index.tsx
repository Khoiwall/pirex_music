import HeroBanners from "./hero-banners";
import MySinger from "./my-singers";
import NewRelease from "./new-release";
import NewAlbums from "./news-albums";

export default function Home() {
  return (
    <div className="pb-[30px]">
      <HeroBanners />
      <NewAlbums />
      <MySinger />
      <NewRelease />
    </div>
  );
}
