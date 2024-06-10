'use client'

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Transition,
} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

export const NAV_ITEMS = [
  {
    key: 'home',
    title: 'Home',
    url: '#',
  },
  {
    key: 'how-it-works',
    title: 'How it works',
    url: '#',
  },
  {
    key: 'explore',
    title: 'Explore',
    url: '#',
  },
  {
    key: 'review',
    title: 'Review',
    url: '#',
  },
  {
    key: 'blog',
    title: 'Blog',
    url: '#',
  },
  {
    key: 'contact',
    title: 'Contact',
    url: '#',
  },

];
const Header = () => {

  const [expandNav, setExpandNav] = useState(false);
  const [current, setCurrent] = useState('');

  const onSroll = () => {
    NAV_ITEMS.forEach(item => checkSection(item.key));
    if(window.scrollY <= 40) {
      setExpandNav(false);
    }
    if(window.scrollY > 40) {
      setExpandNav(true);
    }
  }

  const checkSection = (id: string) => {
    const element = document.getElementById(id);
    if(!element) return;

    const bounds = element.getBoundingClientRect();
    const offset = 250;
    const isVisible = (offset - bounds.top) > 0 && (offset - bounds.bottom) < 0;

    if(isVisible) {
      setCurrent(id);
    }
  }

  const navigate = (key: string) => {
    const element = document.getElementById(key);

    element?.scrollIntoView({behavior: 'smooth'});
    setCurrent(key);
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
                  {NAV_ITEMS.map(item => (<li key={item.key}>
                    <a href={`/#${item.key}`}
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(item.key);
                    }}
                    className={cn(
                      'inline-block items-center text-sm font-[500] text-gray-400 hover:text-primary duration-500 uppercase py-9',
                      item.key === current && 'text-primary',
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

          <Transition
            enter="duration-300 ease-out"
            enterFrom="opacity-0 -translate-y-6"
            enterTo="opacity-100 translate-y-0"
            leave="duration-300 ease-out"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-6"
          >
            <DisclosurePanel className="lg:hidden">
              <div className="space-y-1 pb-4 pt-2">
              {NAV_ITEMS.map(item => (<DisclosureButton key={`it-${item.key}`}
                  as="a"
                  href={`/#${item.key}`}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(item.key);
                  }}
                  className={cn(
                    'block text-sm font-[500] text-gray-400 p-4',
                    item.key === current && 'text-primary'
                  )}
                >
                  {item.title}
                </DisclosureButton>))}
              </div>
            </DisclosurePanel>
          </Transition>
        </>
      )}
    </Disclosure>
  </div>);
}

export default Header;