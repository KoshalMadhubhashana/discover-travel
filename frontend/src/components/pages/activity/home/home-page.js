import Navbar from "../../../common/navbar/navbar";
import "../../../common/main.css";
import Footer from "../../../common/footer/footer";
import ImageCarousel from "./components/carousel/carousel";
import Paragraph from "./components/paragraph/paragraph";

function HomePage() {
  return (
    <div>
      <Navbar/>
      <ImageCarousel/>
      <Paragraph/>
      <hr />
      <Footer/>
    </div>
  );
}

export default HomePage;
