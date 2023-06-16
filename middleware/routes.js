import AuthRoute from "../routes/AuthRoute.js";

export default (app) => {
  app.use("/auth", AuthRoute);
};
