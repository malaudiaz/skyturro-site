import { useState, Fragment } from "react";
import {IoMenuOutline, IoSunnyOutline, IoMoonOutline} from "react-icons/io5";
import { Menu, Transition, Popover } from "@headlessui/react";
import Link from "next/link";

import {
  HiOutlineBell,
  HiOutlinePencilSquare,
  HiOutlineCreditCard,
  HiOutlineCog8Tooth,
  HiChevronDown,
  HiCheck,
} from "react-icons/hi2";

export default function TopBar({showNav, setShowNav}) {
  const [dark, setDark] = useState(false);

  const switchDark = () => {
    document.body.classList.toggle('dark'); 
    setDark(!dark)
  } ;

  return (
    <div className="topbar">
      <div className="toggle" onClick={()=>{setShowNav(!showNav)}}>
        <IoMenuOutline size={32} />
      </div>

      <div className="flex items-center pr-4 md:pr-4">
        <div className="relative">
          <div className="outline-none mr-2 md:mr-5 cursor-pointer text-gray-700" onClick={switchDark}>
            {dark ? (
              <IoSunnyOutline className="h-5 w-5" />
            ) : (
              <IoMoonOutline className="h-5 w-5" />
            )}
          </div>
        </div>

        <Popover className="relative">
          <Popover.Button className="outline-none mr-2 md:mr-5 cursor-pointer text-gray-700">
            <HiOutlineBell className="h-6 w-6" />
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform scale-95"
            enterTo="transform scale-100"
            leave="transition ease-in duration=75"
            leaveFrom="transform scale-100"
            leaveTo="transform scale-95"
          >
            <Popover.Panel className="absolute -right-16 sm:right-4 z-50 mt-0 bg-white shadow-sm rounded max-w-xs sm:max-w-sm w-screen border-2">
              <div className="relative p-3">
                <div className="flex justify-between items-center w-full">
                  <p className="text-gray-700 font-medium">Notifications</p>
                  <a className="text-sm text-orange-500" href="#">
                    Mark all as read
                  </a>
                </div>
                <div className="mt-4 grid gap-4 grid-cols-1 overflow-hidden">
                  <div className="flex">
                    <div className="rounded-full shrink-0 bg-green-200 h-8 w-8 flex items-center justify-center">
                      <HiCheck className="h-4 w-4 text-green-600" />
                    </div>
                    <div className="ml-4">
                      <p className="font-medium text-gray-700">
                        Notification Title
                      </p>
                      <p className="text-sm text-gray-500 truncate">
                        Test Notification text for design
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="rounded-full shrink-0 bg-green-200 h-8 w-8 flex items-center justify-center">
                      <HiCheck className="h-4 w-4 text-green-600" />
                    </div>
                    <div className="ml-4">
                      <p className="font-medium text-gray-700">
                        Notification Title
                      </p>
                      <p className="text-sm text-gray-500 truncate">
                        Test Notification text for design
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="rounded-full shrink-0 bg-green-200 h-8 w-8 flex items-center justify-center">
                      <HiCheck className="h-4 w-4 text-green-600" />
                    </div>
                    <div className="ml-4">
                      <p className="font-medium text-gray-700">
                        Notification Title
                      </p>
                      <p className="text-sm text-gray-500 truncate">
                        Test Notification text for design
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="rounded-full shrink-0 bg-green-200 h-8 w-8 flex items-center justify-center">
                      <HiCheck className="h-4 w-4 text-green-600" />
                    </div>
                    <div className="ml-4">
                      <p className="font-medium text-gray-700">
                        Notification Title
                      </p>
                      <p className="text-sm text-gray-500 truncate">
                        Test Notification text for design
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>

        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center items-center">
              <picture>
                <img
                  src="/man-smiling.jpg"
                  className="rounded-full h-8 md:mr-4 border-2 border-white shadow-sm"
                  alt="profile picture"
                />
              </picture>
              <span className="hidden md:block font-medium text-gray-700">
                Rettson
              </span>
              <HiChevronDown className="ml-2 h-4 w-4 text-gray-700" />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform scale-95"
            enterTo="transform scale-100"
            leave="transition ease-in duration=75"
            leaveFrom="transform scale-100"
            leaveTo="transform scale-95"
          >
            <Menu.Items className="absolute right-0 w-56 z-50 mt-0 origin-top-right bg-white border-2 rounded shadow-sm">
              <div className="p-1">
                <Menu.Item>
                  <Link
                    href="#"
                    className="flex hover:bg-[#2a2185] hover:text-white text-gray-700 rounded p-2 text-sm group transition-colors items-center"
                  >
                    <HiOutlinePencilSquare className="h-4 w-4 mr-2" />
                    Edit
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link
                    href="#"
                    className="flex hover:bg-[#2a2185] hover:text-white text-gray-700 rounded p-2 text-sm group transition-colors items-center"
                  >
                    <HiOutlineCreditCard className="h-4 w-4 mr-2" />
                    Billing
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link
                    href="#"
                    className="flex hover:bg-[#2a2185] hover:text-white text-gray-700 rounded p-2 text-sm group transition-colors items-center"
                  >
                    <HiOutlineCog8Tooth className="h-4 w-4 mr-2" />
                    Settings
                  </Link>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
}
