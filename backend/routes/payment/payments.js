const router = require("express").Router();
let Payment = require("../../models/Payment");


router.route("/add").post((req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const phoneNumber = Number(req.body.phoneNumber);
    const AddressOne = req.body.AddressOne;
    const AddressTwo = req.body.AddressTwo;
    const townCity = req.body.townCity;
    const country = req.body.country;
    const cardHolderName = req.body.cardHolderName;
    const cardNumber = Number(req.body.cardNumber);
    const expMonth = Number(req.body.expMonth);
    const expYear = Number(req.body.expYear);
    const cvcNumber = Number(req.body.cvcNumber);

    const newPayment = new Payment({

        firstName,
        lastName,
        email,
        phoneNumber,
        AddressOne,
        AddressTwo,
        townCity,
        country,
        cardHolderName,
        cardNumber,
        expMonth,
        expYear,
        cvcNumber
    })


    newPayment.save()
        .then(() => res.status(200).json({success: true}))
        .catch(
            (error) => res.status(500).json({success: false, error: error}) // else save to the db
        );

})

router.route("/view").get((req, res) => {

    Payment.find().then((payment) => {
        res.json(payment)
    }).catch((err) => {
        console.log(err)
    })

})


router.route("/update/:id").patch(async (req, res) => {

    const pay = await Payment.findById(req.params.id);

    if (pay) {
        pay.firstName = req.body.firstName || pay.firstName;
        pay.lastName = req.body.lastName || pay.lastName;
        pay.email = req.body.email || pay.email;
        pay.phoneNumber = req.body.phoneNumber || pay.phoneNumber;
        pay.AddressOne = req.body.AddressOne || pay.AddressOne;
        pay.AddressTwo = req.body.AddressTwo || pay.AddressTwo;
        pay.townCity = req.body.townCity || pay.townCity;
        pay.country = req.body.country || pay.country;

        const updatePayment = await pay.save();

        res.json({
            firstName: updatePayment.firstName,
            lastName: updatePayment.lastName,
            email: updatePayment.email,
            phoneNumber: updatePayment.phoneNumber,
            AddressOne: updatePayment.AddressOne,
            AddressTwo: updatePayment.AddressTwo,
            townCity: updatePayment.townCity,
            country: updatePayment.country
        });
    } else {
        res.status(404);
        throw new Error("Can't Update Payment Details");
    }


})


router.route("/delete/:id").delete(async (req, res) => {
    let payID = req.params.id;

    await Payment.findByIdAndDelete(payID)
        .then(() => {
            res.status(200).send({status: "Payment deleted"});
        }).catch((err) => {
            console.log(err.message);
            res.status(500).send({status: "Error with delete payment", error: err.message});
        })
})

router.route("/get/:id").get(async (req, res) => {
    const pay = await Payment.findById(req.params.id);

    if (pay) {
        res.json(pay);
    } else {
        res.status(404).json({message: "Payment not found"});
    }
})


module.exports = router;