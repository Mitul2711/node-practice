const express = require("express");

const router = express.Router();

const { handleGenerateNewShortUrl } = require("../controller/url");
const { handleShortUrl } = require("../controller/url");
const { handleGetAnalytics } = require("../controller/url");

router.route("/")
.post(handleGenerateNewShortUrl);

router.route("/:shortId")
.get(handleShortUrl);


router.route("/analytics/:shortId")
.get(handleGetAnalytics);

module.exports = router;