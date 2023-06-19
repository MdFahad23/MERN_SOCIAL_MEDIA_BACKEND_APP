import AuthRoute from "../routes/AuthRoute.js";
import UserRoute from "../routes/UserRoute.js";
import PostRoute from "../routes/PostRoute.js";

export default (app) => {
  app.use("/auth", AuthRoute);
  app.use("/user", UserRoute);
  app.use("/post", PostRoute);
};
