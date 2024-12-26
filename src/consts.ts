export type Site = {
  TITLE: string
  DESCRIPTION: string
  EMAIL: string
  NUM_POSTS_ON_HOMEPAGE: number
  POSTS_PER_PAGE: number
  SITEURL: string
}

export type Link = {
  href: string
  label: string
}

export const SITE: Site = {
  TITLE: '',
  DESCRIPTION:
    'A bunch of geeks @ UTM',
  EMAIL: 'cyberxutm@gmail.com',
  NUM_POSTS_ON_HOMEPAGE: 2,
  POSTS_PER_PAGE: 3,
  SITEURL: 'https://CyberXUTM.github.io',
}

export const NAV_LINKS: Link[] = [
  { href: '/blog', label: 'Posts' },
  { href: '/authors', label: 'Members' },
  { href: '/about', label: 'about' },
]

export const SOCIAL_LINKS: Link[] = [
  { href: 'https://github.com/CyberXUTM', label: 'GitHub' },
  { href: 'https://www.linkedin.com/company/utmcyberx/', label: 'LinkedIn' },
  { href: 'https://facebook.com/utmcyberx/', label: 'Facebook' },
  { href: 'https://www.instagram.com/officialcyberx/', label: 'Instagram' },
  { href: 'cyberxutm@gmail.com', label: 'Email' },
  
]
