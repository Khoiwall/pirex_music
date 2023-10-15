import {
  AlbumIcon,
  DiscoverIcon,
  DoubleUserIcon,
  FollowArtistICon,
  SongIcon,
  TrendingIcon,
} from "@/components/icons";

export const MENU = [
  {
    title: "Home",
    link: "/",
    icon: <DiscoverIcon />,
  },
  {
    title: "Songs",
    icon: <SongIcon />,
    link: "/songs",
  },
  {
    title: "Artists",
    icon: <DoubleUserIcon />,
    link: "/artists",
  },
  {
    title: "Albums",
    icon: <AlbumIcon />,
    link: "/albums",
  },
];
export const MENU_LOGIN = [
  {
    title: "Trending",
    icon: <TrendingIcon />,
    link: "/trending",
  },
  {
    title: "Following",
    icon: <FollowArtistICon />,
    link: "/following",
  },
];
