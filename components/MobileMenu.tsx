'use client';

import { AlignLeft } from 'lucide-react';
import React, { useState } from 'react';
import SideMenu from './SideMenu';
import { cn } from '@/lib/utils';

const MobileMenu = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsSidebarOpen(prevState => !prevState)}>
        <AlignLeft className='hover:text-darkColor hoverEffect md:hidden hover:cursor-pointer' />
      </button>
      <div className={cn('md:hidden')}>
        <SideMenu
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
      </div>
    </>
  );
};

export default MobileMenu;
