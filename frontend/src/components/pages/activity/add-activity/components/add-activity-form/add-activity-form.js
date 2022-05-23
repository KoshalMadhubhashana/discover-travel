import React, { useState } from "react";
import DragDrop from "../drag-drop-box/drag-drop-image-box";
import "./add-activity-form.css";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const AddActivityForm = () => {
  const [activityName, setActivityname] = useState("");
  const [activityDescription, setActivitydescription] = useState("");
  const [activityPrice, setActivityprice] = useState("");

  const [loading, setLoading] = useState(false); //additional

  const handleSubmit = async (e) => {
    //logic for adding data to the BACKENDe
    e.preventDefault();

    setLoading(true); //additional

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      //exception handling
      var { data } = await axios.post(
        "/activity/create",
        { activityName, activityDescription, activityPrice },
        config
      );
      toast("Success! Added 😘");
      setActivityname("");
      setActivitydescription("");
      setActivityprice("");
      setLoading(false);
    } catch (error) {
      toast("Plz fill the details");
      setLoading(false);
      setTimeout(() => {}, 5000); //5s
    }
  };

  return (
    <div className="form-container">
      <div className="form-column">
        <DragDrop />
      </div>
      <div className="form-column" id="form-column-inputs">
        <h4>Add Activity Details</h4>
        <form onSubmit={handleSubmit}>
          <label for="actvity-name">Activity name</label>
          <br />
          <input
            type="text"
            id="actvity-name"
            name="activity-name"
            placeholder="Enter name"
            value={activityName}
            onChange={(e) => setActivityname(e.target.value)}
            required
          />
          <br />
          <br />
          <label for="actvity-description">Description</label>
          <br />
          <textarea
            placeholder="Enter description"
            id="actvity-description"
            name="activity-description"
            required
            value={activityDescription}
            onChange={(e) => setActivitydescription(e.target.value)}
          ></textarea>
          <br />
          <br />
          <label for="actvity-price">Price</label>
          <br />
          <input
            type="text"
            id="actvity-price"
            name="activity-price"
            placeholder="Enter price"
            required
            value={activityPrice}
            onChange={(e) => setActivityprice(e.target.value)}
          />
          <br />
          <br />
          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </button>
          <ToastContainer style={{ marginTop: "50px" }} />
        </form>
      </div>
    </div>
  );
};

export default AddActivityForm;
