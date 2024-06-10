
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
]