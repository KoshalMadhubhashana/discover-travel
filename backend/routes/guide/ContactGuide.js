const router = require("express").Router();

const res = require("express/lib/response");
const GuideContact = require("../../models/ContactGuide");

router.route("/create").post(async (req, res) => {

    const message = req.body.message;

    const newGuideContact = new GuideContact({message})
    await newGuideContact.save().then(() => res.json({success: true})).catch((error) => res.status(500).json({
        success: false,
        error: error
    }))

})

router.route("/").get(async (req, res) => {

    await GuideContact.find().then((guidcontact) => res.json(guidcontact)).catch((error) => res.status(500).json({
        success: false,
        error: error
    }))
})

module.exports = router;