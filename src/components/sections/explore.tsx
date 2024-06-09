import { cn } from "@/lib/utils";
import { HeartIcon, MapPinIcon, FolderArrowDownIcon, ArrowsPointingOutIcon, BookmarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { Badge } from "../badge";
import TitleSection from "../title-section";

const SITES = [
  {
    id: 1,
    thumbnail: process.env.NEXT_PUBLIC_BASE_URL + '/assets/images/explore/e1.jpg',
    title: 'Tommy Helfinger Bar',
    info: 'Best Rated',
    rate: 5,
    total_ratings: 10,
    form: '5$-300$',
    type: 'Restaurant',
    avatar: process.env.NEXT_PUBLIC_BASE_URL + '/assets/images/explore/person.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua....',
    status: 'Close Now',
  },
  {
    id: 2,
    thumbnail: process.env.NEXT_PUBLIC_BASE_URL + '/assets/images/explore/e2.jpg',
    title: 'Swim And Dine Resort',
    info: 'Featured',
    rate: 4.5,
    total_ratings: 8,
    form: '50$-500$',
    type: 'Hotel',
    avatar: process.env.NEXT_PUBLIC_BASE_URL + '/assets/images/explore/person.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua....',
    status: 'Open Now',
  },
  {
    id: 3,
    thumbnail: process.env.NEXT_PUBLIC_BASE_URL + '/assets/images/explore/e3.jpg',
    title: 'Europe Tour',
    info: 'Best Rated',
    rate: 5,
    total_ratings: 15,
    form: '5k$-10k$',
    type: 'Destination',
    avatar: process.env.NEXT_PUBLIC_BASE_URL + '/assets/images/explore/person.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua....',
    status: 'Close Now',
  },
  {
    id: 4,
    thumbnail: process.env.NEXT_PUBLIC_BASE_URL + '/assets/images/explore/e4.jpg',
    title: 'Banglow With Swiming Pool',
    info: 'Most View',
    rate: 5,
    total_ratings: 10,
    form: '10k$-15k$',
    type: 'Real Estate',
    avatar: process.env.NEXT_PUBLIC_BASE_URL + '/assets/images/explore/person.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua....',
    status: 'Close Now',
  },
  {
    id: 5,
    thumbnail: process.env.NEXT_PUBLIC_BASE_URL + '/assets/images/explore/e5.jpg',
    title: 'Vintage Car Expo',
    info: 'Most View',
    rate: 4.2,
    total_ratings: 8,
    form: '500$-1200$',
    type: 'Automotion',
    avatar: process.env.NEXT_PUBLIC_BASE_URL + '/assets/images/explore/person.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua....',
    status: 'Open Now',
  },
  {
    id: 6,
    thumbnail: process.env.NEXT_PUBLIC_BASE_URL + '/assets/images/explore/e6.jpg',
    title: 'Thailand Tour',
    info: 'Best Rated',
    rate: 5,
    total_ratings: 15,
    form: '5k$-10k$',
    type: 'Destination',
    avatar: process.env.NEXT_PUBLIC_BASE_URL + '/assets/images/explore/person.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua....',
    status: 'Close Now',
  },
]

const Explore = () => {
  return (<>
    <section className="section bg-gray-50">

      <TitleSection
        title="EXPLORE"
        description="Explore New place, food, culture around the world and many more"
      />

      <div className="container mt-[78px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {SITES.map(site => <div key={site.id} className="bg-white hover:shadow-md rounded-sm border border-[#edeff1] group">
            <div className="relative">
              <Image src={site.thumbnail} alt={site.title} width={370} height={270} className="w-full"/>

              <div className="flex opacity-0 group-hover:opacity-100 justify-between duration-700 absolute right-2 left-2 -bottom-1 group-hover:bottom-4">
                <Badge color="red">{site.info}</Badge>

                <div className="flex space-x-1.5">
                  <div className="bg-gray-900 p-1 text-white">
                    <ArrowsPointingOutIcon className="size-5" aria-hidden="true"/>
                  </div>
                  <div className="bg-gray-900 p-1 text-white">
                    <BookmarkIcon className="size-5" aria-hidden="true"/>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6">
              <a href="#">
                <h3 className="font-[500]">{site.title}</h3>
              </a>

              <div className="flex flex-wrap mt-4 mb-5 text-xs space-x-[10px] text-[#777f85]">
                <div>
                  <Badge color={cn(
                    site.rate == 5 && 'green',
                    site.rate >= 4.5 && site.rate < 5 && 'orange',
                    site.rate < 4.5 && 'yellow',
                  ) as 'orange' | 'green' | 'yellow'}>{site.rate.toFixed(1)}</Badge>
                </div>
                <span>{site.total_ratings} ratings</span>
                <span className="border-x px-[5px]">Form <span className="text-primary">{site.form}</span></span>
                <span>{site.type}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-6 pb-7 border-b border-[#e1e5eb]">
                <div className="mb-2 sm:mb-0">
                  <Image src={site.avatar} alt="avatar" width={40} height={40}/>
                </div>
                <p className="text-xs text-[#767f86] sm:col-span-5">{site.description}</p>
              </div>

              <div className="mt-5 grid grid-cols-1 sm:grid-cols-3">
                <p className={cn(
                  'text-xs',
                  site.status === 'Close Now' ? 'text-primary' : 'text-green-500'
                )}>{site.status}</p>

                <div className="mt-3 sm:mt-0 sm:col-span-2 space-x-6 flex sm:justify-end text-[#767f86]">
                  <MapPinIcon className={cn(
                    'size-3.5',
                    site.status === 'Close Now' ? 'hover:text-primary' : 'hover:text-green-500'
                  )} aria-hidden="true"/>
                  <FolderArrowDownIcon className={cn(
                    'size-3.5',
                    site.status === 'Close Now' ? 'hover:text-primary' : 'hover:text-green-500'
                  )} aria-hidden="true"/>
                  <HeartIcon className={cn(
                    'size-3.5',
                    site.status === 'Close Now' ? 'hover:text-primary' : 'hover:text-green-500'
                  )} aria-hidden="true"/>
                </div>
              </div>
            </div>
          </div>)}
        </div>
      </div>
    </section>
  </>);
}

export default Explore;