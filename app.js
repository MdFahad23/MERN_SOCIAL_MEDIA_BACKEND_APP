import express from "express";

import index from "./middleware/index.js";
import routes from "./middleware/routes.js";

const app = express();
// Package Middleware
index(app);
routes(app);

export default app;
