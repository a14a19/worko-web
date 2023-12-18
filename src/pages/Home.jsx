import ExploreTab from "../components/ExploreTab";
import FuelYourGrowth from "../components/FuelYourGrowth";
import HeroSection from "../components/HeroSection"
import SectionWithCardHome from "../components/SectionWithCardHome";
import TopProductTeam from "../components/TopProductTeam";
import PricingDetails from "../components/pricing/PricingDetails";

function Home() {
    return (
        <>
            <HeroSection />
            <TopProductTeam />
            <SectionWithCardHome />
            <ExploreTab />
            <FuelYourGrowth />
            <section className="max-w-[1140px] mx-auto mt-[10rem]">
                <h3 className="bg-clip-text mb-1 uppercase text-center" style={{ backgroundImage: "linear-gradient(0deg, rgb(134, 36, 255) 0%, rgb(233, 115, 187) 76.5625%)", WebkitTextFillColor: "transparent" }}>
                    TRANSPARENT PRICING
                </h3>
                <h2 className="text-4xl bg-clip-text font-semibold mt-3 mb-6 text-center" style={{ backgroundImage: "linear-gradient(0deg, rgb(97, 100, 107) 0%, rgb(255, 255, 255) 100%)", WebkitTextFillColor: "transparent" }}>Pricing Made Easy</h2>
                <PricingDetails />
            </section>
        </>
    )
}

export default Home;