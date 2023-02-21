const DataTypes = require("sequelize").DataTypes;
const _company = require("./company");
const _jobs = require("./jobs");
const _jobs_rol = require("./jobs_rol");
const _jobs_tecnology = require("./jobs_tecnology");
const _match = require("./match");
const _postulation_job_reclutier = require("./postulation_job_reclutier");
const _postulation_job_user = require("./postulation_job_user");
const _projects = require("./projects");
const _repository = require("./repository");
const _rol = require("./rol");
const _salary = require("./salary");
const _save_jobs_user = require("./save_jobs_user");
const _tecnology = require("./tecnology");
const _user = require("./user");
const _user_rol = require("./user_rol");
const _user_tecnology = require("./user_tecnology");
const rol_tecnology=require("../models/rol_tecnology")

function initModels(sequelize) {
  const user = _user(sequelize, DataTypes);
  const rol = _rol(sequelize, DataTypes);
  const tecnology = _tecnology(sequelize, DataTypes);
  const user_rol = _user_rol(sequelize, DataTypes);
  const user_tecnology = _user_tecnology(sequelize, DataTypes);
  const company = _company(sequelize, DataTypes);
  const jobs = _jobs(sequelize, DataTypes);
  const salary = _salary(sequelize, DataTypes);
  const jobs_rol = _jobs_rol(sequelize, DataTypes);
  const jobs_tecnology = _jobs_tecnology(sequelize, DataTypes);
  const postulation_job_reclutier = _postulation_job_reclutier(sequelize, DataTypes);
  const postulation_job_user = _postulation_job_user(sequelize, DataTypes);
  const match = _match(sequelize, DataTypes);
  const projects = _projects(sequelize, DataTypes);
  const repository = _repository(sequelize, DataTypes);
  const save_jobs_user = _save_jobs_user(sequelize, DataTypes);
  

  rol_tecnology.belongsTo(rol,{ as: "rol", foreignKey: "rol_id"})
  rol.hasMany(rol_tecnology,{as:"rol_tecnology",foreignKey:"rol_id"})
  rol_tecnology.belongsTo(tecnology,{ as: "tecnology", foreignKey: "tecnology_id"})
  tecnology.hasMany(rol_tecnology,{ as: "rol_tecnology", foreignKey: "tecnology_id"})

  jobs.belongsTo(company, { as: "company", foreignKey: "company_id"});
  company.hasMany(jobs, { as: "jobs", foreignKey: "company_id"});
  jobs_rol.belongsTo(jobs, { as: "job", foreignKey: "jobs_id"});
  jobs.hasMany(jobs_rol, { as: "jobs_rols", foreignKey: "jobs_id"});
  jobs_tecnology.belongsTo(jobs, { as: "job", foreignKey: "jobs_id"});
  jobs.hasMany(jobs_tecnology, { as: "jobs_tecnologies", foreignKey: "jobs_id"});
  match.belongsTo(jobs, { as: "job", foreignKey: "jobs_id"});
  jobs.hasMany(match, { as: "matches", foreignKey: "jobs_id"});
  postulation_job_reclutier.belongsTo(jobs, { as: "job", foreignKey: "jobs_id"});
  jobs.hasMany(postulation_job_reclutier, { as: "postulation_job_reclutiers", foreignKey: "jobs_id"});
  postulation_job_user.belongsTo(jobs, { as: "job", foreignKey: "jobs_id"});
  jobs.hasMany(postulation_job_user, { as: "postulation_job_users", foreignKey: "jobs_id"});
  salary.belongsTo(jobs, { as: "job", foreignKey: "job_id"});
  jobs.hasMany(salary, { as: "salaries", foreignKey: "job_id"});
  save_jobs_user.belongsTo(jobs, { as: "job", foreignKey: "jobs_id"});
  jobs.hasMany(save_jobs_user, { as: "save_jobs_users", foreignKey: "jobs_id"});
  jobs_rol.belongsTo(rol, { as: "rol", foreignKey: "rol_id"});
  rol.hasMany(jobs_rol, { as: "jobs_rols", foreignKey: "rol_id"});
  user_rol.belongsTo(rol, { as: "rol", foreignKey: "rol_id"});
  rol.hasMany(user_rol, { as: "user_rols", foreignKey: "rol_id"});
  jobs_tecnology.belongsTo(tecnology, { as: "tecnology", foreignKey: "tecnology_id"});
  tecnology.hasMany(jobs_tecnology, { as: "jobs_tecnologies", foreignKey: "tecnology_id"});
  user_tecnology.belongsTo(tecnology, { as: "tecnology", foreignKey: "tecnology_id"});
  tecnology.hasMany(user_tecnology, { as: "user_tecnologies", foreignKey: "tecnology_id"});
  company.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(company, { as: "companies", foreignKey: "user_id"});
  jobs.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(jobs, { as: "jobs", foreignKey: "user_id"});
  match.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(match, { as: "matches", foreignKey: "user_id"});
  postulation_job_reclutier.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(postulation_job_reclutier, { as: "postulation_job_reclutiers", foreignKey: "user_id"});
  postulation_job_user.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(postulation_job_user, { as: "postulation_job_users", foreignKey: "user_id"});
  projects.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(projects, { as: "projects", foreignKey: "user_id"});
  repository.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(repository, { as: "repositories", foreignKey: "user_id"});
  save_jobs_user.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(save_jobs_user, { as: "save_jobs_users", foreignKey: "user_id"});
  user_rol.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(user_rol, { as: "user_rols", foreignKey: "user_id"});
  user_tecnology.belongsTo(user, { as: "id_user", foreignKey: "id"});
  user.hasOne(user_tecnology, { as: "user_tecnology", foreignKey: "id"});
  user_tecnology.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(user_tecnology, { as: "user_tecnologies", foreignKey: "user_id"});

  /*buenas */
  return {
    company,
    jobs,
    jobs_rol,
    jobs_tecnology,
    match,
    postulation_job_reclutier,
    postulation_job_user,
    projects,
    repository,
    rol,
    salary,
    save_jobs_user,
    tecnology,
    user,
    user_rol,
    user_tecnology,
    rol_tecnology
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
