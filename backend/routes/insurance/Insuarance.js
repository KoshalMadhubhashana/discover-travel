const router = require("express").Router();
const Insuarance = require("../../models/Insuarance");

//route for inserting data to db
router.route("/create").post(async (req, res) => {
    const {
        itype,
        iDescription,
        iDate,
        iCatergory
    } = req.body;


    //create new object using the schema
    const newInsuarance = new Insuarance({
        itype,
        iDescription,
        iDate,
        iCatergory,
    });

    await newInsuarance
    .save()
    .then(() => res.status(200).json({ success: true }))
    .catch(
      (error) => res.status(500).json({ success: false, error: error }) // else save to the db
    );
});

//route for fetching payment details
router.route("/").get(async (req, res) => {
    await Insuarance.find()
    .then((insuarance) => res.json(insuarance))
    .catch((error) => res.status(500).json({ success: false, error: error }));
});

//route for getting relevant payment information using id
router.route("/get/:id").get(async (req, res) => {
    const { id } = req.params;

    await Insuarance.findById(id)
    .then((insuarances) => res.json(insuarances))
    .catch((error) => res.status(500).json({ success: false, error: error }));
});

//route for deleting a relavant payment detail using id
router.route("/delete/:id").delete(async (req, res) => {
    const { id } = req.params;

    await Insuarance.findByIdAndRemove(id) //find_by_id_and_remove
    .then(() => res.json({ message: "Successfully Deleted" }))
    .catch((error) => res.status(500).json({ success: false, error: error }));
});

//route for updating a relevant payment detail using id
router.route("/update/:id").put(async (req, res) => {
    //backend route for updating relevant data and passing it back
    const { id } = req.params;
    const {
        itype,
        iDescription,
        iDate,
        iCatergory,
    } = req.body;

    //find the payment by id and update the relevant payment details
    await Insuarance.findByIdAndUpdate(id ,{
        itype,
        iDescription,
        iDate,
        iCatergory,
    })
    .then(() => res.json({ success: true }))
    .catch((error) => res.json({ success: false, error: error }));
});

module.exports = router;