'use client'

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

export const NAV_ITEMS = [
  {
    id: 1,
    title: 'Home',
    url: '#',
  },
  {
    id: 2,
    title: 'How it works',
    url: '#',
  },
  {
    id: 3,
    title: 'Explore',
    url: '#',
  },
  {
    id: 4,
    title: 'Review',
    url: '#',
  },
  {
    id: 5,
    title: 'Blog',
    url: '#',
  },
  {
    id: 6,
    title: 'Contact',
    url: '#',
  },

];
const Header = () => {

  const [expandNav, setExpandNav] = useState(false);

  const onSroll = () => {
    if(window.scrollY <= 40) {
      setExpandNav(false);
    }
    if(window.scrollY > 40) {
      setExpandNav(true);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', onSroll);

    return () => {
      window.removeEventListener('scroll', onSroll);
    }
  }, []);

  return (<div style={{display: 'unset'}}>
   <Disclosure as="nav" className="bg-white sticky z-50 top-0 shadow-[0_2px_5px_rgba(0,0,0,.2)]">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="relative flex justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                {/* Mobile menu button */}
                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 focus:outline-none border border-primary">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block size-6 text-primary" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block size-6 text-primary" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
              <div className="flex flex-1 items-center justify-center lg:items-stretch lg:justify-between">
                <a href='#' className="flex flex-shrink-0 items-center text-xl font-bold py-5 lg:py-9">
                  <span>List<span className='text-primary'>Race</span></span>
                </a>
                <ul className="hidden lg:flex">
                  {NAV_ITEMS.map(item => (<li key={item.id}>
                    <a href="#"
                    className={cn(
                      'inline-block items-center text-sm font-[500] text-gray-400 hover:text-primary duration-500 uppercase py-9',
                      item.id === 1 && 'text-primary',
                      expandNav ? 'px-5' : 'px-3',
                    )}
                  >
                    {item.title}
                  </a>

                  </li>))}
                </ul>
              </div>
            </div>
          </div>

          <DisclosurePanel className="lg:hidden">
            <div className="space-y-1 pb-4 pt-2">
            {NAV_ITEMS.map(item => (<DisclosureButton key={`it-${item.id}`}
                as="a"
                href="#"
                className={cn(
                  'block text-sm font-[500] text-gray-400 p-4',
                  item.id === 1 && 'text-primary'
                )}
              >
                {item.title}
              </DisclosureButton>))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  </div>);
}

export default Header;