import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react';
import "../index.css";

function Header() {
  const [showmenu, setmenushow] = useState(false);

  return (
    <>
      {/* Sticky header always visible, but not covering content */}
      <header className="sticky top-0  flex justify-between items-center px-5 bg-maincolor py-5 border-b-2">
        <a href="#" className="font-bold text-4xl text-white">
          VIGNESH
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex text-white cursor-pointer gap-6">
            <li className="hover:text-amber-500 hover:scale-110"><a href="/#content">HOME</a></li>
            <li className="hover:text-amber-500 hover:scale-110"><a href="/#about">ABOUT US</a></li>
            <li className="hover:text-amber-500 hover:scale-110"><a href="/#resume">RESUME</a></li>
            <li className="hover:text-amber-500 hover:scale-110"><a href="/#project">PROJECT</a></li>
            <li className="hover:text-amber-500 hover:scale-110"><a href="/#contact">CONTACT</a></li>
          </ul>
        </nav>

        {/* Mobile Nav + Overlay */}
        {showmenu && (
          <>
            {/* Overlay */}
            <div
              className="fixed  bg-black bg-opacity-50 z-40"
              onClick={() => setmenushow(false)}  // click overlay to close
            ></div>

            {/* Mobile Nav */}
            <nav className="absolute top-full left-0 w-full bg-gray-700 z-50 md:hidden">
              <ul
                onClick={() => setmenushow(false)}
                className="flex flex-col text-white text-center "
              >
                <li className=' hover:text-orange-500 hover:scale-110'><a href="/#content">HOME</a></li>
                <li className=' hover:text-orange-500 hover:scale-110'><a href="/#about">ABOUT US</a></li>
                <li className=' hover:text-orange-500 hover:scale-110'><a href="/#resume">RESUME</a></li>
                <li className=' hover:text-orange-500 hover:scale-110'><a href="/#project">PROJECT</a></li>
                <li className=' hover:text-orange-500 hover:scale-110'><a href="/#contact">CONTACT</a></li>
              </ul>
            </nav>
          </>
        )}

        {/* Toggle Button */}
        <button
          onClick={() => setmenushow(!showmenu)}
          className="block md:hidden z-50"
          aria-label="Toggle Menu"
        >
          <Bars3Icon className="text-white h-6 w-6" />
        </button>
      </header>
    </>
  );
}

export default Header;
