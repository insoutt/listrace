import Image from "next/image";
import TitleSection from "../title-section";

const NEWS = [
  {
    id: 1,
    thumbnail: process.env.NEXT_PUBLIC_BASE_URL + '/assets/images/blog/b1.jpg',
    title: 'How to find your Desired Place more quickly',
    author: 'ADMIN',
    date: 'March 2018',
    summary: 'Lorem ipsum dolor sit amet, consectetur de adipisicing elit, sed do eiusmod tempore incididunt ut labore et dolore magna.',
  },
  {
    id: 2,
    thumbnail: process.env.NEXT_PUBLIC_BASE_URL + '/assets/images/blog/b2.jpg',
    title: 'How to find your Desired Place more quickly',
    author: 'ADMIN',
    date: 'March 2018',
    summary: 'Lorem ipsum dolor sit amet, consectetur de adipisicing elit, sed do eiusmod tempore incididunt ut labore et dolore magna.',
  },
  {
    id: 3,
    thumbnail: process.env.NEXT_PUBLIC_BASE_URL + '/assets/images/blog/b3.jpg',
    title: 'How to find your Desired Place more quickly',
    author: 'ADMIN',
    date: 'March 2018',
    summary: 'Lorem ipsum dolor sit amet, consectetur de adipisicing elit, sed do eiusmod tempore incididunt ut labore et dolore magna.',
  },
];

const News = () => {
  return (<>
    <section className="pt-30 pb-24">
      <TitleSection
        title="NEWS AND ARTICLES"
        description="Always up to date with our latest News and Articles"
      />

      <div className="container pt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {NEWS.map(item => <div key={item.id} className="shadow hover:shadow-lg duration-500 group">
            <div>
              <Image src={item.thumbnail} alt={item.title} width={370} height={250} className="w-full"/>
            </div>
            <div className="p-6">
              <a href="#">
                <h3 className="font-[500] group-hover:text-primary">{item.title}</h3>
              </a>
              <div className="flex space-x-2 divide-x text-gray-500 text-sm mt-3 mb-5">
                <div>
                  Posted By <span className="text-gray-900 font-[500]">{item.author}</span>
                </div>
                <div className="pl-3">
                  {item.date}
                </div>
              </div>
              <p className="text-gray-500 text-sm">{item.summary}</p>
            </div>
          </div>)}
        </div>
      </div>
    </section>
  </>);
}

export default News;