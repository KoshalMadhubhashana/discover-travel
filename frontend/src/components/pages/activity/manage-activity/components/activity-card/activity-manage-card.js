import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./activity-manage-card.css";
import "../../../../../common/Styles/common.css";

const ActivityManageCard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      await axios
        .get("/activity/")
        .then((res) => setData(res?.data))
        .catch((error) => alert(error));
    })();
    console.log(data.activityName);
  }, []);

  const deleteData = async (id, type) => {
    //method for deleting a data
    if (window.confirm("Do you want to delete !")) {
      await axios.delete(`/activity/delete/${id}`);
      await axios
        .get("/activity/")
        .then((res) => setData(res?.data))
        .catch((error) => alert(error));
    }
  };


  return (
    <>
      {data?.map((value) => {
        return (
          <div className="card-container">
            {" "}
            <div className=""
            style={{fontWeight: "bold", padding: "10px 0 10px 10px"}}>
              <h6 key={value?._id}>{value.activityName}</h6>
              <div className="card-image">
                {/* <img src="./images/activity-01.jpg" alt="activity-01" /> */}
              </div>
            </div>
            <div className="" style={{width: "60%", textAlign: "left"}}>
              <p>{value.activityDescription}</p>
            </div>
            <div className=" btn-container">
              <Link to={`/updateActivityPage/${value._id}`}>
                <button className="mybtn-primary" id="edit-btn">Edit Details</button>
              </Link>
              <br />
              <button className="mybtn-danger" id="delete-btn" onClick={() => deleteData(value._id)}>Delete Activity</button>
            </div>{" "}
          </div>
        );
      })}
    </>
  );
};

export default ActivityManageCard;
