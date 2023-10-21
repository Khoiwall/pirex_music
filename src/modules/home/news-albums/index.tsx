import Album from "@/components/album";

export default function NewAlbums() {
  return (
    <div className="sm:mt-12">
      <p className="text-[24px] leading-[30px] font-bold font-header mb-4">New Albums</p>
      <div className="grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 lg:gap-6 gap-4">
        <Album />
        <Album />
        <Album />
        <Album />
        <Album />
        <Album />
      </div>
    </div>
  );
}
