import React, { useEffect } from "react";
import Link from "next/link";
import {IoLogoApple, IoHomeOutline, IoPeopleOutline, IoSettingsOutline, IoLogOutOutline} from "react-icons/io5";
import Image from "next/image";

const SideBar = ({showNav}) => {

  const menus = [
    { name: "Dashboard", link: "/", icon: IoHomeOutline },
    { name: "Customers", link: "/", icon: IoPeopleOutline },
    { name: "Settings", link: "/", icon: IoSettingsOutline },
    { name: "Sign Out", link: "/", icon: IoLogOutOutline },
  ];

  useEffect(()=>{
    let list = document.querySelectorAll(".navigation li");

    function activeLink() {
      list.forEach((item) => {
        item.classList.remove("hovered");
      });
      this.classList.add("hovered");
    }
    
    list.forEach((item) => item.addEventListener("mouseover", activeLink));
  
  },[])

  return (
    <div className={`navigation ${showNav ? "" : "active"}`}>
      <ul>
        <li>
          <Link href={"/"}>
            {/* <span className="icon"> */}
              {/* <IoLogoApple size={30} className="inline align-baseline" /> */}
              <Image
                className="icon w-8 h-8"
                src="/ferox-transparent.png"
                alt="logo"
                width={100}
                height={100}
              />

            {/* </span> */}
            <span className="company-name">SkyTurro</span>
          </Link>
        </li>
        {menus?.map((menu, i) => (
            <li key={i}>
                <Link href={menu?.link}>
                    <span className="icon">
                        {React.createElement(menu?.icon, { size: "28", className:"inline align-baseline" })}
                    </span>
                    <span className="title">{menu?.name}</span>
                </Link>
            </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
