import { MapPinIcon, LightBulbIcon } from "@heroicons/react/20/solid";
import TitleSection from "../title-section";

const items = [
  {
    id: 1,
    icon: LightBulbIcon,
    title: 'Choose what to Do',
    description: 'Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt ut laboremagna aliqua.',
    url: '#',
  },
  {
    id: 2,
    icon: LightBulbIcon,
    title: 'Find what you want',
    description: 'Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt ut laboremagna aliqua.',
    url: '#',
  },
  {
    id: 3,
    icon: MapPinIcon,
    title: 'Explore amazing Place',
    description: 'Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt ut laboremagna aliqua.',
    url: '#',
  },
]
const HowItWorks = () => {
  return (<>
    <section className="container text-gray-600 pb-24">
      <TitleSection
        title="HOW IT WORKS"
        description="Learn More about how our website works"
      />

      <div className="mt-[72px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {items.map(({id, icon: Icon, title, description}) => (<div key={id} className="text-center rounded-sm border hover:bg-primary shadow py-[50px] px-[42px] group duration-500">
            <div className="rounded-full bg-gray-100 group-hover:bg-white size-20 mx-auto flex items-center justify-center">
              <Icon className="size-[35px] group-hover:fill-primary" aria-hidden="true"/>
            </div>
            <a href="#">
              <h2 className="mt-[35px] mb-5 text-lg group-hover:text-white">{title}</h2>
            </a>
            <p className="text-gray-600 group-hover:text-white mb-[25px] text-sm">{description}</p>
            <div>
              <button className="border px-4 py-2 text-xs group-hover:bg-white group-hover:text-primary">Read More</button>
            </div>
          </div>))}
        </div>
      </div>
    </section>
  </>);
}

export default HowItWorks;