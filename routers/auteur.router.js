const express = require('express');
const router = express.Router();
const twig = require('twig');

const auteurController = require("../controllers/auteur.controller")

router.get("/:id", auteurController.auteur_affichage);
router.get("/", auteurController.auteurs_affichage);
router.post("/", auteurController.auteur_ajout);
router.post("/delete/:id", auteurController.auteur_suppression);

module.exports = router;