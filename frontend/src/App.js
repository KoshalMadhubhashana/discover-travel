import ActivityDetailsPage from "./components/pages/activity/activity-details/activity-details";
import HomePage from "./components/pages/activity/home/home-page";
import { Routes, Route } from "react-router-dom";
import AddActivityPage from "./components/pages/activity/add-activity/add-activity-page";
import ActivitiesPage from "./components/pages/activity/activities/activities-page";
import ManageActivityPage from "./components/pages/activity/manage-activity/manage-activity-page";
import UpdateActivityForm from "./components/pages/activity/update-activity/components/add-activity-form/add-activity-form";
import Home from "./components/pages/airticket/Home";
import Home2 from "./components/pages/guide/Home";
import AddTravelDetails from "./components/pages/airticket/AddTravelDetails";
import Adminpage from "./components/pages/airticket/Adminpage";
import TravelDetails from "./components/pages/airticket/TravelDetails";
import Dashboard from "./components/pages/airticket/Dashboard";
import UpdateTravelDetails from "./components/pages/airticket/UpdateTravelDetails";
import BookFlight from "./components/pages/airticket/BookFlight";
import UserDashbord from "./components/pages/guide/GuideDashbord";
import Profile from "./components/pages/guide/Profile";
import Inbox from "./components/pages/guide/inbox";
import ContactGuid from "./components/pages/guide/ContactGuid";
import GuideDetaiils from "./components/pages/guide/GuideDetaiils";
import Login from "./components/pages/guide/Login";
import GuidSignUpForm from "./components/pages/guide/GuidSignUpForm";
import ForgotPasword from "./components/pages/guide/ForgotPassword";
import ResetPassword from "./components/pages/guide/ResetPassword";

// import HomePage from './components/Home/HomePage';
import adminhotelbooking from './components/pages/hotel/HotelRooms/AdminHotelBooking';
import hotelbookingdetails from './components/pages/hotel/HotelRooms/HotelBookingDetails';
import addnewhotelbooking from './components/pages/hotel/HotelRooms/AddNewHotelBooking';
import edithotelbooking from './components/pages/hotel/HotelRooms/EditHotelBooking';
import hotelpackage from './components/pages/hotel/HotelRooms/HotelPackage';
import adminhotelpackage from './components/pages/hotel/HotelRooms/AdminHotelPcakage';
import adminaddhotelpackage from './components/pages/hotel/HotelRooms/AdminAddHotelPackage';
import adminedithotelpackage from './components/pages/hotel/HotelRooms/AdminEditHotelPackage';
import adminhotelpackagedetails from './components/pages/hotel/HotelRooms/AdminHotelPackageDetails';
import Gallery from './components/pages/hotel/Home/Gallery';
import ContactUs from './components/pages/hotel/Home/Contactus';
import ContactUsAdmin from './components/pages/hotel/Home/ContactUsAdmin';
import AdminHome from  './components/pages/hotel/Home/AdminHome';
import hotelpackagedetails from './components/pages/hotel/HotelRooms/HotelPackageDetails';
import Services from './components/pages/hotel/Home/Services';
import SearchHotelBooking from './components/pages/hotel/HotelRooms/SearchHotelBooking';
import UserHotelBookingDetails from './components/pages/hotel/HotelRooms/UserHotelBookingDetails';

import NavBar from "./components/pages/guide/Navbar";

function App() {
  return (
    <div className="App">
      <Routes>
        {/*Activity*/}
        <Route path="/" element={<HomePage />} />
        <Route path="/activityDetailsPage" element={<ActivityDetailsPage />} />
        <Route path="/addActivityPage" element={<AddActivityPage />} />
        <Route path="/activitiesPage" element={<ActivitiesPage />} />
        <Route path="/manageActivityPage" element={<ManageActivityPage />} />
        <Route path="/updateActivityPage/:id" element={<UpdateActivityForm />} />

        {/*AirTicket*/}
        {/*<Route path="/" element={<Home />} />*/}
        {/*<Route path="/dashbord" element={<Dashboard />} />*/}
        <Route path="/addtraveldetails" element={<AddTravelDetails />}/>
        <Route path="/adminpage" element={<Adminpage />} />
        <Route path="/traveldetails" element={<TravelDetails />} />
        <Route path="/update/:id" element={<UpdateTravelDetails />} />
        <Route path="/bookflight" element={<BookFlight />} />

        {/*Guide*/}
        <Route path="/home" element={ <Home2 />} />

        <Route path="/user-dashboard/:username" element={<UserDashbord/>}/>
        <Route path="/user-dashboard/:username/profile/:id" element={<Profile/>}/>
        <Route path="/user-dashboard/:username/inbox" element={<Inbox/>}/>
        <Route path="/contactguide/:id" element={<ContactGuid/>}/>
        <Route path="/guidedetails" element={<GuideDetaiils/>} />
        <Route path="/login" element={[<NavBar />,<Login/>]} />
        <Route path="/register" element={[<NavBar />,<GuidSignUpForm/>]} />
        <Route path="/forgotpassword" element={[<NavBar />,<ForgotPasword/>]} />
        <Route path="/passwordreset/:resetToken" element={[<NavBar />,<ResetPassword/>]} />

        {/*<Route path="/admin" element={<Adminpage />} />*/}

        {/*Hotel*/}


        {/*<Route path ="/" exact component={HomePage}/>*/}
        <Route path="/adminhotelbooking" exact component = {adminhotelbooking}/>
        <Route path="/userhotelbooking/hotelbookingdetails/:id" exact component = {hotelbookingdetails}/>
        <Route path="/addnewhotelbooking/:id" exact component = {addnewhotelbooking}/>
        <Route path="/edithotelbooking/:id" exact component = {edithotelbooking}/>
        <Route path="/hotelpackage" exact component = {hotelpackage}/>
        <Route path="/adminhotelpackage" exact component = {adminhotelpackage}/>
        <Route path="/adminaddhotelpackage" exact component = {adminaddhotelpackage}/>
        <Route path="/adminedithotelpackage/:id" exact component = {adminedithotelpackage}/>
        <Route path="/adminhotelpackagedetails/:id" exact component = {adminhotelpackagedetails}/>
        <Route path="/gallery" exact component={Gallery}/>
        <Route path="/contactus" exact component ={ContactUs}/>
        <Route path="/contactus/admin" exact component ={ContactUsAdmin}/>
        <Route path="/adminhome" exact component={AdminHome}/>
        <Route path="/hotelpackagedetails/:id" exact component = {hotelpackagedetails}/>
        <Route path="/services" exact component = {Services}/>
        <Route path="/userhotelbooking/View" exact component = {SearchHotelBooking}/>
        <Route path="/UserHotelBookingDetails/:id" exact component = {UserHotelBookingDetails}/>

      </Routes>
    </div>
  );
}

export default App;
