import React from "react";
import { dummyPlaylistArray } from "@/lib/dummyData";
import { FaCirclePlay } from "react-icons/fa6";

type props = {
  playlist: {
    id: number;
    owner: string;
    playlistName: string;
    songList: any;
  };
};

const PlayListNav = ({ playlist }: props) => {
  //{
  //  id: 1,
  //  owner: '50meru',
  //  playlistName: "50meru's playlist",
  //  songList: getSongsBychannel('50meru'),
  //},
  const { id, owner, playlistName, songList } = playlist;

  const onClickPlay = () => {};

  return (
    <li className="flex flex-row h-[56px] justify-between items-center mx-3 px-4 py-2 hover:bg-neutral-700 rounded-lg group text-white">
      <div className="flex flex-col">
        <div className="text-[14px] font-[400]">{playlistName}</div>
        <div className="text-[12px] font-[300] text-neutral-500">{owner}</div>
      </div>
      <div
        className="hidden group-hover:block cursor-pointer"
        onClick={onClickPlay}
      >
        <FaCirclePlay size={24} />
      </div>
    </li>
  );
};

export default PlayListNav;
