import AuthRoute from "../routes/AuthRoute.js";
import UserRoute from "../routes/UserRoute.js";

export default (app) => {
  app.use("/auth", AuthRoute);
  app.use("/user", UserRoute);
};
