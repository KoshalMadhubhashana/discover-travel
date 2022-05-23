const router = require('express').Router();
const Guid = require("../../models/Guide")

const { register , login , forgotPassword , resetPassword } = require("./Guide");
 
//bellow routes map the controllers
router.route("/register").post(register); // call the auth in controllers

router.route("/login").post(login);

router.route("/forgotpassword").post(forgotPassword);

router.route("/passwordreset/:resetToken").put(resetPassword);


router.route("/").get(async (req, res) => {
    await Guid.find()
    .then((auth) => res.json(auth))
    .catch((error) => res.status(500).json({ success: false, error: error}));
});

//route for getting a relavant document using id
router.route("/get/:id").get(async (req, res) => {
    const { id } = req.params;

    await Guid.findById(id)
    .then((auths) => res.json(auths))
    .catch((error) => res.status(500).json({ success: false, error: error }));
});

//route for deleting a relavant document using id
router.route("/delete/:id").delete(async (req, res) => {
    const { id } = req.params;

    await Guid.findByIdAndDelete(id) //find the document by id and remove
    .then(() => res.json({ message: "Successfully Deleted" }))
    .catch((error) => res.status(500).json({ success: false, error: error }));
});

//route for updating a relavant document using id
router.route("/update/:id").put(async (req, res) => {
    //backend route for updating relevant data and passing back
    const { id } = req.params;

    const {
        fullName,
        address,
        age,
        contactNo,
        language,
        category,
        username,
    } = req.body;
    
    //find the document by id and update the relevant data
    await Guid.findByIdAndUpdate(id, {
        fullName,
        address,
        age,
        contactNo,
        language,
        category,
        username,
    })
    .then(() => res.json({ success: true }))
    .catch((error) => res.json({ success: false, error: error }));
});

module.exports = router;