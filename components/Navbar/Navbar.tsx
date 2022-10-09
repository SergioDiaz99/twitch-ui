import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useState, useEffect } from "react";
import twitchLogo from "../../public/assets/logo.png";
import { Menu, Transition } from "@headlessui/react";
import { BsPerson, BsSearch, BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useSession, signIn, signOut } from "next-auth/react";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const { data: session } = useSession();
  const [sessionImage, setSessionImage] = useState<string | any>();

  useEffect(() => {
    setSessionImage(session?.user?.image);
  }, [session]);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="fixed z-[100] h-14 w-full flex flex-nowrap items-center p-4 bg-primary mb-[2px]">
      <div className="flex grow items-center justify-start">
        <Link href="/">
          <a className="flex">
            {/*eslint-disable-next-line @next/next/no-img-element*/}
            <img
              className="cursor-pointer z-[100] md:hover:translate-x-1 md:hover:-translate-y-1 duration-100"
              src="/assets/logo.png"
              alt="twitch logo"
              width={25}
              height={25}
            />
          </a>
        </Link>
        <p className="p-4 hover:text-twitchColor cursor-pointer">Following</p>
        <p className="p-4 hover:text-twitchColor cursor-pointer">Browse</p>
        <div className="p-4">
          <Menu as="div" className="relative text-left">
            <div className="flex">
              <Menu.Button>
                <BsThreeDotsVertical size={20} />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="origin-top-right absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-[#0e0e10] ring-1 ring-white ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-500 text-gray-100"
                            : "text-gray-200",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Settings
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-500 text-gray-100"
                            : "text-gray-200",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Support
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-500 text-gray-100"
                            : "text-gray-200",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        License
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
      <div className="hidden md:flex grow-[2] items-center justify-center">
        <div className="bg-gray-600 text-white flex justify-between items-center max-w-[400px] w-full m-auto p-2 rounded-2xl">
          <div className="">
            <input
              type="text"
              className="bg-transparent border-none text-white focus:outline-none"
              placeholder="Search"
            />
          </div>
          <div>
            <BsSearch />
          </div>
        </div>
      </div>
      {/*Right side */}
      <div className="hidden md:flex grow items-center justify-end">
        {session ? (
          <div className="flex items-center justify-center flex-row">
            <p className="pr-4">{session.user?.name}</p>
            <Menu as="div" className="relative text-left">
            <div className="flex">
              <Menu.Button>
                {sessionImage && (
                  <div className="">
                    <Image className="rounded-full" src={sessionImage} alt="github profile image" width={30} height={30}/>
                  </div>
                )}
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-[#0e0e10] ring-1 ring-white ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      // eslint-disable-next-line @next/next/no-html-link-for-pages
                      <a
                        href="/account"
                        className={classNames(
                          active
                            ? "bg-gray-500 text-gray-100"
                            : "text-gray-200",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Account
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <p
                        className={classNames(
                          active
                            ? "bg-gray-500 text-gray-100"
                            : "text-gray-200",
                          "block px-4 py-2 text-sm"
                        )}
                        onClick={() => signOut()}
                      >
                        Log Out
                      </p>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
          </div>
        ) : (
          <div className="flex items-center">
            <Link href="/account">
              <button className="px-4 py-[6px] rounded-lg font-bold bg-gray-700 mr-2">
                Log In
              </button>
            </Link>
            <BsPerson size={30} />
          </div>
        )}
      </div>
      {/*Hamburguer Menu */}
      <div
        onClick={handleNav}
        className="block md:hidden z-[100] cursor-pointer"
      >
        {!nav ? <AiOutlineMenu size={25} /> : <AiOutlineClose size={25} />}
      </div>

      {/*Mobile Menu */}
      <div
        className={
          nav
            ? "md:hidden fixed top-0 left-0 w-full h-full bg-primary flex justify-center items-center ease-in duration-300"
            : "md:hidden fixed top-[-100%] left-0 w-full h-full bg-primary flex justify-center items-center ease-in duration-300"
        }
      >
        <ul className="text-center">
          <li onClick={() => setNav(false)} 
          className="p-4 text-3xl font-bold">
            <Link href="/">Home</Link>
          </li>
          <li onClick={() => setNav(false)} className="p-4 text-3xl font-bold">
            <Link href="/#live">Live Channels</Link>
          </li>
          <li onClick={() => setNav(false)} className="p-4 text-3xl font-bold">
            <Link href="/#categories">Top Categories</Link>
          </li>
          <li onClick={() => setNav(false)} className="p-4 text-3xl font-bold">
            <Link href="/account">Account</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
