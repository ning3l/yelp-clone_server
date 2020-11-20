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
  getAllCities: function (req, res) {
    client
      .query("SELECT * FROM city")
      .then((data) => res.json(data.rows))
      .catch((err) => console.log(err));
  },
  getSpecificCity: function (req, res) {
    const { id } = req.params;
    client
      .query("SELECT * FROM city WHERE id=$1", [id])
      .then((data) => res.json(data.rows))
      .catch((err) => console.log(err));
  },
  getRestNamesCities: function (req, res) {
    client
      .query(
        "SELECT r.name as restaurant_name, c.name as city_name FROM restaurant r JOIN city c ON r.city_id = c.id"
      )
      .then((data) => res.json(data.rows))
      .catch((err) => console.log(err));
  },
};

module.exports = restaurantController;
