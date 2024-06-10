'use client'

import Image from "next/image";
import TitleSection from "../title-section";
import Slider, { Settings } from "react-slick";
import { StarIcon } from "@heroicons/react/20/solid";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import ApiService from "@/services/ApiService";
import { Review } from "@/data";


const Reviews = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [reviews, setReviews] = useState<Review[]>([]);

  const settings: Settings = {
    infinite: true,
    centerMode: true,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplaySpeed: 1500,
    nextArrow: <></>,
    prevArrow: <></>,
    responsive: [
      {
        breakpoint: 1440,
        settings: { slidesToShow:3 }
      },
      {

        breakpoint: 1024,
        settings: { slidesToShow:2 }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint:767,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  useEffect(() => {
    fetchReviews();
  }, [])

  const fetchReviews = () => {
    setIsLoading(true);
    ApiService.getReviews()
      .then(reviews => setReviews(reviews))
      .catch(error => console.log(error))
      .finally(() => setIsLoading(false));
  }

  return (<>
    <section className="section">
      <TitleSection
        title="CLIENTS REVIEWS"
        description="What our client say about us"
      />
      <div className="mt-9">
        {isLoading && <div className="flex flex-wrap overflow-hidden h-[250px] justify-center space-x-4">
          {(new Array(10).fill(1).map((_i, index) => <div key={index} className="w-[300px] shadow py-12 px-7 mt-2 mb-8">
          <div>
              <div className="flex items-center space-x-4">
                <div>
                  <div className="size-9 rounded-full bg-loading"></div>
                </div>
                <div>
                  <h3 className="text-lg font-[500] text-gray-900 h-4 w-40 bg-loading"></h3>
                  <p className="text-gray-500 text-sm mt-2 bg-loading h-4 w-30"></p>
                  <div className="flex items-center space-x-1 mt-2">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={cn('text-gray-300 animate-pulse size-4 flex-shrink-0')}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="mt-4 bg-loading h-4"></p>
              <p className="mt-2 bg-loading h-4"></p>
              <p className="mt-2 bg-loading h-4"></p>
            </div>
          </div>))}
        </div>}

        {!isLoading && !!reviews.length && <Slider {...settings}>
          {reviews.map(item => <div key={item.id} className="py-12 px-7 w-[400px] review shadow duration-300 hover:shadow-md;">
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
        </Slider>}
      </div>
    </section>
  </>);
}

export default Reviews;