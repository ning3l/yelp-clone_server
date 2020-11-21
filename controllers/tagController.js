const client = require("../database/client");

const tagController = {
  getTags: function (req, res) {
    client
      .query("SELECT * FROM tag")
      .then((data) => res.json(data.rows))
      .catch((err) => console.log(err));
  },
  getSpecificTag: function (req, res) {
    const { id } = req.params;
    client
      .query("SELECT * FROM tag WHERE id=$1", [id])
      .then((data) => res.json(data.rows))
      .catch((err) => console.log(err));
  },
};

module.exports = tagController;
