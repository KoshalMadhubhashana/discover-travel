const router = require("express").Router();
const Admin = require("../../models/Admin");

//route for inserting data to db
router.route("/create").post(async (req, res) => {
  const { message, name } = req.body;

  //create new object using the schema
  const newAdmin = new Admin({
    message,
    name
  });

  await newAdmin
    .save()
    .then(() => res.status(200).json({ success: true }))
    .catch(
      (error) => res.status(500).json({ success: false, error: error }) // else save to the db
    );
});

//route for fetching user details
router.route("/").get(async (req, res) => {
  await Admin.find()
  .then((admin) => res.json(admin))
  .catch((error) => res.status(500).json({ success: false, error: error }));
});

//route for getting relevant user information using id
router.route("/get/:id").get(async (req, res) => {
  const { id } = req.params;

  await Admin.findById(id)
  .then((admins) => res.json(admins))
  .catch((error) => res.status(500).json({ success: false, error: error }));
});

//route for deleting a relavant user detail using id
router.route("/delete/:id").delete(async (req, res) => {
  const { id } = req.params;

  await Admin.findByIdAndRemove(id) //find_by_id_and_remove
  .then(() => res.json({ message: "Successfully Deleted" }))
  .catch((error) => res.status(500).json({ success: false, error: error }));
});


module.exports = router;
