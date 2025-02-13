'use client';

import { MoreVertical, Menu } from 'lucide-react';
import { useState, createContext, useContext } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import LOGO from '@/app/favicon.ico';

const SidebarContext = createContext();

export default function Sidebar() {
  const [expanded, setExpanded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <button
        className="lg:hidden fixed top-4 left-2 z-50 p-2 text-black rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu size={24} />
      </button>

      <aside
        className={`h-screen lg:mt-0 bg-[#E4E4E7] shadow-sm flex flex-col fixed top-0 left-0 z-40
          transition-transform duration-300 ease-in-out lg:max-w-fit lg:relative
          ${isOpen ? 'translate-x-0 w-64 pt-12 rounded ml-2 mb-0 mt-2' : '-translate-x-full lg:translate-x-0 rounded'}`}
        onMouseEnter={() => window.innerWidth >= 1024 && setExpanded(true)}
        onMouseLeave={() => window.innerWidth >= 1024 && setExpanded(false)}
      >
        <nav className="h-full flex flex-col">
          <div className="p-4 pb-2 flex items-center">
            <Image src={LOGO} className="w-10" alt="Logo" />
            <div
              className={`ml-3 transition-all duration-300 ${
                expanded || isOpen ? 'opacity-100 w-auto' : 'opacity-0 w-0'
              }`}
            >
              Skillmarathon
            </div>
          </div>

          <SidebarContext.Provider value={{ expanded, isOpen }}>
            <ul className="flex-1 px-3">
              <SidebarItem icon={<House size={20} />} text="Home" link="/" />
              <SidebarItem icon={<Search size={20} />} text="Find" link="/search" />
              <SidebarItem icon={<Save size={20} />} text="Save" link="/save" />
              <SidebarItem icon={<Telescope size={20} />} text="Browse" link="/browse" />
              <hr className="my-2 border-gray-300" />
              <SidebarItem icon={<Share2 size={20} />} text="Share" link="/billings" />
              <SidebarItem icon={<Wrench size={20} />} text="Setting" link="/settings" />
              <SidebarItem icon={<LifeBuoy size={20} />} text="Help" link="/help" />
            </ul>
          </SidebarContext.Provider>

          <div className="flex p-3">
            <div
              className={`flex justify-between items-center overflow-hidden transition-all duration-300 ${
                expanded || isOpen ? 'w-52 ml-3 opacity-100' : 'w-0 opacity-0'
              }`}
            >
              <div className="leading-4">
                <h4 className="font-semibold">Username</h4>
                <span className="text-xs text-gray-600">user@gmail.com</span>
              </div>
              <MoreVertical size={20} />
            </div>
          </div>
        </nav>
      </aside>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}

function SidebarItem({ icon, text, link }) {
  const isActive = pathname === link;

  return (
    
  );
}
