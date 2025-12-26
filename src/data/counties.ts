export interface Post {
  id: string
  title: string
  preview: string
}

export interface County {
  name: string
  posts: Post[]
}

const generatePosts = (countyName: string, count: number = 3): Post[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: `${countyName.toLowerCase()}-${i + 1}`,
    title: `${countyName} Example ${i + 1}`,
    preview: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.`
  }))
}

export const oregonCounties: County[] = [
  { name: 'Baker', posts: generatePosts('Baker') },
  { name: 'Benton', posts: generatePosts('Benton') },
  { name: 'Clackamas', posts: generatePosts('Clackamas', 4) },
  { name: 'Clatsop', posts: generatePosts('Clatsop') },
  { name: 'Columbia', posts: generatePosts('Columbia') },
  { name: 'Coos', posts: generatePosts('Coos') },
  { name: 'Crook', posts: generatePosts('Crook') },
  { name: 'Curry', posts: generatePosts('Curry') },
  { name: 'Deschutes', posts: generatePosts('Deschutes', 4) },
  { name: 'Douglas', posts: generatePosts('Douglas') },
  { name: 'Gilliam', posts: generatePosts('Gilliam') },
  { name: 'Grant', posts: generatePosts('Grant') },
  { name: 'Harney', posts: generatePosts('Harney') },
  { name: 'Hood River', posts: generatePosts('Hood River') },
  { name: 'Jackson', posts: generatePosts('Jackson', 4) },
  { name: 'Jefferson', posts: generatePosts('Jefferson') },
  { name: 'Josephine', posts: generatePosts('Josephine') },
  { name: 'Klamath', posts: generatePosts('Klamath') },
  { name: 'Lake', posts: generatePosts('Lake') },
  { name: 'Lane', posts: generatePosts('Lane', 5) },
  { name: 'Lincoln', posts: generatePosts('Lincoln') },
  { name: 'Linn', posts: generatePosts('Linn') },
  { name: 'Malheur', posts: generatePosts('Malheur') },
  { name: 'Marion', posts: generatePosts('Marion', 5) },
  { name: 'Morrow', posts: generatePosts('Morrow') },
  { name: 'Multnomah', posts: generatePosts('Multnomah', 6) },
  { name: 'Polk', posts: generatePosts('Polk') },
  { name: 'Sherman', posts: generatePosts('Sherman') },
  { name: 'Tillamook', posts: generatePosts('Tillamook') },
  { name: 'Umatilla', posts: generatePosts('Umatilla') },
  { name: 'Union', posts: generatePosts('Union') },
  { name: 'Wallowa', posts: generatePosts('Wallowa') },
  { name: 'Wasco', posts: generatePosts('Wasco') },
  { name: 'Washington', posts: generatePosts('Washington', 5) },
  { name: 'Wheeler', posts: generatePosts('Wheeler') },
  { name: 'Yamhill', posts: generatePosts('Yamhill') },
]
