export const PRODUCT_CATEGORIES = [
  //常量全大写命名
  {
    label: 'UI Kits',
    value: 'ui-kits' as const, //internal id
    featured: [
      {
        name: 'Editor picks',
        href: '#',
        imageSrc: '/nav/ui-kits/mixed.jpg',
      },
      {
        name: 'New Arrivals',
        href: '#',
        imageSrc: '/nav/ui-kits/blue.jpg',
      },
      {
        name: 'Best Sellers',
        href: '#',
        imageSrc: '/nav/ui-kits/purple.jpg',
      },
    ],
  },
  {
    label: 'Icons',
    value: 'icons' as const, //internal id
    featured: [
      {
        name: 'Favorite Icon Picks',
        href: '#',
        imageSrc: '/nav/icons/picks.jpg',
      },
      {
        name: 'New Arrivals',
        href: '#',
        imageSrc: '/nav/icons/new.jpg',
      },
      {
        name: 'BestSelling Icons',
        href: '#',
        imageSrc: '/nav/icons/bestsellers.jpg',
      },
    ],
  },
];