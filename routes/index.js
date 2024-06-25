const userRoute = require("./user.route");
const routes = (app) => {
  app.use("/", userRoute);
  app.use("/", (req, res) => {
    res.status(200).json({
      message: "Tôi tên là pê thủ khoa",
      description: "Cân all các cháu 2k6",
      math: 10,
      physics: 10,
      chemistry: 10,
    });
  });
};

module.exports = routes;
