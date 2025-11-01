import Team from "@/components/Team/Team";
import HomeHero from "./HomeHero";
import Cta from "./Cta";


const Homepage = () => {
    return (
        <div>
            <HomeHero />
            <Team />
            <Cta/>
        </div>
    );
};

export default Homepage;