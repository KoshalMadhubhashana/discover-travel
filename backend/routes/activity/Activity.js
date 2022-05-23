const router = require("express").Router();
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
let path = require("path");

const Activity = require("../../models/Activity");

const storage = multer.diskStorage({
  designation: function (req, file, cb) {
    cb(null, "./frontend/public/images");
  },

  filename: function (req, file, cb) {
    cb(null, uuidv4() + "-" + Date.now() + path.extname(file.originalname));
  },
});

const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png"];
  if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

let upload = multer({ storage, fileFilter });

//route for creating database insertion
router.route("/create").post(upload.single("image"),async (req, res) => {
  const {
    activityName,
    activityDescription,
    activityPrice,
    activityImage,
  } = req.body;

  // create a new object using database schema
  const newActivity = new Activity({
    activityName,
    activityDescription,
    activityPrice,
    activityImage,
  });


  await newActivity
    .save()
    .then(() => res.status(200).json({ success: true }))
    .catch(
      (error) => res.status(500).json({ success: false, error: error }) // else save to the db
    );
});

//route for fetching all the data
router.route("/").get(async (req, res) => {
  await Activity.find()
    .then((activity) => res.json(activity))
    .catch((error) => res.status(500).json({ success: false, error: error }));
});

//route for getting a relavant document using id
router.route("/get/:id").get(async (req, res) => {
  const { id } = req.params;

  await Activity.findById(id)
    .then((activities) => res.json(activities))
    .catch((error) => res.status(500).json({ success: false, error: error }));
});

router.route("/delete/:id").delete(async (req, res) => {
  const { id } = req.params;

  await Activity.findByIdAndRemove(id) //find by the document by id and delete
    .then(() => res.json({ message: "Successfully Deleted" }))
    .catch((error) => res.status(500).json({ success: false, error: error }));
});

//route for updating a relavant document using id
router.route("/update/:id").put(upload.single("photo"),async (req, res) => {
  //backend route for updating relavant data and passing back
  const { id } = req.params;
  const {
    activityName,
    activityDescription,
    activityPrice,
    activityImage,
  } = req.body;

  //find the document by and update the relavant data
  await Activity.findByIdAndUpdate(id, {
    activityName,
    activityDescription,
    activityPrice,
    activityImage,
  })
    .then(() => res.json({ success: true }))
    .catch((error) => res.json({ success: false, error: error }));
});


module.exports = router;