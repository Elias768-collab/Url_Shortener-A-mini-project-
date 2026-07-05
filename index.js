//importing express package into the project
import express from "express"

//import all routes created inside routes foldder
import urlRoutes from "./routes/urlRoutes.js"

const app = express();

//Middleware
app.use(express.json());

//Routes
app.use("/urls", urlRoutes)

//port
const PORT = process.env.PORT || 3000;

//start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});