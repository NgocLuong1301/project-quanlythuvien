const dashboardModel = require("../models/dashboardModel");

const getDashboard = (req, res) => {
  dashboardModel.getDashboard((err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Lỗi server",
      });
    }

    res.json({
      success: true,
      data: result[0],
    });
  });
};

module.exports = {
  getDashboard,
};
