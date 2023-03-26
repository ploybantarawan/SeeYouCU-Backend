const express = require("express");
const app = express()
const cors = require("cors");
const AppError = require("./utils/appError");
const errorHandler = require("./utils/errorHandler");

app.use(express.json())

const userRoute = require("./routes/user");
app.use("/user", userRoute);

app.all("*", (req, res, next) => {
 next(new AppError(`The URL ${req.originalUrl} does not exists`, 404));
});
app.use(errorHandler);

const PORT = 8080;
app.listen(PORT, () => {
 console.log(`Server running on port ${PORT}`);
});

module.exports = app;
