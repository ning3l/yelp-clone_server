const client = require("../database/client");

const restaurantController = {
  getRestaurants: function (req, res) {
    client
      .query("SELECT * FROM restaurant")
      .then((data) => res.json(data.rows))
      .catch((err) => console.log(err));
  },
  getOneRestaurant: function (req, res) {
    const { id } = req.params;
    console.log(id);
    client
      .query("SELECT * FROM restaurant WHERE id=$1", [id])
      .then((data) => res.json(data.rows))
      .catch((err) => console.log(err));
  },
};

module.exports = restaurantController;
