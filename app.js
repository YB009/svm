import express from "express";
import path from "path";
import expressLayouts from "express-ejs-layouts";
import indexRouter from "./routes/index.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();

// View engine & layouts
app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "views"));
app.use(expressLayouts);
app.set("layout", "layout");

// Static files
app.use(express.static(path.join(process.cwd(), "public")));

// Routes
app.use("/", indexRouter);

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`S.M.V site running at http://localhost:${PORT}`);
});
