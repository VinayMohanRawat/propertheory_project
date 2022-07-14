const express = require("express");
const router = express.Router();
const userController = require("./userController")

router.get("/test", function (req, res) {
    res.status(200).send({ starus: true, message: "API is running good" })
})

router.post("/business_card", userController.createUser);  //API to create UserId

router.get("/business_card/:userId", userController.getUserDetails); //API to fetch a Data

module.exports = router;

