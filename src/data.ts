
export interface News {
  id: number
  thumbnail: string
  title: string
  author: string
  date: string
  summary: string
}

export interface Place {
  id: number,
  thumbnail: string
  title: string
  info: string
  rate: number,
  total_ratings: number,
  form: string
  type: string
  avatar: string,
  description: string
  status: string
}

export interface Review {
  id: number
  rating: number
  name: string
  avatar: string
  location: string
  review: string
}

export const REVIEWS: Review[] = [
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
];

export const PLACES: Place[] = [
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
];

export const NEWS: News[] = [
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