'use client'

import Counter from "../counter";

const STATS = [
  {
    id: 1,
    title: 90,
    description: 'Listings',
  },
  {
    id: 2,
    title: 40,
    description: 'Listing Categories',
  },
  {
    id: 3,
    title: 65,
    description: 'Visitors',
  },
  {
    id: 4,
    title: 50,
    description: 'Happy Clients',
  },
]
const Statistics = () => {
  return (<>
    <section className="relative pt-32 pb-28 bg-[url('/assets/images/counter-banner.jpg')] bg-center bg-no-repeat bg-cover bg-overlay before:bg-[rgba(75,75,75,.60)]">
      <div className="container relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-center">
          {STATS.map(stat => <div key={stat.id} className="text-white mb-8">
            <div className="text-[40px]">
              <Counter total={stat.title}/> k+
            </div>
            <div className="font-[500] text-lg">{stat.description}</div>
          </div>)}
        </div>
      </div>
    </section>
  </>);
}

export default Statistics;