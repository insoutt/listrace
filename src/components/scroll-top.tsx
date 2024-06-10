'use client'

import { ChevronUpIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

const ScrollTop = () => {

  const [show, setShow] = useState(false);

  const onSroll = () => {
    const percent = window.scrollY / document.body.scrollHeight;
    setShow(percent > 0.5)
  }

  useEffect(() => {
    window.addEventListener('scroll', onSroll);

    return () => {
      window.removeEventListener('scroll', onSroll);
    }
  }, []);

  const scrollTop = () => {
    window.scrollTo({top:0, behavior: 'smooth'})
  }

  if(!show) return null;

  return (<>
    <button onClick={scrollTop} className="fixed bottom-5 right-5 bg-primary rounded-full p-2 size-10 flex items-center justify-center">
      <ChevronUpIcon className="size-5 text-white animate-bounce"/>
    </button>
  </>);
}

export default ScrollTop;