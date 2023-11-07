import About from "../About/About";
import Banner from "../Banner/Banner";
import { FAQ } from "../FAQ/FAQ";
import Review from "../Review/Review";
import Services from "../Services/Services";
import Teams from "../Teams/Teams";
import Works from "../Works/Works";


const Home = () => {
    return (
        <div className="w-full bg-white" >
       <Banner></Banner>
       <br></br>
       <br></br>
       <br></br>
          <Services></Services>
         
            <br></br>
            <br></br>
            <br></br>
          <Review></Review>
            <br></br>
            <br></br>
            <br></br>
            <FAQ></FAQ>
        <br></br>
        <br></br>
        <br></br>
        </div>
    );
};

export default Home;