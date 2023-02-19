const usersRoutes = require("./user.routes");
const authRoutes = require("./auth.routes");
const rolRoutes = require("./rol.routes");
const saveJobsUserRoutes = require("./saveJobsUser.routes");
const jobsRoutes = require("./jobs.routes");
const matchRoutes = require("./matche.routes");
const postulatioRoutes = require("./postulation.routes");
const proyects_and_repositoriesRoutes = require("./proyects_and_repository.routes");
const tecnologyRoutes = require("./tecnology.routes");

const RoutesApp = (app) => {
  app.use("/api/v1", usersRoutes);
  app.use("/api/v1/auth", authRoutes);
  app.use("/api/v1", rolRoutes);
  app.use("/api/v1", jobsRoutes);
  app.use("/api/v1", matchRoutes);
  app.use("/api/v1", postulatioRoutes);
  app.use("/api/v1", proyects_and_repositoriesRoutes);
  app.use("/api/v1", saveJobsUserRoutes);
  app.use("/api/v1", tecnologyRoutes);
};

module.exports = RoutesApp;
