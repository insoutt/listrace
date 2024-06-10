'use client'

import { PhoneIcon } from "@heroicons/react/20/solid";
import { NAV_ITEMS } from "./header";

const SOCIAL = [
  {
    id: 1,
    icon: (<svg fill="currentcolor" height="12" width="12" id="Layer_1" viewBox="0 0 310 310">
   <g id="XMLID_834_">
     <path id="XMLID_835_" d="M81.703,165.106h33.981V305c0,2.762,2.238,5,5,5h57.616c2.762,0,5-2.238,5-5V165.765h39.064
       c2.54,0,4.677-1.906,4.967-4.429l5.933-51.502c0.163-1.417-0.286-2.836-1.234-3.899c-0.949-1.064-2.307-1.673-3.732-1.673h-44.996
       V71.978c0-9.732,5.24-14.667,15.576-14.667c1.473,0,29.42,0,29.42,0c2.762,0,5-2.239,5-5V5.037c0-2.762-2.238-5-5-5h-40.545
       C187.467,0.023,186.832,0,185.896,0c-7.035,0-31.488,1.381-50.804,19.151c-21.402,19.692-18.427,43.27-17.716,47.358v37.752H81.703
       c-2.762,0-5,2.238-5,5v50.844C76.703,162.867,78.941,165.106,81.703,165.106z"/>
   </g>
   </svg>),
    url: '#',
  },
  {
    id: 2,
    icon: (<svg fill="currentcolor" width="12" height="12" viewBox="0 0 310 310"><path d="M302.973 57.388a117.51 117.51 0 0 1-14.993 5.463c6.057-6.85 10.675-14.91 13.494-23.73a5 5 0 0 0-7.313-5.824c-10.865 6.444-22.587 11.075-34.878 13.783a66.88 66.88 0 0 0-46.581-18.983c-36.695 0-66.549 29.853-66.549 66.547 0 2.89.183 5.764.545 8.598C101.163 99.244 58.83 76.863 29.76 41.204c-1.036-1.271-2.632-1.956-4.266-1.825a5 5 0 0 0-3.93 2.467c-5.896 10.117-9.013 21.688-9.013 33.461 0 16.035 5.725 31.249 15.838 43.137a56.37 56.37 0 0 1-8.907-3.977c-1.529-.851-3.395-.838-4.914.033a5 5 0 0 0-2.513 4.224c-.007.295-.007.59-.007.889 0 23.935 12.882 45.484 32.577 57.229a57.37 57.37 0 0 1-5.063-.735 5 5 0 0 0-4.681 1.597c-1.17 1.32-1.557 3.16-1.018 4.84 7.29 22.76 26.059 39.501 48.749 44.605-18.819 11.787-40.34 17.961-62.932 17.961a120.4 120.4 0 0 1-14.095-.826c-2.305-.274-4.509 1.087-5.294 3.279a5 5 0 0 0 2.008 5.895c29.023 18.609 62.582 28.445 97.047 28.445 67.754 0 110.139-31.95 133.764-58.753 29.46-33.421 46.356-77.658 46.356-121.367a181.25 181.25 0 0 0-.084-5.508c11.623-8.757 21.63-19.355 29.773-31.536a5 5 0 0 0-.33-5.998c-1.431-1.704-3.816-2.255-5.852-1.353z"/></svg>),
    url: '#',
  },
  {
    id: 3,
    icon: (<svg fill="currentColor" width="12" height="12" viewBox="0 0 20 20"><path d="M20 20h-4v-6.999c0-1.92-.847-2.991-2.366-2.991-1.653 0-2.634 1.116-2.634 2.991V20H7V7h4v1.462s1.255-2.202 4.083-2.202S20 7.986 20 11.558V20h0zM2.442 4.921C1.093 4.921 0 3.819 0 2.46S1.093 0 2.442 0s2.441 1.102 2.441 2.46S3.79 4.921 2.442 4.921h0zM0 20h5V7H0v13z" fillRule="evenodd"/></svg>),
    url: '#',
  },
  {
    id: 4,
    icon: (<svg fill="currentColor" width="22" height="22" viewBox="0 0 24 24"><path d="M7.8 17.9c-3.2 0-5.9-2.6-5.9-5.9s2.6-5.9 5.9-5.9c1.5 0 2.9.6 4 1.5l-1.7 1.7c-.7-.5-1.5-.8-2.3-.8-2 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5c1.6 0 2.8-1 3.2-2.3H7.8V11h5.5c.5 2.3-.6 6.9-5.5 6.9zM19.9 13v2.1h-2.1V13h-2.1v-2h2.1V8.9h2.1V11H22v2h-2.1z"/></svg>),
    url: '#',
  },
];

const FOOTER_ITEMS = [
  ...NAV_ITEMS.slice(1),
  {
    key: 'account',
    title: 'My Account',
    url: '#',
  }
];

const Footer = () => {
  return (<>
    <footer className="container">
      <div className="flex justify-between flex-wrap py-[45px]">
        <div className="mt-5 sm:mt-0">
          <a href='#' className="flex flex-shrink-0 items-center text-xl font-bold">
            <span>List<span className='text-primary'>Race</span></span>
          </a>
        </div>
        <div className="mt-5 sm:mt-0">
          <ul className="flex flex-wrap">
          {FOOTER_ITEMS.map(item => (<li key={item.key}>
            <a href="#"
                className="inline-block items-center text-sm font-[500] pr-4 text-[#859098] hover:text-primary duration-500 uppercase">
              {item.title}
            </a>
          </li>))}
          </ul>
        </div>
      </div>

      <div className="p-5 border-t grid grid-cols-1 sm:grid-cols-12 text-gray-400 sm:space-x-4">
        <div className="col-span-5 mt-5">
          <p className="text-sm leading-6">
            © Copyright. Designed And Developed By <a className="hover:text-primary duration-300" href="https://www.linkedin.com/in/elvis-betancourt/">@insoutt</a>
          </p>
        </div>
        <div className="sm:col-start-7 sm:col-end-13 mt-5">
          <ul className="flex items-center justify-end space-x-4">
            <li>
              <a href="tel:+12227776565" className="flex items-center space-x-1 hover:text-primary duration-300">
                <PhoneIcon className="size-4" aria-hidden="true"/> <span className="font-thin text-sm">+1 (222) 777 8888</span>
              </a>
            </li>
            {SOCIAL.map(item => <li key={item.id}>
              <a className="bg-gray-100 hover:bg-primary hover:text-white rounded-full size-9 flex justify-center items-center duration-300" href={item.url}>{item.icon}</a>
            </li>)}
          </ul>
        </div>
      </div>
    </footer>
  </>);
}

export default Footer;