const projects = [
  {
    id: 6,
    imgUrl:
      'https://res.cloudinary.com/de8q1kwuh/image/upload/v1680297382/portofolio.khairulhabibie.my.id/A_Note_App_ukrlfj.webp',
    title: 'A Note App',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing',
    link: '404',
    isFeatured: false,
    tags: ['react'],
  },
  {
    id: 5,
    imgUrl:
      'https://res.cloudinary.com/de8q1kwuh/image/upload/v1680297382/portofolio.khairulhabibie.my.id/A_Bookshelf_App_gkbayo.webp',
    title: 'A Bookshelf App',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing',
    link: '404',
    isFeatured: false,
    tags: ['noFramework'],
  },
  {
    id: 4,
    imgUrl:
      'https://res.cloudinary.com/de8q1kwuh/image/upload/v1680297382/portofolio.khairulhabibie.my.id/A_Cafe_Menu_cf9qcv.webp',
    title: 'A Cafe Menu',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing',
    link: '404',
    isFeatured: false,
    tags: ['noFramework'],
  },
  {
    id: 3,
    imgUrl:
      'https://res.cloudinary.com/de8q1kwuh/image/upload/v1680297381/portofolio.khairulhabibie.my.id/A_Registration_Form_uqrqwq.webp',
    title: 'A Registration Form',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing',
    link: '404',
    isFeatured: false,
    tags: ['noFramework'],
  },
  {
    id: 2,
    imgUrl:
      'https://res.cloudinary.com/de8q1kwuh/image/upload/v1680297382/portofolio.khairulhabibie.my.id/A_Nutrition_Label_stiyts.webp',
    title: 'A Nutrition Label',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing',
    link: '404',
    isFeatured: false,
    tags: ['noFramework'],
  },
  {
    id: 1,
    imgUrl:
      'https://res.cloudinary.com/de8q1kwuh/image/upload/v1680297382/portofolio.khairulhabibie.my.id/A_Survey_Form_v59zie.webp',
    title: 'A Survey Form',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicingddddddddddddsdsd sdsdsdsd sdsdsdsd sdsdsdwsd dsdsdws sdsdsd',
    link: '404',
    isFeatured: false,
    tags: ['noFramework'],
  },
];

function getProjects() {
  return projects;
}
function featuredProjects() {
  const featured = projects.filter((project) => !project.isFeatured);
  return featured;
}

export { getProjects, featuredProjects };
