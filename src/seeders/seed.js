const db = require("../utils/database");

const {
  user,
  jobs,
  rol,
  user_rol,
  salary,
  tecnology,
  save_jobs_user,
  projects,
  company,
  jobs_tecnology,
  match,
  jobs_rol,
  postulation_job_user,
  postulation_job_reclutier,
  rol_tecnology,
  user_tecnology,
  repository,
} = require("../models");

const users = [
  {
    firstname: "José",
    lastname: "Riga",
    email: "joseriga12@gmail.com",
    password: "18/569",
  },
  {
    firstname: "Julio",
    lastname: "Shultz",
    email: "shultz12@gmail.com",
    password: "18/569",
  },
  {
    firstname: "Dario",
    lastname: "Martinez",
    email: "martinez45@gmail.com",
    password: "18/569",
  },
  {
    firstname: "Diego",
    lastname: "Diaz",
    email: "diaz69@gmail.com",
    password: "18/569",
  },
];

const jobss = [
  {
    title: "Developer Front-End",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image:
      "https://www.simplilearn.com/ice9/free_resources_article_thumb/tester-or-developer-what-suits-you-the-most.jpg",
    user_id:1,
    country: "Uruguay",
    work_place: "Remote",
    working_day: "Part-time",
  },

  {
    title: "Developer Back-End",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image:
      "https://www.simplilearn.com/ice9/free_resources_article_thumb/tester-or-developer-what-suits-you-the-most.jpg",
    user_id:2,
    country: "Argentina",
    work_place: "Presencial",
    working_day: "Full-Time",
  },

  {
    title: "Diseñador UX/UI",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image:
      "https://www.simplilearn.com/ice9/free_resources_article_thumb/tester-or-developer-what-suits-you-the-most.jpg",
    user_id:3,
    country: "Colombia",
    work_place: "Remote",
    working_day: "Full-Time",
  },

  {
    title: "Full Stack Mern",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image:
      "https://www.simplilearn.com/ice9/free_resources_article_thumb/tester-or-developer-what-suits-you-the-most.jpg",
    user_id:4,
    country: "Venezuela",
    work_place: "Remote",
    working_day: "Full-Time",
  },
];

const rols = [
  {
    name: "Developer Back.End",
  },

  {
    name: "Front-End",
  },

  {
    name: "Diseñador UX/UI",
  },

  {
    name: "Full Stack Mern",
  },
];

const userRol = [
  {
    rol_id: 1,
    user_id: 1,
  },

  {
    rol_id: 2,
    user_id: 2,
  },

  {
    rol_id: 3,
    user_id: 3,
  },

  {
    rol_id: 4,
    user_id: 4,
  },
];

const salaryy = [
  {
    job_id: 1,
    price_min: 300,
    price_max: 500,
    price: 400,
    to_agree: true,
  },

  {
    job_id: 2,
    price_min: 500,
    price_max: 900,
    price: 600,
    to_agree: true,
  },

  {
    job_id: 3,
    price_min: 1000,
    price_max: 1200,
    price: 900,
    to_agree: true,
  },

  {
    job_id: 4,
    price_min: 400,
    price_max: 600,
    price: 450,
    to_agree: true,
  },
];

const tecnologyy = [
  {
    name: "java",
  },
  {
    name: "node JS",
  },
  {
    name: "react",
  },
  {
    name: "figma",
  },
];

const savesJobUser = [
  {
    user_id: 1,
    jobs_id: 4,
  },

  {
    user_id: 2,
    jobs_id: 3,
  },

  {
    user_id: 3,
    jobs_id: 2,
  },

  {
    user_id: 4,
    jobs_id: 1,
  },
];

const projectss = [
  {
    user_id: 1,
    title_project: "E-commerce - Tienda de Ropa",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    featured: false,
    url: "https://dictionary.cambridge.org/es/diccionario/ingles/repository",
    tecnology_id: 1,
    image:
      "https://www.simplilearn.com/ice9/free_resources_article_thumb/tester-or-developer-what-suits-you-the-most.jpg",
    partnership: false,
  },

  {
    user_id: 2,
    title_project: "Blog de noticias",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    featured: false,
    url: "https://dictionary.cambridge.org/es/diccionario/ingles/repository",
    tecnology_id: 2,
    image:
      "https://www.simplilearn.com/ice9/free_resources_article_thumb/tester-or-developer-what-suits-you-the-most.jpg",
    partnership: false,
  },

  {
    user_id: 3,
    title_project: "Diseño de app mobile",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    featured: false,
    url: "https://dictionary.cambridge.org/es/diccionario/ingles/repository",
    tecnology_id: 3,
    image:
      "https://www.simplilearn.com/ice9/free_resources_article_thumb/tester-or-developer-what-suits-you-the-most.jpg",
    partnership: false,
  },

  {
    user_id: 4,
    title_project: "Gamming",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    featured: false,
    url: "https://dictionary.cambridge.org/es/diccionario/ingles/repository",
    tecnology_id: 4,
    image:
      "https://www.simplilearn.com/ice9/free_resources_article_thumb/tester-or-developer-what-suits-you-the-most.jpg",
    partnership: false,
  },
];

const companyy = [
  {
    user_id: 1,
    name: "Agro Company IT",
    country: "Brasil",
    city: "San Pablo",
    phone: "15648466",
    adress: "Jao Marco 54",
    email:"damiancompany@gmail.com",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    website: "https://www.adecoagro.com/",
    verified: false,
  },

  {
    user_id: 2,
    name: "Consultors IT",
    country: "Argentina",
    city: "CABA",
    phone: "1564888466",
    adress: "Saavedra 451",
    email:"crismarcompany@gmail.com",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    website: "https://www.adecoagro.com/",
    verified: false,
  },

  {
    user_id: 3,
    name: "Drako IT",
    country: "Uruguay",
    city: "Montevideo",
    phone: "158484963",
    adress: "Llanez 21",
    email:"naocompany@gmail.com",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    website: "https://www.adecoagro.com/",
    verified: false,
  },

  {
    user_id: 4,
    name: "Education IT",
    country: "Argentina",
    city: "CABA",
    phone: "864565",
    adress: "Lavalle 235",
    email:"bryancompany@gmail.com",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    website: "https://www.adecoagro.com/",
    verified: false,
  },
];

const jobs_tecnologyy = [
  {
    jobs_id: 1,
    tecnology_id: 1,
    years_tecnology:1
  },

  {
    jobs_id: 2,
    tecnology_id: 2,
    years_tecnology:1
  },

  {
    jobs_id: 3,
    tecnology_id: 3,
    years_tecnology:1
  },

  {
    jobs_id: 4,
    tecnology_id: 4,
    years_tecnology:1
  },
];

/*
const matchh = [
  {
    user_id: 1,
    jobs_id: 1,
  },

  {
    user_id: 2,
    jobs_id: 2,
  },

  {
    user_id: 3,
    jobs_id: 3,
  },

  {
    user_id: 4,
    jobs_id: 4,
  },
];
*/
const jobs_roll = [
  {
    rol_id: 1,
    jobs_id: 1,
  },

  {
    rol_id: 2,
    jobs_id: 2,
  },

  {
    rol_id: 3,
    jobs_id: 3,
  },

  {
    rol_id: 4,
    jobs_id: 4,
  },
];

const postulation_job_userr = [
  {
    user_id: 1,
    jobs_id: 4,
    state: "waiting",
  },

  {
    user_id: 2,
    jobs_id: 3,
    state: "waiting",
  },

  {
    user_id: 3,
    jobs_id: 2,
    state: "waiting",
  },

  {
    user_id: 4,
    jobs_id: 1,
    state: "waiting",
  },
];

const postulation_job_reclutierr = [
  {
    user_id: 1,
    jobs_id: 4,
    state: "waiting",
  },

  {
    user_id: 2,
    jobs_id: 3,
    state: "waiting",
  },

  {
    user_id: 3,
    jobs_id: 2,
    state: "waiting",
  },

  {
    user_id: 4,
    jobs_id: 1,
    state: "waiting",
  },
];

const rol_tecnologyy = [
  {
    rol_id: 1,
    tecnology_id: 1,
  },

  {
    rol_id: 2,
    tecnology_id: 2,
  },

  {
    rol_id: 3,
    tecnology_id: 3,
  },

  {
    rol_id: 4,
    tecnology_id: 4,
  },
];

const user_tecnologyy = [
  {
    user_id: 1,
    tecnology_id: 1,
    years_tecnology: 1,
  },

  {
    user_id: 2,
    tecnology_id: 2,
    years_tecnology: 5,
  },

  {
    user_id: 3,
    tecnology_id: 3,
    years_tecnology: 2,
  },

  {
    user_id: 4,
    tecnology_id: 4,
    years_tecnology: 0,
  },
];

const repositoryy = [
  {
    user_id: 1,
    name: "usuario 1",
    url: "https://dictionary.cambridge.org/es/diccionario/ingles/repository",
  },

  {
    user_id: 2,
    name: "usuario 2",
    url: "https://dictionary.cambridge.org/es/diccionario/ingles/repository",
  },

  {
    user_id: 3,
    name: "usuario 3",
    url: "https://dictionary.cambridge.org/es/diccionario/ingles/repository",
  },

  {
    user_id: 4,
    name: "usuario 4",
    url: "https://dictionary.cambridge.org/es/diccionario/ingles/repository",
  },
];


db.sync({ force: true }).then(() => {
  console.log("sincronizando");
  users.forEach((u) => user.create(u));

  setTimeout(() => {
    jobss.forEach((j) => jobs.create(j));
  }, 150);

  setTimeout(() => {
    rols.forEach((r) => rol.create(r));
  }, 200);

  setTimeout(() => {
    userRol.forEach((ur) => user_rol.create(ur));
  }, 300);

  setTimeout(() => {
    salaryy.forEach((s) => salary.create(s));
  }, 400);

  setTimeout(() => {
    tecnologyy.forEach((s) => tecnology.create(s));
  }, 500);

  setTimeout(() => {
    savesJobUser.forEach((sju) => save_jobs_user.create(sju));
  }, 600);

  setTimeout(() => {
    projectss.forEach((p) => projects.create(p));
  }, 700);

  setTimeout(() => {
    companyy.forEach((c) => company.create(c));
  }, 800);

  setTimeout(() => {
    jobs_tecnologyy.forEach((jt) => jobs_tecnology.create(jt));
  }, 900);

/*
  setTimeout(() => {
    matchh.forEach((m) => match.create(m));
  }, 1000);
*/
  setTimeout(() => {
    jobs_roll.forEach((jr) => jobs_rol.create(jr));
  }, 1100);

  setTimeout(() => {
    postulation_job_userr.forEach((pju) => postulation_job_user.create(pju));
  }, 1200);

  setTimeout(() => {
    postulation_job_reclutierr.forEach((pjr) => postulation_job_reclutier.create(pjr));
  }, 1300);

  setTimeout(() => {
    rol_tecnologyy.forEach((rt) => rol_tecnology.create(rt));
  }, 1400);

  setTimeout(() => {
    user_tecnologyy.forEach((ut) => user_tecnology.create(ut));
  }, 1500);

  setTimeout(() => {
    repositoryy.forEach((ry) => repository.create(ry));
  }, 1600);
});
