//import { Carousel } from "bootstrap";
import { Button } from "bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Footer from "../../../common/footer/footer";
import UserLoggedStateNavbar from "../../../common/user-logged-state-navbar/user-logged-state-navbar";
import AddActivityButton from "./components/add-activity/add-activity";
import MultipleItemCarousel from "./components/multiple-item-carousel/multiple-item-carousel";
import ActivityParagraph from "./components/paragraph/paragraph";

function ActivityDetails() {
  return (
    <div>
      <UserLoggedStateNavbar></UserLoggedStateNavbar>
      <MultipleItemCarousel></MultipleItemCarousel>
      <ActivityParagraph></ActivityParagraph>
      <AddActivityButton></AddActivityButton>
      <hr />
      <Footer></Footer>
    </div>
  );
}

export default ActivityDetails;
