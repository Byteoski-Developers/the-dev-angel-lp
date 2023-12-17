export interface ICardData {
  id: number
  title: string
  subtitle: string
  imageSrc: string
}

const cardsData: ICardData[] = [
  {
    id: 1,
    title: 'Find Your Course',
    subtitle:
      "Explore your study options at AUT. With over 250 university programmes, we're sure to share your passion.",
    imageSrc:
      'https://www.aut.ac.nz/__data/assets/file/0020/760133/find-your-course.webp',
  },
  {
    id: 2,
    title: 'Ready to Join Us?',
    subtitle: 'Explore your study options at AUT.',
    imageSrc:
      'https://www.aut.ac.nz/__data/assets/file/0009/760149/ready-to-join-us.webp',
  },
  {
    id: 3,
    title: 'Why Study at NITJ?',
    subtitle:
      'Discover why AUT is one of the best modern universities in the world.',
    imageSrc:
      'https://www.aut.ac.nz/__data/assets/file/0019/760150/why-study-at-aut.webp',
  },
  {
    id: 4,
    title: 'Fees for NITJ Courses',
    subtitle:
      'Find out about tuition fees for AUT courses and how to pay them.',
    imageSrc:
      'https://www.aut.ac.nz/__data/assets/file/0020/760151/international-student-photos-fees-top.webp',
  },
  {
    id: 5,
    title: 'Campus Life',
    subtitle:
      'AUT has three campuses around Auckland. Check out our locations and accommodation.',
    imageSrc:
      'https://www.aut.ac.nz/__data/assets/file/0007/760147/campus-and-accommodation.webp',
  },
  {
    id: 6,
    title: 'News and Events',
    subtitle: 'Check out the latest news and upcoming events at AUT.',
    imageSrc:
      'https://www.aut.ac.nz/__data/assets/file/0003/760152/international-news-and-events-tile.webp',
  },
]

export default cardsData
