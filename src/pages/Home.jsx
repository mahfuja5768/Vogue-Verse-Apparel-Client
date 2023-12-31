import Banner from "../components/Banner";
import Brands from "../components/Brands";
import HappyCustomers from "../components/HappyCustomers";
import About from "./About";
import Faq from "./Faq";


const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <Brands></Brands>
          <About></About>
          <HappyCustomers></HappyCustomers>
          <Faq></Faq>

        </div>
    );
};

export default Home;