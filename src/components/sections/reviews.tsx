'use client'

import Image from "next/image";
import TitleSection from "../title-section";
import Slider, { Settings } from "react-slick";
import { StarIcon } from "@heroicons/react/20/solid";
import { cn } from "@/lib/utils";

const REVIEWS = [
  {
    id: 1,
    rating: 5,
    name: 'Tom Leakar',
    avatar: process.env.NEXT_PUBLIC_BASE_URL + '/assets/images/clients/c1.png',
    location: 'London, UK',
    review: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.',
  },
  {
    id: 2,
    rating: 4,
    name: 'Monirul Islam',
    avatar: process.env.NEXT_PUBLIC_BASE_URL + '/assets/images/clients/c2.png',
    location: 'London, UK',
    review: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.',
  },
  {
    id: 3,
    rating: 5,
    name: 'Tom Leakar',
    avatar: process.env.NEXT_PUBLIC_BASE_URL + '/assets/images/clients/c3.png',
    location: 'London, UK',
    review: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.',
  },
  {
    id: 4,
    rating: 3.9,
    name: 'Tom Leakar',
    avatar: process.env.NEXT_PUBLIC_BASE_URL + '/assets/images/clients/c4.png',
    location: 'London, UK',
    review: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.',
  },
  {
    id: 5,
    rating: 5,
    name: 'Tom Leakar',
    avatar: process.env.NEXT_PUBLIC_BASE_URL + '/assets/images/clients/c1.png',
    location: 'London, UK',
    review: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.',
  },
  {
    id: 6,
    rating: 4,
    name: 'Monirul Islam',
    avatar: process.env.NEXT_PUBLIC_BASE_URL + '/assets/images/clients/c2.png',
    location: 'London, UK',
    review: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.',
  },
  {
    id: 7,
    rating: 5,
    name: 'Tom Leakar',
    avatar: process.env.NEXT_PUBLIC_BASE_URL + '/assets/images/clients/c3.png',
    location: 'London, UK',
    review: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.',
  },
  {
    id: 8,
    rating: 3.9,
    name: 'Tom Leakar',
    avatar: process.env.NEXT_PUBLIC_BASE_URL + '/assets/images/clients/c4.png',
    location: 'London, UK',
    review: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.',
  },
]
const Reviews = () => {
  const settings: Settings = {
    infinite: true,
    centerMode: true,
    autoplay:true,
    slidesToShow: 5,
    slidesToScroll: 3,
    autoplaySpeed:1500,
    responsive: [
      {
        breakpoint:1440,
        settings: { slidesToShow:3 }
      },
      {

        breakpoint: 1024,
        settings: { slidesToShow:2 }
      },
      {
        breakpoint:991,
        settings: {
          slidesToShow:2,
          centerMode:false,
        },
      },
      {
        breakpoint:767,
        settings: { slidesToShow:1 }
      }
    ]
  };

  return (<>
    <section className="section">
      <TitleSection
        title="CLIENTS REVIEWS"
        description="What our client say about us"
      />
      <div className="mt-9">
        <Slider {...settings}>
          {REVIEWS.map(item => <div key={item.id} className="py-12 px-7 w-[400px] review shadow duration-300 hover:shadow-md;">
            <div>
              <div className="flex items-center space-x-4">
                <div>
                  <Image src={item.avatar} alt="avatar" width={50} height={50}/>
                </div>
                <div>
                  <h3 className="text-lg font-[500] text-gray-900">{item.name}</h3>
                  <p className="text-gray-500 text-sm mt-2">{item.location}</p>
                  <div className="flex items-center space-x-1 mt-2">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={cn(
                          item.rating > rating ? 'text-yellow-400' : 'text-gray-200',
                          'size-4 flex-shrink-0'
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-500">{item.review}</p>
            </div>
          </div>)}
        </Slider>
      </div>
    </section>
  </>);
}

export default Reviews;