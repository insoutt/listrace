import { cn } from "@/lib/utils";
import { HeartIcon, MapPinIcon, FolderArrowDownIcon, ArrowsPointingOutIcon, BookmarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { Badge } from "../badge";
import TitleSection from "../title-section";
import ApiService from "@/services/ApiService";
import { Place } from "@/data";
import FetchError from "../fetch-error";

const Explore = async () => {
  let places: Place[] | null = []
  try {
    places = await ApiService.getPlaces();
  } catch (error) {
    places = null;
  }

  return (<>
    <section className="section bg-gray-50">
      <TitleSection
        title="EXPLORE"
        description="Explore New place, food, culture around the world and many more"
      />

      <div className="container mt-[78px]">
        {places === null && <FetchError/>}
        {places && <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {places.map(site => <div key={site.id} className="bg-white hover:shadow-md rounded-sm border border-[#edeff1] group">
            <div className="relative">
              <Image src={site.thumbnail} alt={site.title} width={370} height={270} className="w-full"/>

              <div className="flex opacity-0 group-hover:opacity-100 justify-between duration-700 absolute right-2 left-2 -bottom-1 group-hover:bottom-4">
                <div>
                  <Badge color="red">{site.info}</Badge>
                </div>

                <div className="flex space-x-1.5">
                  <div className="bg-gray-900 p-1 text-white hover:text-blue-500">
                    <ArrowsPointingOutIcon className="size-4" aria-hidden="true"/>
                  </div>
                  <div className="bg-gray-900 p-1 text-white hover:text-blue-500">
                    <BookmarkIcon className="size-4" aria-hidden="true"/>
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
        </div>}
      </div>
    </section>
  </>);
}

export default Explore;