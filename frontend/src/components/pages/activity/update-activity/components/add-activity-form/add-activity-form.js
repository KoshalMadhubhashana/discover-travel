import React, { useEffect, useState } from "react";
import "./add-activity-form.css";
import DragDrop from "../drag-drop-box/drag-drop-image-box";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const UpdateActivityForm = () => {
  const [activityName, setActivityname] = useState("");
  const [activityDescription, setActivitydescription] = useState("");
  const [activityPrice, setActivityprice] = useState("");
  const [loading, setLoading] = useState(false); //additional

  const { id } = useParams();

  useEffect(() => {
    //component mount
    const getData = async () => {
      await axios
        .get(`/activity/get/${id}`)
        .then((res) => {
          setActivityname(res.data.activityName);
          setActivitydescription(res.data.activityDescription);
          setActivityprice(res.data.activityPrice);
        })
        .catch((err) => alert(err));
    };
    getData();
  }, []);

  const editHandler = async (e) => {
    // create handler for saving data to the db
    e.preventDefault();

    setLoading(true);

    const config = {
      //headers
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      await axios.put(
        //use axios API
        `/activity/update/${id}`,
        {
          activityName,
          activityDescription,
          activityPrice,
        },
        config
      );

      setTimeout(() => {
        //set a time out
        setLoading(false);
        toast("Success! Updated 😘");
        setActivityname("");
        setActivitydescription("");
        setActivityprice("");
        window.location.reload();
      }, 5000); //5seconds timeout
    } catch (error) {
      alert(error);
      setActivityname("");
      setActivitydescription("");
      setActivityprice("");
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <div className="form-column">
        <DragDrop />
      </div>
      <div className="form-column" id="form-column-inputs">
        <h4>Update Activity Details</h4>
        <form onSubmit={editHandler}>
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
            value={activityDescription}
            onChange={(e) => setActivitydescription(e.target.value)}
            required
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
            value={activityPrice}
            onChange={(e) => setActivityprice(e.target.value)}
            required
          />
          <br />
          <br />
          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? "Updating..." : "Update"}
          </button>
          <ToastContainer style={{ marginTop: "50px" }} />
        </form>
      </div>
    </div>
  );
};

export default UpdateActivityForm;
