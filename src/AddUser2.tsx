import React from "react";
import IconHome from "./modules/IconHome";
import IconSearch from "./modules/IconSearch";
import Line1 from "./modules/Line1";
import Polygon1 from "./modules/Polygon1";
import IconProfileCircled from "./modules/IconProfileCircled";
import Vector from "./modules/Vector";
import Vector1 from "./modules/Vector1";
import Vector2 from "./modules/Vector2";
import Vector3 from "./modules/Vector3";
import Line3 from "./modules/Line3";
import IconMenu from "./modules/IconMenu";
import IconViewGrid from "./modules/IconViewGrid";
import Line4 from "./modules/Line4";
import Line10 from "./modules/Line10";
import Line25 from "./modules/Line25";
import Line11 from "./modules/Line11";
import Line12 from "./modules/Line12";
import IconTrash from "./modules/IconTrash";
import IconTrash1 from "./modules/IconTrash1";
import IconTrash2 from "./modules/IconTrash2";
import Group12 from "./modules/Group12";
import Group11 from "./modules/Group11";
import IconTrash3 from "./modules/IconTrash3";
interface Props {}

const AddUser2 = (props: Props) => {
  return (
    <div
      className="box-border block w-[1440px] h-[1024px] relative overflow-hidden rounded-sm bg-[#f3f3f3]"
      style={{
        boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)",
      }}
    >
      <div className="w-[312px] h-[1024px]">
        <div
          className="w-[312px] h-[1024px] absolute top-0 left-0 rounded-tr-[57px] bg-[#81807e]"
          style={{
            boxShadow: "0px 4px 6px 0 rgba(0,0,0,0.3)",
          }}
        />
      </div>
      <div className="w-[226px] h-[46px] absolute top-[782px] left-[46px] rounded-[40px] bg-[#774f3989]" />
      <p className="whitespace-pre-wrap absolute top-[38px] left-[93px] font-['MonteCarlo'] text-4xl leading-[normal] text-left text-white">
        Bibliothèque
      </p>
      <IconHome />
      <div className="w-[464px] h-11 absolute top-12 left-96 rounded-[20px] bg-[#e7eaec]" />
      <IconSearch />
      <p className="whitespace-pre-wrap absolute top-[57px] left-[454px] font-['Poppins'] text-base leading-[normal] tracking-[0.03em] italic text-left text-[#969595]">
        Recherche
      </p>
      <p className="whitespace-pre-wrap absolute top-[50px] left-[1263px] font-['Phetsarath'] text-xl leading-[normal] text-left text-[#897647]">
        Fr
      </p>
      <Line1 />
      <Polygon1 />
      <IconProfileCircled />
      <p className="whitespace-pre-wrap absolute top-[201px] left-[41px] font-['Poppins'] text-base leading-[normal] tracking-[0.03em] text-left text-white">
        Support Divinatoirs
      </p>
      <p className="whitespace-pre-wrap absolute top-[194px] left-96 font-['Poppins'] text-xl leading-[normal] tracking-[0.03em] text-left capitalize text-[#897647]">
        liste des utilisateurs
      </p>
      <p className="whitespace-pre-wrap absolute top-[268px] left-[41px] font-['Poppins'] text-base leading-[normal] tracking-[0.03em] text-left text-white">
        Formation Initiale
      </p>
      <p className="whitespace-pre-wrap absolute top-[332px] left-[41px] font-['Poppins'] text-base leading-[normal] tracking-[0.03em] text-left text-white">
        Psychologie Humaine
      </p>
      <p className="whitespace-pre-wrap absolute top-[396px] left-[41px] font-['Poppins'] text-base leading-[normal] tracking-[0.03em] text-left text-white">
        Divers
      </p>
      <Vector />
      <Vector1 />
      <Vector2 />
      <Line3 />
      <p className="whitespace-pre-wrap absolute top-[793px] left-[107px] font-['Poppins'] text-xxl leading-[normal] tracking-wider text-left text-[#ffffff]">
        Blog personnel
      </p>
      <IconMenu />
      <IconViewGrid />
      <div
        className="w-[992px] h-[318px] absolute top-[248px] left-96 rounded-3xl bg-white/[0.65]"
        style={{
          boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)",
        }}
      />
      <p className="whitespace-pre-wrap absolute top-[329px] left-[446px] font-['Poppins'] text-sm leading-[normal] tracking-[0.03em] font-medium text-left capitalize text-black">
        Martin remi
      </p>
      <p className="whitespace-pre-wrap absolute top-[379px] left-[446px] font-['Poppins'] text-sm leading-[normal] tracking-[0.03em] font-medium text-left capitalize text-black">
        Bernard stephane
      </p>
      <p className="whitespace-pre-wrap absolute top-[474px] left-[446px] font-['Poppins'] text-sm leading-[normal] tracking-[0.03em] font-medium text-left capitalize text-black">
        Dubois antoine
      </p>
      <p className="whitespace-pre-wrap absolute top-[426px] left-[447px] font-['Poppins'] text-sm leading-[normal] tracking-[0.03em] font-medium text-left capitalize text-black">
        Robert christophe
      </p>
      <div
        className="w-[992px] h-[67px] absolute top-[246px] left-96 rounded-tl-[30px] rounded-tr-[30px] bg-white"
        style={{
          boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.05)",
        }}
      />
      <p className="whitespace-pre-wrap absolute top-[266px] left-[446px] font-['Poppins'] text-base leading-[normal] tracking-[0.03em] text-left capitalize text-[#585757]">
        nom utilisateur
      </p>
      <p className="whitespace-pre-wrap absolute top-[268px] left-[1283px] font-['Poppins'] text-base leading-[normal] tracking-[0.03em] text-left capitalize text-[#585757]">
        action
      </p>
      <Line4 />
      <Line10 />
      <Line25 />
      <Line11 />
      <Line12 />
      <IconTrash />
      <IconTrash1 />
      <IconTrash2 />
      <IconTrash3 />
      <Group12 />
      <Group11 />
    </div>
  );
};

export default AddUser2;
