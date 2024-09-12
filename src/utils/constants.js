import React from "react";

import { AiFillHome, AiOutlineFlag, AiOutlineLike } from "react-icons/ai";
import { MdLocalFireDepartment, MdOutlineShoppingBag, MdPodcasts, MdOutlinePlaylistPlay, MdOutlineHistory, MdAccessTime } from "react-icons/md";
import { CgMusicNote, CgMediaLive } from "react-icons/cg";
import { FiFilm } from "react-icons/fi";
import { IoGameControllerSharp } from "react-icons/io5";
import { ImNewspaper } from "react-icons/im";
import { GiDiamondTrophy, GiHanger } from "react-icons/gi";
import { RiLightbulbLine, RiFeedbackLine } from "react-icons/ri";
import { FiSettings, FiHelpCircle, FiTv } from "react-icons/fi";
import { SiYoutubeshorts } from "react-icons/si";
import { TiTabsOutline } from "react-icons/ti";
import { LiaFileVideoSolid } from "react-icons/lia";

export const categories = [
    { name: "Home", icon: <AiFillHome />, type: "home" },
    { name: "Shorts", icon: <SiYoutubeshorts />, type: "explore" },
    { name: "Subscriptions", icon: <TiTabsOutline />, type: "you", divider: true },
    { name: "Your channel", icon: <FiTv />, type: "you"},
    { name: "History", icon: <MdOutlineHistory />, type: "you"},
    { name: "Playlists", icon: <MdOutlinePlaylistPlay />, type: "you"},
    { name: "Your videos", icon: <LiaFileVideoSolid />, type: "you"},
    { name: "Watch later", icon: <MdAccessTime />, type: "you"},
    { name: "Liked videos", icon: <AiOutlineLike />, type: "you", divider: true},
    { name: "Trending", icon: <MdLocalFireDepartment />, type: "explore" },
    { name: "Shopping", icon: <MdOutlineShoppingBag />, type: "explore" },
    { name: "Music", icon: <CgMusicNote />, type: "explore" },
    { name: "Films", icon: <FiFilm />, type: "explore" },
    { name: "Live", icon: <CgMediaLive />, type: "explore" },
    { name: "Gaming", icon: <IoGameControllerSharp />, type: "explore" },
    { name: "News", icon: <ImNewspaper />, type: "explore" },
    { name: "Sports", icon: <GiDiamondTrophy />, type: "explore" },
    { name: "Courses", icon: <RiLightbulbLine />, type: "explore" },
    { name: "Fashion & beauty", icon: <GiHanger />, type: "explore"},
    { name: "Podcasts", icon: <MdPodcasts />, type: "explore", divider: true},
    { name: "Settings", icon: <FiSettings />, type: "menu" },
    { name: "Report History", icon: <AiOutlineFlag />, type: "menu" },
    { name: "Help", icon: <FiHelpCircle />, type: "menu" },
    { name: "Send feedback", icon: <RiFeedbackLine />, type: "menu" },
];
