const client = require("../database/client");

const citiesController = {
  getAllCities: function (req, res) {
    client
      .query("SELECT * FROM city")
      .then((data) => res.json(data.rows))
      .catch((err) => console.log(err));
  },
  getSpecificCity: function (req, res) {
    const { id } = req.params;
    console.log(typeof id);
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

module.exports = citiesController;
