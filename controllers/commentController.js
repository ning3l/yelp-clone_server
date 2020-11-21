const client = require("../database/client");

const commentController = {
  getAllComments: function (req, res) {
    client
      .query("SELECT * FROM comment")
      .then((data) => res.json(data.rows))
      .catch((err) => console.log(err));
  },
  getSpecificComment: function (req, res) {
    const { id } = req.params;
    client
      .query("SELECT * FROM comment WHERE restaurant_id=$1", [id])
      .then((data) => res.json(data.rows))
      .catch((err) => console.log(err));
  },
};

module.exports = commentController;
