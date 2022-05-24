import ActivityDetailsPage from "./components/pages/activity/activity-details/activity-details";
import {Routes, Route} from "react-router-dom";
import AddActivityPage from "./components/pages/activity/add-activity/add-activity-page";
import ActivitiesPage from "./components/pages/activity/activities/activities-page";
import ManageActivityPage from "./components/pages/activity/manage-activity/manage-activity-page";
import UpdateActivityForm
    from "./components/pages/activity/update-activity/components/add-activity-form/add-activity-form";
import Home from "./components/pages/airticket/Home";
import Home2 from "./components/pages/guide/Home";
import AddTravelDetails from "./components/pages/airticket/AddTravelDetails";
import TravelDetails from "./components/pages/airticket/TravelDetails";
import Dashboard from "./components/pages/airticket/Dashboard";
import UpdateTravelDetails from "./components/pages/airticket/UpdateTravelDetails";
import BookFlight from "./components/pages/airticket/BookFlight";
import UserDashbord from "./components/pages/guide/GuideDashbord";
import Profile from "./components/pages/guide/Profile";
import Inbox from "./components/pages/guide/inbox";
import ContactGuid from "./components/pages/guide/ContactGuid";
import GuideDetaiils from "./components/pages/guide/GuideDetaiils";


import Adminhotelbooking from './components/pages/hotel/HotelRooms/AdminHotelBooking';
import Hotelbookingdetails from './components/pages/hotel/HotelRooms/HotelBookingDetails';
import Addnewhotelbooking from './components/pages/hotel/HotelRooms/AddNewHotelBooking';
import Edithotelbooking from './components/pages/hotel/HotelRooms/EditHotelBooking';
import Adminhotelpackage from './components/pages/hotel/HotelRooms/AdminHotelPcakage';
import Adminaddhotelpackage from './components/pages/hotel/HotelRooms/AdminAddHotelPackage';
import Adminedithotelpackage from './components/pages/hotel/HotelRooms/AdminEditHotelPackage';
import Adminhotelpackagedetails from './components/pages/hotel/HotelRooms/AdminHotelPackageDetails';
import Gallery from './components/pages/hotel/Home/Gallery';
import ContactUs from './components/pages/hotel/Home/Contactus';
import ContactUsAdmin from './components/pages/hotel/Home/ContactUsAdmin';
import CommonAdminHome from './components/pages/hotel/Home/CommonAdminHome';
import Hotelpackagedetails from './components/pages/hotel/HotelRooms/HotelpackageDetails';
import Services from './components/pages/hotel/Home/Services';
import SearchHotelBooking from './components/pages/hotel/HotelRooms/SearchHotelBooking';
import UserHotelBookingDetails from './components/pages/hotel/HotelRooms/UserHotelBookingDetails';
import Hotelpackage from "./components/pages/hotel/HotelRooms/HotelPackage";
import AllPayment from "./components/pages/payments/AllPayment";
import Header from "./components/pages/payments/Header";
import EditPayment from "./components/pages/payments/myPayments";
import Insertfunction from "./components/pages/payments/paymentDetails";
import Footer from "./components/pages/payments/Footer";
import InsuranceNavbar from "./components/pages/insurance/InsuranceNavbar";
import Package from "./components/pages/insurance/Package";
import PackageSecond from "./components/pages/insurance/PackageSecond";
import AdminContact from "./components/pages/insurance/AdminContact";
import UpdatePackage from "./components/pages/insurance/UpdatPackage";
import Navbar from "./components/common/navbar/navbar";
import Register from "./components/pages/user/Register/Register";
import Login from "./components/pages/user/Login/Login";
import ForgotPasword from "./components/pages/user/Register/ForgotPassword";
import ResetPassword from "./components/pages/user/Register/ResetPassword";
import SearchResults from "./components/pages/airticket/SearchResults";
import MyBooking from "./components/pages/airticket/MyBooking";
import ReviewBooking from "./components/pages/airticket/ReviewBooking";
import AdminAirTicket from "./components/pages/airticket/AdminAirTicket";
import HomePage from "./components/pages/hotel/Home/HomePage";
import InsuranceAdminpage from "./components/pages/insurance/InsuranceAdminpage";
import GuideAdminpage from "./components/pages/guide/GuideAdminpage";
import PackageBooking from "./components/pages/package/PackageBooking";
import AllPackagesAdmin from "./components/pages/package/TravelPackagesAdmin";
import CreatePackage from "./components/pages/package/AddTravelPackage";
import PackageDetails from "./components/pages/package/TravelPackageDetails";
import PackageDetailsAdmin from "./components/pages/package/TravelPackageDetailsAdmin";
import EditPackage from "./components/pages/package/EditTravelPackage";
import EditTPackage from "./components/pages/package/EditPackage2";

import AllPackages from "./components/pages/package/TravelPackages";
import AllBooking from './components/pages/package/BookingAllDetails';
import DeletePackage from './components/pages/package/DeleteTravelPackage'
import GuidSignUpForm from "./components/pages/guide/GuidSignUpForm";
import GuideLogin from "./components/pages/guide/GuideLogin";

function App() {
    return (
        <div className="App">
            <Routes>
                {/*Activity*/}
                {/*<Route path="/" element={<HomePage/>}/>*/}
                <Route path="/activityDetailsPage" element={<ActivityDetailsPage/>}/>
                <Route path="/addActivityPage" element={<AddActivityPage/>}/>
                <Route path="/activitiesPage" element={<ActivitiesPage/>}/>
                <Route path="/manageActivityPage" element={<ManageActivityPage/>}/>
                <Route path="/updateActivityPage/:id" element={<UpdateActivityForm/>}/>

                {/*AirTicket*/}
                {/*<Route path="/" element={<Home />} />*/}
                {/*<Route path="/dashbord" element={<Dashboard/>}/>*/}
                <Route path="/addtraveldetails" element={<AddTravelDetails/>}/>
                <Route path="/adminairticket" element={<AdminAirTicket/>}/>
                <Route path="/traveldetails" element={<TravelDetails/>}/>
                <Route path="/update-airticket/:id" element={<UpdateTravelDetails/>}/>
                <Route path="/bookflight" element={<BookFlight/>}/>
                <Route path="/searchresults" element={[<Navbar />, <SearchResults />]}/>
                <Route path="/mybooking" element={[<Navbar />, <MyBooking />]} />
                <Route path="/reviewbooking" element={[<Navbar />, <ReviewBooking />]}/>

                {/*Guide*/}
                {/*<Route path="/home" element={ <Home2 />} />*/}

                <Route path="/user-dashboard/:username" element={<UserDashbord/>}/>
                <Route path="/user-dashboard/:username/profile/:id" element={<Profile/>}/>
                <Route path="/user-dashboard/:username/inbox" element={<Inbox/>}/>
                <Route path="/contactguide/:id" element={<ContactGuid/>}/>
                <Route path="/guidedetails" element={<GuideDetaiils/>}/>
                <Route path="/guide-login" element={[<GuideLogin/>]}/>
                <Route path="/guide-register" element={[<GuidSignUpForm/>]}/>
                {/*<Route path="/forgotpassword" element={[<NavBar/>, <ForgotPasword/>]}/>*/}
                {/*<Route path="/passwordreset/:resetToken" element={[<NavBar/>, <ResetPassword/>]}/>*/}

                <Route path="/guide-admin" element={<GuideAdminpage />} />

                {/*Hotel*/}


                <Route path ="/" exact element={<HomePage/>}/>
                <Route path="/adminhotelbooking" exact element = {<Adminhotelbooking/>}/>
                <Route path="/userhotelbooking/hotelbookingdetails/:id" exact element = {<Hotelbookingdetails/>}/>
                <Route path="/addnewhotelbooking/:id" exact element = {<Addnewhotelbooking/>}/>
                <Route path="/edithotelbooking/:id" exact element = {<Edithotelbooking/>}/>
                <Route path="/hotelpackage" exact element = {<Hotelpackage/>}/>
                <Route path="/adminhotelpackage" exact element = {<Adminhotelpackage/>}/>
                <Route path="/adminaddhotelpackage" exact element = {<Adminaddhotelpackage/>}/>
                <Route path="/adminedithotelpackage/:id" exact element = {<Adminedithotelpackage/>}/>
                <Route path="/adminhotelpackagedetails/:id" exact element = {<Adminhotelpackagedetails/>}/>
                {/*<Route path="/gallery" exact element={Gallery}/>*/}
                {/*<Route path="/contactus" exact element ={ContactUs}/>*/}
                {/*<Route path="/contactus/admin" exact element ={ContactUsAdmin}/>*/}
                <Route path="/hotelpackagedetails/:id" exact element = {<Hotelpackagedetails/>}/>
                {/*<Route path="/services" exact element = {Services}/>*/}
                <Route path="/userhotelbooking/View" exact element = {<SearchHotelBooking/>}/>
                {/*<Route path="/UserHotelBookingDetails/:id" exact element = {UserHotelBookingDetails}/>*/}


                {/*payment*/}
                <Route path="/view" element={<AllPayment/>}/>
                <Route path='/update/:id' element={<EditPayment/>}/>
                <Route path='/pay' element={[<Header/>,<br/>,<br/>,<Insertfunction/>, <Footer/>]} />


                {/*<Route path="/" element={<Home />} />*/}
                {/*<Route path="/" element={<Dashboard />} />*/}
                <Route path="/package" element={[<Navbar/>, <Package />]} />
                <Route path="/packagesecond" element={[<Navbar/>, <PackageSecond />]}/>
                <Route path="/admincontact" element={[<Navbar/>, <AdminContact />]}/>
                <Route path="/insuranceadmin" element={<InsuranceAdminpage />} />
                <Route path="/insurance-update/:id" element={<UpdatePackage />} />



                <Route path="/userdashboard/:name" element={<UserDashbord/>}/>
                <Route path="/userdashboard/:name/profile/:id" element={<Profile/>}/>

                <Route path="/login" element={[<Navbar />,<Login/>]} />
                <Route path="/register" element={[<Navbar />,<Register/>]} />
                <Route path="/forgotpassword" element={[<Navbar />,<ForgotPasword/>]} />
                <Route path="/passwordreset/:resetToken" element={[<Navbar />,<ResetPassword/>]} />

                <Route path="/admin" element={<CommonAdminHome />} />



                <Route path="/bookingpackage/:id" exact element = {<PackageBooking/>}/>
                <Route path="/travelpackages/admin" exact element = {<AllPackagesAdmin/>}/>
                <Route path="/travelpackage/admin/add" exact element ={<CreatePackage/>}/>
                <Route path="/travelpackages/travelpackage/:id" exact element ={<PackageDetails/>}/>
                <Route path="/travelpackages/travelpackage/admin/:id" exact element ={<PackageDetailsAdmin/>}/>
                <Route path="/travelpackage/admin/edit/:id" exact element ={<EditPackage/>}/>
                <Route path="/travelpackages" exact element = {<AllPackages/>}/>
                <Route path="/travelpackage/admin/delete/:id" exact element = {<DeletePackage/>}/>
                <Route path="/edittpackage/:id" element= {<EditTPackage/>}/>
                <Route path="/allbooking" exact element = {<AllBooking/>}/>
            </Routes>
        </div>
    );
}

export default App;
