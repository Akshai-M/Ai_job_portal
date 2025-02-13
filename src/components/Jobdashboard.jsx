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
