let projects = [
  {
    id: 6,
    img: "https://res.cloudinary.com/de8q1kwuh/image/upload/v1680297382/portofolio.khairulhabibie.my.id/A_Note_App_ukrlfj.webp",
    text: "A Note App",
    link: "https://noteapp.khairulhabibie.my.id/",
    isFeatured: false,
    tags: ["react", "tailwind"],
  },
  {
    id: 5,
    img: "https://res.cloudinary.com/de8q1kwuh/image/upload/v1680297382/portofolio.khairulhabibie.my.id/A_Bookshelf_App_gkbayo.webp",
    text: "A Bookshelf App",
    link: "https://codepen.io/khairulhabibie/details/abKyabm",
    isFeatured: false,
    tags: ["react", "tailwind"],
  },
  {
    id: 4,
    img: "https://res.cloudinary.com/de8q1kwuh/image/upload/v1680297382/portofolio.khairulhabibie.my.id/A_Cafe_Menu_cf9qcv.webp",
    text: "A Cafe Menu",
    link: "https://codepen.io/khairulhabibie/details/RwJZYNQ",
    isFeatured: false,
    tags: ["react", "tailwind"],
  },
  {
    id: 3,
    img: "https://res.cloudinary.com/de8q1kwuh/image/upload/v1680297381/portofolio.khairulhabibie.my.id/A_Registration_Form_uqrqwq.webp",
    text: "A Registration Form",
    link: "https://codepen.io/khairulhabibie/details/qBKXMOm",
    isFeatured: false,
    tags: ["react", "tailwind"],
  },
  {
    id: 2,
    img: "https://res.cloudinary.com/de8q1kwuh/image/upload/v1680297382/portofolio.khairulhabibie.my.id/A_Nutrition_Label_stiyts.webp",
    text: "A Nutrition Label",
    link: "https://codepen.io/khairulhabibie/details/poKrOvM",
    isFeatured: false,
    tags: ["react", "tailwind"],
  },
  {
    id: 1,
    img: "https://res.cloudinary.com/de8q1kwuh/image/upload/v1680297382/portofolio.khairulhabibie.my.id/A_Survey_Form_v59zie.webp",
    text: "A Survey Form",
    link: "https://codepen.io/khairulhabibie/details/oNyePXe",
    isFeatured: false,
    tags: ["react", "tailwind"],
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
