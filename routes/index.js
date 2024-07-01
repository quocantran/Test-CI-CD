const userRoute = require("./user.route");
const routes = (app) => {
  app.use("/", userRoute);
  app.use("/", (req, res) => {
    res.status(200).json({
      message: "test",
      description: "CI-CD",
    });
  });
};

module.exports = routes;
