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
   

    

      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
