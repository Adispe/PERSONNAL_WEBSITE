// Communication avec la base de données (en cours)
const Player = require("../models/player.model");

//create and save player
exports.create = async(req, res) => {
  const {nickname, score} = req.body;
  if (!nickname || !score) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a PLayer + score
  const player = new Player({
    nickname: req.body.nickname,
    score: req.body.score,
  });

  // Save Player in the database
  player
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Player.",
      });
    });
};

//Trouver joueur existant
exports.findOne = (req, res) => {
  const nickname = req.params.nickname;

  Player.findById(nickname)
    .then((data) => {
      if (!data)
        res
          .status(404)
          .send({ message: "Not found Player with nickname " + nickname });
      else res.send(data);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "Error retrieving Player with nickname=" + nickname });
    });
};

// Update a PLayer by the nickname in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!",
    });
  }
};