import { ListBulletIcon } from "@heroicons/react/24/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Home = () => {
  return (<>
    <section className="relative bg-[url('/assets/images/home.jpg')] h-[800px] bg-no-repeat bg-cover bg-center bg-overlay before:bg-[rgba(65,73,89,.65)] text-white">
      <div className="container relative">
        <div className="pt-20 md:pt-[155px] text-center text-balance">
          <h2 className="text-2xl md:text-[40px] md:leading-[50px] font-bold">BEST PLACE TO FIND AND EXPLORE THAT ALL YOU NEED</h2>
          <p className="mt-6 text-lg">Find Best Place, Restaurant, Hotel, Real State and many more think in just One click</p>
        </div>
        <div className="mt-16">
          <div className="flex flex-wrap justify-center lg:px-12">
            {/* Form */}
            <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 mt-4 text-gray-900 p-5 md:p-0 md:h-[70px] w-full lg:w-10/12 rounded-sm">
              <div className="relative flex justify-between flex-col md:flex-row md:w-1/2 items-center bg-white py-5 md:py-0 px-7">
                <h3 className="font-[500]">What?</h3>
                <input type="text" name="place" placeholder="Ex: palce, restaurant, food, automobile" className="text-gray-600 ml-2 outline-none h-[70px]"/>
                <div className="absolute md:relative right-5 md:right-0">
                  <ListBulletIcon className="size-7" aria-hidden="true" />
                </div>
              </div>
              <div className="relative flex justify-between flex-col md:flex-row md:w-1/2 items-center bg-white py-5 md:py-0 px-7">
                <h3 className="font-[500]">Location</h3>
                <input type="text" name="place" placeholder="Ex: palce, restaurant, food, automobile" className="text-gray-600 ml-2 outline-none h-[70px]"/>
                <div className="absolute md:relative right-5 md:right-0">
                  <svg width={20} height={20} viewBox="0 0 512 512"><path d="M256 0c17.7 0 32 14.3 32 32V66.7C368.4 80.1 431.9 143.6 445.3 224H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H445.3C431.9 368.4 368.4 431.9 288 445.3V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.3C143.6 431.9 80.1 368.4 66.7 288H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H66.7C80.1 143.6 143.6 80.1 224 66.7V32c0-17.7 14.3-32 32-32zM128 256a128 128 0 1 0 256 0 128 128 0 1 0 -256 0zm128-80a80 80 0 1 1 0 160 80 80 0 1 1 0-160z"/></svg>
                </div>
              </div>
            </div>
            {/* Submit */}
            <div className="mt-4">
              <button className="bg-primary hover:bg-red-500 ml-7 h-[70px] px-5 rounded-sm flex items-center space-x-3 text-sm">
                <span>Search</span> <MagnifyingGlassIcon className="size-4"/>
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  </>);
}

export default Home;