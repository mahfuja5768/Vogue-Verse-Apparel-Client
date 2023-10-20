import Banner from "../components/Banner";
import Brands from "../components/Brands";
import HappyCustomers from "../components/HappyCustomers";
import Faq from "./Faq";


const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <Brands></Brands>
          <HappyCustomers></HappyCustomers>
          <Faq></Faq>

        </div>
    );
};

export default Home;