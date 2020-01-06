const express = require("express");
const router = express.Router();

const { Product } = require("../app/models");

/* GET products listing. */
router.get("/", function (req, res, next) {
	Product.findAll().then(products => {
		res.send(products);
	});
});

module.exports = router;
