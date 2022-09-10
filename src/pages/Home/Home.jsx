import Jumbotron from "../../components/Jumbotron/Jumbotron";
import AboutUs from "../../components/AboutUs/AboutUs";
import ContactUs from "../../components/ContactUs/ContactUs";
import Trending from "../../components/Trending/Trending";

const Home = () => {
    return (
        <main className="home">
            <Jumbotron />
            <AboutUs />
            <Trending />
            <ContactUs title='Want To Hire Us?' />
        </main>
    );
};

export default Home;
