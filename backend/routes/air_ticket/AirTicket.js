const router = require("express").Router();
const AirTicket = require("../../models/Travel");

//route for inserting data to db
router.route("/create").post(async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    code,
    nationality,
    passportNumber,
    country,
  } = req.body;

  const  exDate  = Date(req.body.exDate);

  const  mobileNumber = Number(req.body.mobileNumber);

  //create new object using the schema
  const newTravel = new AirTicket({
    firstName,
    lastName,
    email,
    code,
    nationality,
    passportNumber,
    country,
    exDate,
    mobileNumber,
  });

  await newTravel
    .save()
    .then(() => res.status(200).json({ success: true }))
    .catch(
      (error) => res.status(500).json({ success: false, error: error }) // else save to the db
    );
});

//route for fetching travel details
router.route("/").get(async (req, res) => {
  await AirTicket.find()
    .then((travel) => res.json(travel))
    .catch((error) => res.status(500).json({ success: false, error: error }));
});

//route for getting relevant travel information using id
router.route("/get/:id").get(async (req, res) => {
  const { id } = req.params;
  await AirTicket.findById(id)
    .then((travels) => res.json(travels))
    .catch((error) => res.status(500).json({ success: false, error: error }));
});

//route for deleting a relavant travel detail using id
router.route("/delete/:id").delete(async (req, res) => {
  const { id } = req.params;

  await AirTicket.findByIdAndRemove(id) //find_by_id_and_remove
    .then(() => res.json({ message: "Successfully Deleted" }))
    .catch((error) => res.status(500).json({ success: false, error: error }));
});

//route for updating a relevant travel detail using id
router.route("/update/:id").put(async (req, res) => {
  //backend route for updating relevant data and passing it back
  const { id } = req.params;
  const {
    firstName,
    lastName,
    email,
    code,
    nationality,
    passportNumber,
    country,
    exDate,
    mobileNumber,
  } = req.body;

  //find the payment by id and update the relevant tarvel details
  await AirTicket.findByIdAndUpdate(id, {
    firstName,
    lastName,
    email,
    code,
    nationality,
    passportNumber,
    country,
    exDate,
    mobileNumber,
  })
    .then(() => res.json({ success: true }))
    .catch((error) => res.json({ success: false, error: error }));
});

module.exports = router;
