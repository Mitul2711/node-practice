const shortid = require('shortid');
const URL = require("../model/url")


async function handleGenerateNewShortUrl(req, res) {

    const shortId = shortid();
    const body = req.body;

    if(!body.url) {
        return res.status(400).json({ error: "url is required" });
    }

    await URL.create({
        shortId: shortId,
        redirectUrl: body.url,
        visitHistory: [],
        createdBy: req.user._id,
    })

    return res.render("home", {
        id: shortId
    });

}
async function handleShortUrl(req, res) {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
        { shortId },
        {
            $push: {
                visitHistory: {
                    timeStamp: Date.now()
                }
            }
        }
    );

    if (!entry) {
        return res.status(404).send('URL not found');
    }

    res.redirect(entry.redirectUrl);
}


async function handleGetAnalytics(req, res) { 
    const shortId = req.params.shortId;
    const result = await URL.findOne({ shortId });

    return res.json({
        totalClicks: result.visitHistory.length,
        analytics: result.visitHistory
    })
}

module.exports = {
    handleGenerateNewShortUrl,
    handleShortUrl,
    handleGetAnalytics
}

