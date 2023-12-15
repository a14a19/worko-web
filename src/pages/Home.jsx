import ExploreTab from "../components/ExploreTab";
import FuelYourGrowth from "../components/FuelYourGrowth";
import HeroSection from "../components/HeroSection"
import SectionWithCardHome from "../components/SectionWithCardHome";
import TopProductTeam from "../components/TopProductTeam";

function Home() {
    return (
        <>
            <HeroSection />
            <TopProductTeam />
            <SectionWithCardHome />
            <ExploreTab />
            <FuelYourGrowth />
        </>
    )
}

export default Home;